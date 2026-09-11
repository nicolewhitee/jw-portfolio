import React, { useEffect, useState } from 'react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import './admin.css';

const emptyForm = {
    event: '',
    location: '',
    title: '',
    date: '',      // display text, e.g. "Oct 13-16, 2026" - also used to derive sort order
    link: '',
};

const MONTH_INDEX = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

// Pulls a sortable yyyy-mm-dd out of whatever display text was typed, e.g.
// "Oct 13-16, 2026" -> "2026-10-13" (uses the first day of a range) or
// "Jul 2025" -> "2025-07-01" (no day given, assumes the 1st). Returns '' if
// no recognizable month/year is found.
function parseSortDateFromDisplay(display) {
    if (!display) return '';
    const match = display.match(/([A-Za-z]{3,})[a-z]*\.?\s*(\d{1,2})?(?:-\d{1,2})?,?\s*(\d{4})/);
    if (!match) return '';
    const monthIndex = MONTH_INDEX[match[1].slice(0, 3).toLowerCase()];
    if (monthIndex === undefined) return '';
    const day = match[2] ? parseInt(match[2], 10) : 1;
    const year = parseInt(match[3], 10);
    const mm = String(monthIndex + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    return `${year}-${mm}-${dd}`;
}

const PresentationsAdmin = () => {
    const [presentations, setPresentations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const [form, setForm] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'presentations'), orderBy('sortDate', 'desc'));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                setPresentations(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
                setLoading(false);
            },
            (err) => {
                console.error(err);
                setLoadError('Could not load presentations. Check your connection and try again.');
                setLoading(false);
            }
        );
        return unsubscribe;
    }, []);

    const startEdit = (item) => {
        setEditingId(item.id);
        setForm({
            event: item.event || '',
            location: item.location || '',
            title: item.title || '',
            date: item.date || '',
            link: item.link || '',
        });
        setFormError('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const startAdd = () => {
        setEditingId(null);
        setForm(emptyForm);
        setFormError('');
    };

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        if (!form.event.trim() || !form.title.trim() || !form.date.trim()) {
            setFormError('Event/journal, title, and date are all required.');
            return;
        }

        const parsedSortDate = parseSortDateFromDisplay(form.date.trim());

        const payload = {
            event: form.event.trim(),
            location: form.location.trim(),
            title: form.title.trim(),
            date: form.date.trim(),
            // Falls back to today so it still sorts somewhere reasonable if
            // the date text couldn't be parsed (e.g. no month name in it).
            sortDate: parsedSortDate || new Date().toISOString().slice(0, 10),
            link: form.link.trim(),
        };

        setSaving(true);
        try {
            if (editingId) {
                await updateDoc(doc(db, 'presentations', editingId), payload);
            } else {
                await addDoc(collection(db, 'presentations'), payload);
            }
            startAdd();
        } catch (err) {
            console.error(err);
            setFormError('Could not save. Check your connection and try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (item) => {
        if (!window.confirm(`Delete "${item.title}"? This can't be undone.`)) return;
        try {
            await deleteDoc(doc(db, 'presentations', item.id));
            if (editingId === item.id) startAdd();
        } catch (err) {
            console.error(err);
            alert('Could not delete. Check your connection and try again.');
        }
    };

    return (
        <div className="adminSection">
            <form className="adminForm" onSubmit={handleSubmit}>
                <h2>{editingId ? 'Edit Presentation / Publication' : 'Add New Presentation / Publication'}</h2>
                {formError && <div className="adminError">{formError}</div>}

                <label htmlFor="pres-event">Event or Journal Name</label>
                <input id="pres-event" type="text" value={form.event} onChange={handleChange('event')} required />

                <label htmlFor="pres-location">Location (leave blank for journal publications)</label>
                <input id="pres-location" type="text" value={form.location} onChange={handleChange('location')} placeholder="Santa Clara, CA" />

                <label htmlFor="pres-title">Presentation / Paper Title</label>
                <input id="pres-title" type="text" value={form.title} onChange={handleChange('title')} required />

                <label htmlFor="pres-date">Date (as it should appear on the site)</label>
                <input
                    id="pres-date"
                    type="text"
                    value={form.date}
                    onChange={handleChange('date')}
                    placeholder="Oct 13-16, 2026"
                    required
                />
                {form.date.trim() && (
                    parseSortDateFromDisplay(form.date.trim())
                        ? <p className="adminListMeta">Sort order will use: {parseSortDateFromDisplay(form.date.trim())}</p>
                        : <p className="adminListMeta">Couldn't find a month/year in that text — include something like "Oct 2026" so it sorts correctly (it'll still save either way).</p>
                )}

                <label htmlFor="pres-link">Link</label>
                <input id="pres-link" type="url" value={form.link} onChange={handleChange('link')} placeholder="https://..." />

                <div className="adminFormActions">
                    <button type="submit" disabled={saving}>
                        {saving ? 'Saving...' : editingId ? 'Save Changes' : 'Add Entry'}
                    </button>
                    {editingId && (
                        <button type="button" className="adminCancelBtn" onClick={startAdd}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="adminList">
                {loading && <p>Loading presentations...</p>}
                {loadError && <div className="adminError">{loadError}</div>}

                {!loading && !loadError && presentations.map((item) => (
                    <div className="adminListItem" key={item.id}>
                        <div>
                            <strong>{item.event}</strong>
                            <div className="adminListMeta">{item.title}</div>
                            <div className="adminListMeta">{item.location}{item.location && item.date && ' \u25CB '}{item.date}</div>
                        </div>
                        <div className="adminListActions">
                            <button onClick={() => startEdit(item)}>Edit</button>
                            <button className="adminDeleteBtn" onClick={() => handleDelete(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PresentationsAdmin;
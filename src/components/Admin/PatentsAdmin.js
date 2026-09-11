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
    title: '',
    patentId: '',
    date: '',           // yyyy-mm-dd - used for both display and ordering
    status: 'granted', // 'granted' | 'pending'
    description: '',
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Turns "2026-07-14" into "Jul 14, 2026" - the format shown on the public
// site. Parsed manually (not via `new Date()`) so it can't shift a day due
// to timezone conversion.
function formatDisplayDate(isoDate) {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-').map(Number);
    if (!year || !month || !day) return '';
    return `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}

const PatentsAdmin = () => {
    const [patents, setPatents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const [form, setForm] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null); // null = "add new"
    const [saving, setSaving] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'patents'), orderBy('sortDate', 'desc'));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                setPatents(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
                setLoading(false);
            },
            (err) => {
                console.error(err);
                setLoadError('Could not load patents. Check your connection and try again.');
                setLoading(false);
            }
        );
        return unsubscribe;
    }, []);

    // Granted patents (have a description) shown before pending ones, each
    // group newest first - matches how the public site groups them.
    const granted = patents.filter((p) => p.status === 'granted');
    const pending = patents.filter((p) => p.status !== 'granted');

    const startEdit = (patent) => {
        setEditingId(patent.id);
        setForm({
            title: patent.title || '',
            patentId: patent.patentId || '',
            date: patent.sortDate || '',
            status: patent.status || 'granted',
            description: patent.description || '',
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

        if (!form.title.trim() || !form.patentId.trim() || !form.date) {
            setFormError('Title, patent/application #, and date are all required.');
            return;
        }

        const payload = {
            title: form.title.trim(),
            patentId: form.patentId.trim(),
            dateIssued: formatDisplayDate(form.date),
            sortDate: form.date,
            status: form.status,
            description: form.status === 'granted' ? form.description.trim() : '',
        };

        setSaving(true);
        try {
            if (editingId) {
                await updateDoc(doc(db, 'patents', editingId), payload);
            } else {
                await addDoc(collection(db, 'patents'), payload);
            }
            startAdd();
        } catch (err) {
            console.error(err);
            setFormError('Could not save. Check your connection and try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (patent) => {
        if (!window.confirm(`Delete "${patent.title}"? This can't be undone.`)) return;
        try {
            await deleteDoc(doc(db, 'patents', patent.id));
            if (editingId === patent.id) startAdd();
        } catch (err) {
            console.error(err);
            alert('Could not delete. Check your connection and try again.');
        }
    };

    return (
        <div className="adminSection">
            <form className="adminForm" onSubmit={handleSubmit}>
                <h2>{editingId ? 'Edit Patent' : 'Add New Patent'}</h2>
                {formError && <div className="adminError">{formError}</div>}

                <label htmlFor="patent-status">Status</label>
                <select id="patent-status" value={form.status} onChange={handleChange('status')}>
                    <option value="granted">Granted (shows full description)</option>
                    <option value="pending">Pending / Applied</option>
                </select>

                <label htmlFor="patent-title">Title</label>
                <input id="patent-title" type="text" value={form.title} onChange={handleChange('title')} required />

                <label htmlFor="patent-id">Patent # (granted) or Application # (pending)</label>
                <input id="patent-id" type="text" value={form.patentId} onChange={handleChange('patentId')} required />

                <label htmlFor="patent-date">Date</label>
                <input
                    id="patent-date"
                    type="date"
                    value={form.date}
                    onChange={handleChange('date')}
                    required
                />
                {form.date && (
                    <p className="adminListMeta">Will display on the site as: {formatDisplayDate(form.date)}</p>
                )}

                {form.status === 'granted' && (
                    <>
                        <label htmlFor="patent-description">Description (from the patent abstract)</label>
                        <textarea
                            id="patent-description"
                            rows={6}
                            value={form.description}
                            onChange={handleChange('description')}
                        />
                    </>
                )}

                <div className="adminFormActions">
                    <button type="submit" disabled={saving}>
                        {saving ? 'Saving...' : editingId ? 'Save Changes' : 'Add Patent'}
                    </button>
                    {editingId && (
                        <button type="button" className="adminCancelBtn" onClick={startAdd}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="adminList">
                {loading && <p>Loading patents...</p>}
                {loadError && <div className="adminError">{loadError}</div>}

                {!loading && !loadError && (
                    <>
                        <h3>Granted ({granted.length})</h3>
                        {granted.map((p) => (
                            <div className="adminListItem" key={p.id}>
                                <div>
                                    <strong>{p.title}</strong>
                                    <div className="adminListMeta">{p.patentId} &#9675; {p.dateIssued}</div>
                                </div>
                                <div className="adminListActions">
                                    <button onClick={() => startEdit(p)}>Edit</button>
                                    <button className="adminDeleteBtn" onClick={() => handleDelete(p)}>Delete</button>
                                </div>
                            </div>
                        ))}

                        <h3>Pending / Applied ({pending.length})</h3>
                        {pending.map((p) => (
                            <div className="adminListItem" key={p.id}>
                                <div>
                                    <strong>{p.title}</strong>
                                    <div className="adminListMeta">{p.patentId} &#9675; {p.dateIssued}</div>
                                </div>
                                <div className="adminListActions">
                                    <button onClick={() => startEdit(p)}>Edit</button>
                                    <button className="adminDeleteBtn" onClick={() => handleDelete(p)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default PatentsAdmin;

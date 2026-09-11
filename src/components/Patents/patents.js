import React, { useEffect, useState } from 'react';
import './patents.css';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
const patentPerRow = 2;
const Patents = () => {
    const [patentsArray, setPatentsArray] = useState([]);
    const [next, setNext] = useState(patentPerRow);

    useEffect(() => {
        const q = query(collection(db, 'patents'), orderBy('sortDate', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const all = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
            // Granted patents (with a description) are shown before pending
            // ones; each group stays newest-first.
            const granted = all.filter((p) => p.status === 'granted');
            const pending = all.filter((p) => p.status !== 'granted');
            setPatentsArray([...granted, ...pending]);
        });
        return unsubscribe;
    }, []);

    const handleMorePatents = () => {
        setNext(next + patentPerRow);
    }
    const handleLessPatents = () => {
        setNext(patentPerRow);
        document.getElementById('patents')?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <section id='patents'>
                <div className="headerTitle" aria-level="1" role="heading">Patents</div>
                <div className="h5 mb-4">{patentsArray.length} patents applied, {patentsArray.filter((p) => p.status === 'granted').length} patents granted to date</div>
                <div className="container">
                    <div className="row display-flex g-5">
                        {patentsArray.slice(0, next).map((patent, index) => {
                            return (
                                <div className="col-12" key={patent.id || index}>
                                    <div className="patentCardLightBlue">
                                        <div className="h5">{patent.title}</div>
                                        <hr />
                                        <div className="h6">{patent.patentId} &#9675; {patent.dateIssued}</div>
                                        <p className="patentDescr">{patent.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="patentBtnGroup">
                        {next < patentsArray?.length && (
                            <button className="seeMoreBtn" onClick={handleMorePatents}>See More</button>
                        )}
                        {next > patentPerRow && (
                            <button className="seeLessBtn" onClick={handleLessPatents}>See Less</button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
export default Patents;
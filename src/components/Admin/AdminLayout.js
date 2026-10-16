import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PatentsAdmin from './PatentsAdmin';
import PresentationsAdmin from './PresentationsAdmin';
import './admin.css';

const AdminLayout = () => {
    const [activeTab, setActiveTab] = useState('patents');
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/admin/login');
    };

    return (
        <div className="adminPage">
            <header className="adminHeader">
                <div>
                    <h1>Site Content Admin</h1>
                    {currentUser && <p className="adminSignedInAs">Signed in as {currentUser.email}</p>}
                </div>
                <div className="adminHeaderActions">
                    <a href="/" target="_blank" rel="noreferrer" className="adminViewSiteLink">View live site</a>
                    <button className="adminLogoutBtn" onClick={handleLogout}>Log Out</button>
                </div>
            </header>

            <nav className="adminTabs">
                <button
                    className={activeTab === 'patents' ? 'adminTabActive' : 'adminTab'}
                    onClick={() => setActiveTab('patents')}
                >
                    Patents
                </button>
                <button
                    className={activeTab === 'presentations' ? 'adminTabActive' : 'adminTab'}
                    onClick={() => setActiveTab('presentations')}
                >
                    Invited Presentations & Peer Review Publications
                </button>
            </nav>

            <main className="adminContent">
                {activeTab === 'patents' && <PatentsAdmin />}
                {activeTab === 'presentations' && <PresentationsAdmin />}
            </main>
        </div>
    );
};

export default AdminLayout;

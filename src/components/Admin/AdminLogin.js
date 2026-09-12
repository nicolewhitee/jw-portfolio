import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './admin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [resetStatus, setResetStatus] = useState(''); // shown after "Forgot password?" is used
    const [resetSubmitting, setResetSubmitting] = useState(false);
    const { login, resetPassword, currentUser } = useAuth();
    const navigate = useNavigate();

    // Already logged in - go straight to the dashboard.
    if (currentUser) {
        return <Navigate to="/admin" replace />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResetStatus('');
        setSubmitting(true);
        try {
            await login(email, password);
            navigate('/admin');
        } catch (err) {
            setError('Incorrect email or password.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleForgotPassword = async () => {
        setError('');
        if (!email.trim()) {
            setResetStatus('Enter your email above first, then click "Forgot password?" again.');
            return;
        }
        setResetSubmitting(true);
        try {
            await resetPassword(email.trim());
        } catch (err) {
            // Intentionally ignored: whether or not this succeeds, show the
            // same message below so the login page never reveals whether a
            // given email has an account.
        } finally {
            setResetSubmitting(false);
            setResetStatus('If that email has an account, a password reset link is on its way. Check your inbox (and spam folder).');
        }
    };

    return (
        <div className="adminLoginPage">
            <form className="adminLoginForm" onSubmit={handleSubmit}>
                <h1>Admin Login</h1>
                <p className="adminLoginSubtitle">Sign in to update patents and presentations.</p>
                {error && <div className="adminError">{error}</div>}
                <label htmlFor="admin-email">Email</label>
                <input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    required
                />
                <label htmlFor="admin-password">Password</label>
                <input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Signing in...' : 'Sign In'}
                </button>
                <button
                    type="button"
                    className="adminForgotPasswordLink"
                    onClick={handleForgotPassword}
                    disabled={resetSubmitting}
                >
                    Forgot password?
                </button>
                {resetStatus && <p className="adminListMeta">{resetStatus}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;
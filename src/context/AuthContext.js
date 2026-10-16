import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // Tracks whether Firebase has reported the initial auth state yet, so
    // ProtectedRoute doesn't redirect to /login before Firebase has had a
    // chance to restore an existing session.
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setAuthLoading(false);
        });
        return unsubscribe;
    }, []);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth);
    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    const value = { currentUser, authLoading, login, logout, resetPassword };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
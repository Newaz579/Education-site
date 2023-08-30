import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.Config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const signInWithGoogle = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = (gitHubProvider) => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside on auth state changed', currentUser);
            if (currentUser === null || currentUser.emailVerified ) {
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading, 
        setLoading,
        signInWithGoogle,
        signInWithGitHub,
        createUser,
        userSignIn,
        emailVerification,
        userSignOut,
        updateUserProfile,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
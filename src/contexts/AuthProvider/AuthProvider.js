import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const providerLoing = (provider) => {
        setLoding(true);
        return signInWithPopup(auth, provider);
    }


    const providerEmailPassword = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerEmailLonig = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updatePassword(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('loging inside', currentUser);
            setUser(currentUser);
            setLoding(false);
        });
        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        providerLoing,
        providerEmailPassword,
        providerEmailLonig,
        updateUserProfile,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
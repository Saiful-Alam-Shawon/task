import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import app from './Firebase.config';

export const AuthProvider = React.createContext();
const auth = getAuth(app)


const Context = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const google = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            // console.log(currentuser);
            setUser(currentuser)
            // console.log(user);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { register, login, google, logOut, user, loading }

    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default Context;
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, methods} from '../lib/init-firebase';
import {users} from '../lib/firestore-collections';
import {setDoc, doc} from 'firebase/firestore';

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return methods.createUserWithEmailAndPassword(auth, email, password).then(cred =>{
            if (cred !== undefined){
                let userType;
            if (email.substring(email.indexOf('@') + 1) === "sun.ac.za"){
                userType = "student";
            }
            else{
                userType = "company";
            }
            let data = {
                email: cred.user.email,
                type: userType
            };
            return setDoc(doc(users, cred.user.uid), data);
            }            
          }       
          )
    }

    function login(email, password) {
        return methods.signInWithEmailAndPassword(auth, email, password)

}

function updateProfile(username ,firstName, surname, bio, faculty, degree){
    return methods.updateProfile(auth, "Franko Van Noordwyk");
}


    function logout() {
        return methods.signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        updateProfile,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
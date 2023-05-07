import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../Firebase/firebase.config"
export const AuthContext= createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const createUser=( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
        
    }
    const loginUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // observer
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>unsubscribe()
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile=(userProfile)=>{
        updateProfile(user,userProfile)
    }
    const allContext={
        createUser,
        loginUser,
        user,
        updateUserProfile,
        loading,
        logOut,
    }

    return (
        <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
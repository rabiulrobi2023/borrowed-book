import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext= createContext(null)
export const auth =getAuth(app)
export const provider = new GoogleAuthProvider()

const AuthContext = ({children}) => {
    const[user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const signUpWithPass = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const loginWithPass = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    const loginWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

  useEffect(()=>{
    setLoading(false)
    const subscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return()=>{
        subscribe()
    }
  }
    ,[])
   
    
    


    const authIfo={
        user,
        signUpWithPass,
        loginWithPass,
        loginWithGoogle,
        logOut
        


    }
    return (
        <authContext.Provider value={authIfo}>
            {children}
    
        </authContext.Provider>
    );
};

export default AuthContext;
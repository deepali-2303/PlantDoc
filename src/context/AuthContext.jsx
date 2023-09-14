import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  updateProfile,
} from "firebase/auth";
import { FIREBASE_AUTH as Auth } from "../../firebase";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(Auth, async (user) => {
      setAuth(user);
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  const signUp = async (userName, email, password) => {
    await createUserWithEmailAndPassword(Auth, email, password);

    await updateProfile(Auth.currentUser, {
      displayName: userName,
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const signOut = () => {
    return signOutFirebase(Auth);
  };

  return (
    <AuthContext.Provider value={{ auth, signOut, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

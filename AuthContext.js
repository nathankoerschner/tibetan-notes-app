import React, { createContext, useContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { getApp } from "@react-native-firebase/app";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth(getApp()).onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, []);

  const login = async (email, password) => {
    try {
      await auth(getApp()).signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth(getApp()).signOut();
    } catch (error) {
      throw error;
    }
  };
  const loginAnonymously = async () => {
    try {
      await auth(getApp()).signInAnonymously();
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (email, password) => {
    try {
      await auth(getApp()).createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    user,
    login,
    logout,
    initializing,
    loginAnonymously,
    createUser,
  };

  if (initializing) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

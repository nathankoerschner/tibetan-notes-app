import React, { createContext, useContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, []);

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      throw error;
    }
  };
  const loginAnonymously = async () => {
    try {
      await auth().signInAnonymously();
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
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

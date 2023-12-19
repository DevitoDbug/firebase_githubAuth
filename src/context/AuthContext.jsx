import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      try {
        setCurrentUser(user);
        setLoading(false);
      } catch (error) {
        console.error("Error setting current user:", error);
      }
    });
    return () => unsub();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

// Define PropTypes for AuthContextProvider
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

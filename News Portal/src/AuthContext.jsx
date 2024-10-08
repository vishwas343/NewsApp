import React, { createContext, useState } from 'react';

// Make sure to create your contexts
export const LoggedInContext = createContext();
export const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <UserContext.Provider value={{ userDetails, setUserDetails }}>
        {children}
      </UserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default AuthContextProvider;

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onUserStateChange, login, logout } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider( {children} ) {
  const [user, setUser] = useState();

  useEffect(()=>{
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return(
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}
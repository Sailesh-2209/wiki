import React, { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  error: null,
  token: null,
});

export default AuthContextProvider = () => {
  return <AuthContext.Provider></AuthContext.Provider>;
};

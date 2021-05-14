import React, { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  error: null,
  token: null,
});

export default AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: "hello",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

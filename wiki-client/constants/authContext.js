import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  error: null,
  token: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = () => {
    console.log("login");
    setUser("sailesh");
    setError(null);
    setToken("abcd");
  };

  const signup = () => {
    console.log("signup");
    setUser("sailesh");
    setError(null);
    setToken("abcd");
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        token,
        login: () => login(),
        signup: () => signup(),
        logout: () => logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

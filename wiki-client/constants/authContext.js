import { createContext, useState } from "react";
import axios from "axios";
import { baseURL } from "../constants/baseURL";

export const AuthContext = createContext({
  user: null,
  error: null,
  token: null,
  // setUser: () => {},
  // setError: () => {},
  // setToken: () => {},
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    axios
      .post(`${baseURL}/login`, {
        username,
        password,
      })
      .then((value) => {
        let { user, error, token } = value.data;
        setUser(user);
        setError(error);
        setToken(token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = () => {
    axios
      .post(`${baseURL}/register`, {
        username,
        password,
      })
      .then((value) => {
        let { user, error, token } = value.data;
        setUser(user);
        setError(error);
        setToken(token);
      })
      .catch((error) => {
        console.log(error);
      });
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
        // setUser: () => setUser(),
        // setError: () => setError(),
        // setToken: () => setToken(),
        login: (username, password) => login(username, password),
        signup: (username, password) => signup(username, password),
        logout: () => logout(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

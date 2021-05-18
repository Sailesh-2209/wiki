import { createContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from "../constants/baseURL";

export const AuthContext = createContext({
  user: null,
  error: null,
  token: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
  checkAuth: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = (username, password) => {
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
        localStorage.setItem("jwt_token", token);
        localStorage.setItem("uid", user._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = (username, password) => {
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
        localStorage.setItem("jwt_token", token);
        localStorage.setItem("uid", user._id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    setUser(null);
    setError(null);
    setToken(null);
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("uid");
    router.push("/");
  };

  const checkAuth = async (token) => {
    let response = await axios.post(
      `${baseURL}/checkauth`,
      {
        hello: "world",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.authorized;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        token,
        login: (username, password) => login(username, password),
        signup: (username, password) => signup(username, password),
        logout: () => logout(),
        checkAuth: (token) => checkAuth(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

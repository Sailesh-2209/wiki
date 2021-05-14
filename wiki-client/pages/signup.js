import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { AuthContext } from "../constants/authContext";

export default function Login() {
  const auth = useContext(AuthContext);
  const { user, error, token, signup } = auth;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password);
  };

  useEffect(() => {
    if (user != null && token && error == null) {
      router.push("/");
    }
  }, [user, error, token]);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <p>Signup</p>
          <div className={styles.registerContainer}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <label className={styles.formLabel} for="username">
              Username
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className={styles.formLabel} for="password">
              Password
            </label>
            <input
              className={styles.formInput}
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.errorContainer}></div>
            <button className={styles.formButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

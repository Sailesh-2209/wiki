import { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

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

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "../../constants/baseURL";
import styles from "../../styles/Character.module.css";
import { AuthContext } from "../../constants/authContext";

export const getStaticPaths = async () => {
  const response = await axios
    .get(`${baseURL}/programs`)
    .catch((error) => console.log(error));
  console.log(response);
  const paths = response.data.programs.map((item) => {
    return {
      params: {
        pid: item._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const pid = context.params.pid;
  let characters = null;
  let programs = null;
  characters = await axios
    .get(`${baseURL}/programs/${pid}`)
    .catch((error) => console.log(error));
  programs = await axios
    .get(`${baseURL}/programs`)
    .catch((error) => console.log(error));
  if (programs.data.error !== null) {
    return {
      props: {
        characters: characters.data,
        programs: programs.data,
      },
    };
  } else {
    let programData = programs.data.programs.filter((program) => {
      return program._id === pid;
    });
    return {
      props: {
        characters: characters.data,
        programs: {
          programs: programData,
          error: null,
        },
      },
    };
  }
};

export default function ProgramPage({ characters, programs }) {
  const auth = useContext(AuthContext);
  const { logout, checkAuth } = auth;
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(async () => {
    let uid;
    let token;
    let valid = await checkAuth(token);
    if (valid) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    if (typeof window !== undefined) {
      uid = localStorage.getItem("uid");
      token = localStorage.getItem("jwt_token");
    }
    console.log(uid, token, characters, programs);
  });

  return (
    <div className={styles.charactersPage}>
      <div className={styles.navbar}>
        <div className={styles.navbarContent}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div className={styles.registerContainer}>
            {!loggedIn ? (
              <>
                <Link href="/login">
                  <a>Login</a>
                </Link>
                <Link href="/signup">
                  <a>Signup</a>
                </Link>
              </>
            ) : (
              <p id={styles.logout} onClick={() => logout()}>
                Logout
              </p>
            )}
          </div>
        </div>
        <div className={styles.underline}></div>
        <div className="underline"></div>
      </div>
      <div className={styles.programContainer}>
        <div className={styles.programLeft}>
          <div className={styles.programHeadingContainer}>
            <p className={styles.programHeading}>{programs.programs[0].name}</p>
            <button className={styles.programDelBtn}>DELETE</button>
            <button className={styles.programUpdBtn}>UPDATE</button>
          </div>
          <div className={styles.underline}></div>
          <p className={styles.programDescription}>
            {programs.programs[0].description}
          </p>
        </div>
        <div className={styles.programRight}>
          <img
            src={programs.programs[0].image}
            alt={programs.programs[0].name}
          />
        </div>
      </div>
    </div>
  );
}

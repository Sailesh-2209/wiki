import { useState, useContext } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { baseURL } from "../constants/baseURL";
import { AuthContext } from "../constants/authContext";

const fetchData = async () => {
  let response;
  await axios
    .get(`${baseURL}/programs`)
    .then((value) => {
      response = value.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getServerSideProps = async () => {
  const response = await fetchData();
  return { props: { response } };
};

export default function Home(props) {
  const [programs, setPrograms] = useState(props.response.programs);
  const auth = useContext(AuthContext);
  console.log(auth);

  return (
    <>
      <Head>
        <title>Wiki | Fandom</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbarContent}>
            <p>Home</p>
            <div className={styles.registerContainer}>
              <Link href="/login">
                <a>Login</a>
              </Link>
              <Link href="/login">
                <a>Signup</a>
              </Link>
            </div>
          </div>
          <div className={styles.underline}></div>
          <div className="underline"></div>
        </div>
        <div className={styles.programsContainer}>
          {programs.map((program) => (
            <div key={program._id} className={styles.cardContainer}>
              <img
                src={program.image}
                alt={program.name}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{program.name}</h3>
              <p className={styles.dates}>
                {program.startedIn} - {program.endedIn}
              </p>
              <p className={styles.cardDescription}>{program.description}</p>
            </div>
          ))}
          <img className={styles.addIcon} src="/add.svg" alt="add" />
        </div>
      </div>
    </>
  );
}

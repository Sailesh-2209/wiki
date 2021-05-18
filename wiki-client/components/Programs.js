import React, { useState } from "react";
import { useRouter } from "next/router";
import { MyModal } from "./Modal";
import styles from "../styles/Home.module.css";

export function Programs({ programs, loggedIn, setPrograms }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateProgram = () => {
    console.log(loggedIn);
    setIsOpen(true);
  };

  const handleRoute = (pid) => {
    router.push("program/[pid]", `program/${pid}`);
  };

  return (
    <>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setPrograms={setPrograms}
        programs={programs}
      />
      <div className={styles.programsContainer}>
        {loggedIn ? (
          <div className={styles.imageContainer}>
            <img
              className={styles.addIcon}
              src="/add.svg"
              alt="add"
              onClick={() => handleCreateProgram()}
            />
          </div>
        ) : null}
        {programs.map((program) => (
          <div
            key={program._id}
            className={styles.cardContainer}
            onClick={() => handleRoute(program._id)}
          >
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
      </div>
    </>
  );
}

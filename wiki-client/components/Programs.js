import React, { useState } from "react";
import { MyModal } from "./Modal";
import styles from "../styles/Home.module.css";

export function Programs({ programs, loggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateProgram = () => {
    console.log(loggedIn);
    setIsOpen(true);
  };

  return (
    <>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.programsContainer}>
        {loggedIn ? (
          <img
            className={styles.addIcon}
            src="/add.svg"
            alt="add"
            onClick={() => handleCreateProgram()}
          />
        ) : null}
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
      </div>
    </>
  );
}

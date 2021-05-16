import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Character.module.css";

export function Character({ loggedIn, characters }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.charPageHeading}>Characters</div>
      <div className={styles.charactersContainer}>
        {loggedIn ? (
          <div className={styles.characterCard}>
            <div className={styles.characterLeft}>
              <img className={styles.addIcon} src="/add.svg" alt="add" />
            </div>
            <div className={styles.characterRight}>
              <h2>Add Character</h2>
              <button className={styles.programUpdBtn}>+ ADD</button>
            </div>
          </div>
        ) : null}
        {characters.characters.map((character) => (
          <div className={styles.characterCard}>
            <div className={styles.characterLeft}>
              <img src={character.image} alt={character.name} />
            </div>
            <div className={styles.characterRight}>
              <h2>{character.name}</h2>
              <h3>{character.actor}</h3>
              <div className={styles.buttonContainer}>
                <button className={styles.programDelBtn}>DELETE</button>
                <button className={styles.programUpdBtn}>EDIT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useState } from "react";
import styles from "../styles/Character.module.css";
import EditCharacterModal from "./EditCharacterModal";
import DeleteCharacterModal from "./DeleteCharacterModal";

export function Character({
  loggedIn,
  characters,
  uid,
  setIsCreateCharacterModalOpen,
  pid,
  token,
}) {
  const [name, setName] = useState("");
  const [actor, setActor] = useState("");
  const [image, setImage] = useState("");
  const [cid, setCid] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleCharacterEdit = (charName, charActor, charImage, charId) => {
    setIsOpen(true);
    setName(charName);
    setActor(charActor);
    setImage(charImage);
    setCid(charId);
  };

  const handleCharacterDelete = (charId) => {
    setCid(charId);
    setIsDeleteOpen(true);
  };

  return (
    <>
      <EditCharacterModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
        setName={setName}
        actor={actor}
        setActor={setActor}
        image={image}
        setImage={setImage}
        cid={cid}
        setCid={setCid}
        pid={pid}
        token={token}
        uid={uid}
      />
      <DeleteCharacterModal
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        cid={cid}
        pid={pid}
        token={token}
        uid={uid}
      />
      <div className={styles.charPageHeading}>Characters</div>
      <div className={styles.charactersContainer}>
        {loggedIn ? (
          <div className={styles.characterCard}>
            <div className={styles.characterLeft}>
              <img className={styles.addIcon} src="/add.svg" alt="add" />
            </div>
            <div className={styles.characterRight}>
              <h2>Add Character</h2>
              <button
                className={styles.programUpdBtn}
                onClick={() => setIsCreateCharacterModalOpen(true)}
              >
                + ADD
              </button>
            </div>
          </div>
        ) : null}
        {characters.characters.map((character) => (
          <div className={styles.characterCard} key={character._id}>
            <div className={styles.characterLeft}>
              <img src={character.image} alt={character.name} />
            </div>
            <div className={styles.characterRight}>
              <h2>{character.name}</h2>
              <h3>{character.actor}</h3>
              <div className={styles.buttonContainer}>
                {character.createdBy === uid && loggedIn ? (
                  <>
                    <button
                      className={styles.programDelBtn}
                      onClick={() => handleCharacterDelete(character._id)}
                    >
                      DELETE
                    </button>
                    <button
                      className={styles.programUpdBtn}
                      onClick={() =>
                        handleCharacterEdit(
                          character.name,
                          character.actor,
                          character.image,
                          character._id
                        )
                      }
                    >
                      EDIT
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useState } from "react";
import Modal from "react-modal";
import Router from "next/router";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import modalStyles from "../styles/Modal.module.css";
import { baseURL } from "../constants/baseURL";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    width: "550px",
    backgroundColor: "#efefef",
  },
};

export default function CreateCharacterModal(props) {
  const {
    isCreateCharacterModalOpen,
    setIsCreateCharacterModalOpen,
    stateToken,
    stateUID,
    pid,
  } = props;
  const [name, setName] = useState("");
  const [actor, setActor] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleCreateCharacter = () => {
    setSaving(true);
    axios
      .post(
        `${baseURL}/programs/${pid}`,
        {
          createdBy: stateUID,
          name,
          image,
          actor,
        },
        {
          headers: {
            Authorization: `Bearer ${stateToken}`,
          },
        }
      )
      .then((value) => {
        if (value.data.error) {
          setError(value.data.error);
          setSaving(false);
        } else {
          setIsCreateCharacterModalOpen(false);
          setSaving(false);
          Router.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleModalClose = () => {
    setIsCreateCharacterModalOpen(false);
    setSaving(false);
    setError(false);
  };

  return (
    <>
      <Modal isOpen={isCreateCharacterModalOpen} style={customStyles}>
        {saving ? (
          <div className={modalStyles.loader}>
            <ClipLoader />
          </div>
        ) : (
          <>
            <div className={modalStyles.container}>
              <div className={modalStyles.headingContainer}>
                <h2 className={modalStyles.heading}>Add a new character</h2>
              </div>
              <div className={modalStyles.divider}></div>
              {error ? (
                <div className={modalStyles.createCharErrCont}>
                  <p>{error.message}</p>
                </div>
              ) : (
                <div className={modalStyles.modalBody}>
                  <form className={modalStyles.form}>
                    <div className={modalStyles.name}>
                      <label className={modalStyles.label} htmlFor="name">
                        Name
                      </label>
                      <input
                        className={modalStyles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={modalStyles.dates}>
                      <label className={modalStyles.label} htmlFor="start">
                        Actor
                      </label>
                      <input
                        type="text"
                        id="start"
                        name="start"
                        className={modalStyles.input}
                        value={actor}
                        onChange={(e) => setActor(e.target.value)}
                      />
                    </div>
                    <div className={modalStyles.image}>
                      <label className={modalStyles.label} htmlFor="image">
                        Image Address
                      </label>
                      <input
                        type="text"
                        id="image"
                        name="image"
                        className={modalStyles.input}
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
              )}
              <div className={modalStyles.divider}></div>
              <div className={modalStyles.footer}>
                <button
                  className={modalStyles.saveButton}
                  onClick={() => handleCreateCharacter()}
                >
                  Save
                </button>
                <button
                  className={modalStyles.cancelButton}
                  onClick={() => handleModalClose()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}

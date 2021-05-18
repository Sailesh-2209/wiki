import React, { useState } from "react";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from "../constants/baseURL";
import modalStyles from "../styles/Modal.module.css";

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

export default function EditCharacterModal(props) {
  const {
    isOpen,
    setIsOpen,
    name,
    setName,
    actor,
    setActor,
    image,
    setImage,
    cid,
    setCid,
    pid,
    token,
    uid,
  } = props;
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleEditSave = () => {
    setSaving(true);
    axios
      .post(
        `${baseURL}/programs/${pid}/${cid}`,
        {
          name,
          actor,
          image,
          cid,
          pid,
          uid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((value) => {
        if (value.data.error) {
          setError(value.data.error);
          setSaving(false);
        } else {
          setSaving(false);
          setIsOpen(false);
          router.reload();
          router.push("[pid]", `${pid}`);
        }
        console.log(value);
      })
      .catch((error) => {
        router.reload();
        router.push("[pid]", `${pid}`);
        console.log(error);
      });
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setError(null);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
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
                onClick={() => handleEditSave()}
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
  );
}

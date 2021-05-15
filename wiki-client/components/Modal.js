import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { baseURL } from "../constants/baseURL";
import styles from "../styles/Modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "600px",
    width: "550px",
    backgroundColor: "#efefef",
  },
};

Modal.setAppElement("body");

export function MyModal({ isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [imgAddress, setImgAddress] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    let token = localStorage.getItem("jwt_token");
    let uid = localStorage.getItem("uid");
    console.log(uid);
    axios
      .post(
        `${baseURL}/programs`,
        {
          createdBy: uid,
          name,
          description,
          startedIn: start,
          endedIn: end,
          image: imgAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((value) => {
        console.log(value.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Add a new show</h2>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.modalBody}>
          <form className={styles.form}>
            <div className={styles.name}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.description}>
              <label className={styles.label} htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className={styles.input}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
          <div className={styles.dates}>
            <label className={styles.label} htmlFor="start">
              Started in
            </label>
            <input
              type="text"
              id="start"
              name="start"
              className={styles.input}
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className={styles.dates}>
            <label className={styles.label} htmlFor="end">
              Ended in
            </label>
            <input
              type="text"
              id="end"
              name="end"
              className={styles.input}
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
          <div className={styles.image}>
            <label className={styles.label} htmlFor="image">
              Image Address
            </label>
            <textarea
              type="text"
              id="image"
              name="image"
              className={styles.input}
              value={imgAddress}
              onChange={(e) => setImgAddress(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer}>
          <button className={styles.saveButton} onClick={() => handleSave()}>
            Save
          </button>
          <button className={styles.cancelButton} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

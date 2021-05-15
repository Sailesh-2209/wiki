import React, { useState } from "react";
import Modal from "react-modal";
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
  function closeModal() {
    setIsOpen(false);
  }
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
            />
          </div>
          <div className={styles.dates}>
            <label className={styles.label} htmlFor="end">
              Ended in
            </label>
            <input type="text" id="end" name="end" className={styles.input} />
          </div>
          <div className={styles.image}>
            <label className={styles.label} htmlFor="image">
              Image Address
            </label>
            <textarea
              type="text"
              id="image"
              name="setart"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer}>
          <button className={styles.saveButton}>Save</button>
          <button className={styles.cancelButton} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

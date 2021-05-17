import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../styles/Character.module.css";

export default function CharacterModals(props) {
  const {
    customStyles,
    customStyles2,
    isConfirmModalOpen,
    isEditModalOpen,
    isDeleting,
    programDeleteError,
    handleOnDeleteError,
    handleDeleteProgram,
    setIsConfirmModalOpen,
    setIsEditModalOpen,
  } = props;
  return (
    <>
      <Modal style={customStyles} isOpen={isConfirmModalOpen}>
        <div className={styles.confirmModalContainer}>
          <div className={styles.modalHeading}>
            Do you want to delete this show?
          </div>
          {isDeleting ? (
            <ClipLoader />
          ) : programDeleteError ? (
            <>
              <div className={styles.modalError}>
                &#9432; {programDeleteError.message}
              </div>
              <div className={styles.modalBtnContainer}>
                <button
                  className={styles.programDelBtn}
                  onClick={() => handleOnDeleteError()}
                >
                  OK
                </button>
              </div>
            </>
          ) : (
            <div className={styles.modalBtnContainer}>
              <button
                className={styles.programDelBtn}
                onClick={() => handleDeleteProgram()}
              >
                YES
              </button>
              <button
                className={styles.programUpdBtn}
                onClick={() => setIsConfirmModalOpen(false)}
              >
                NO
              </button>
            </div>
          )}
        </div>
      </Modal>
      <Modal style={customStyles2} isOpen={isEditModalOpen}>
        edit shit
        <button
          className={styles.programUpdBtn}
          onClick={() => setIsEditModalOpen(false)}
        >
          CLOSE
        </button>
      </Modal>
    </>
  );
}

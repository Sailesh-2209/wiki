import React from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { baseURL } from "../constants/baseURL";
import styles from "../styles/Character.module.css";
import modalStyles from "../styles/Modal.module.css";

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
    name,
    description,
    start,
    end,
    imgAddress,
    saving,
    newError,
    setName,
    setDescription,
    setStart,
    setEnd,
    setImgAddress,
    setSaving,
    setNewError,
    stateUID,
    stateToken,
    pid,
  } = props;
  const router = useRouter();

  const handleEditProgram = () => {
    setSaving(true);
    axios
      .post(
        `${baseURL}/programs/${pid}/edit`,
        {
          name: name,
          description: description,
          startedIn: start,
          endedIn: end,
          image: imgAddress,
          uid: stateUID,
        },
        {
          headers: {
            Authorization: `Bearer ${stateToken}`,
          },
        }
      )
      .then((value) => {
        if (value.data.error !== null) {
          setNewError(value.data.error);
          setSaving(false);
        } else {
          setIsEditModalOpen(false);
          setNewError(null);
          setSaving(false);
          router.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setNewError(null);
  };

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
        {saving ? (
          <div className={modalStyles.loader}>
            <ClipLoader />
          </div>
        ) : (
          <>
            <div className={modalStyles.container}>
              <div className={modalStyles.headingContainer}>
                <h2 className={modalStyles.heading}>Edit show</h2>
              </div>
              <div className={modalStyles.divider}></div>
              {newError ? (
                <div className={modalStyles.errorContainer}>
                  <p>{newError.message}</p>
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
                    <div className={modalStyles.description}>
                      <label
                        className={modalStyles.label}
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        className={modalStyles.input}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </form>
                  <div className={modalStyles.dates}>
                    <label className={modalStyles.label} htmlFor="start">
                      Started in
                    </label>
                    <input
                      type="text"
                      id="start"
                      name="start"
                      className={modalStyles.input}
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                  </div>
                  <div className={modalStyles.dates}>
                    <label className={modalStyles.label} htmlFor="end">
                      Ended in
                    </label>
                    <input
                      type="text"
                      id="end"
                      name="end"
                      className={modalStyles.input}
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
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
                      value={imgAddress}
                      onChange={(e) => setImgAddress(e.target.value)}
                    />
                  </div>
                </div>
              )}
              <div className={modalStyles.divider}></div>
              <div className={modalStyles.footer}>
                <button
                  className={modalStyles.saveButton}
                  onClick={() => handleEditProgram()}
                >
                  Save
                </button>
                <button
                  className={modalStyles.cancelButton}
                  onClick={() => handleEditModalClose()}
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

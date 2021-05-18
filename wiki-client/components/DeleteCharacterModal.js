import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import styles from "../styles/Character.module.css";
import { baseURL } from "../constants/baseURL";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "150px",
    width: "300px",
    backgroundColor: "#efefef",
    border: "1px solid black",
    borderRadius: "5px",
  },
};

export default function DeleteCharacterModal(props) {
  const { isOpen, setIsOpen, cid, pid, token, uid } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  const [programDeleteError, setProgramDeleteError] = useState(null);
  const router = useRouter();

  const handleCloseModal = () => {
    setIsOpen(false);
    setProgramDeleteError(null);
  };

  const handleDeleteProgram = () => {
    setIsDeleting(true);
    axios
      .delete(`${baseURL}/programs/${pid}/${cid}`, {
        data: {
          uid,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        if (value.data.success) {
          setIsDeleting(false);
          setIsOpen(false);
          router.reload();
        } else {
          setIsDeleting(false);
          setProgramDeleteError(value.data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleError = () => {
    setIsOpen(false);
    setProgramDeleteError(null);
  };

  return (
    <Modal style={customStyles} isOpen={isOpen}>
      <div className={styles.confirmModalContainer}>
        <div className={styles.modalHeading}>
          Do you want to delete this character?
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
                onClick={() => handleError()}
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
              onClick={() => handleCloseModal()}
            >
              NO
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

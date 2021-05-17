import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { baseURL } from "../../constants/baseURL";
import styles from "../../styles/Character.module.css";
import { AuthContext } from "../../constants/authContext";
import { Character } from "../../components/Character";
import CharacterModals from "../../components/CharacterModals";
import CreateCharacterModal from "../../components/CreateCharacterModal";

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
const customStyles2 = {
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

export const getStaticPaths = async () => {
  const response = await axios
    .get(`${baseURL}/programs`)
    .catch((error) => console.log(error));
  console.log(response);
  const paths = response.data.programs.map((item) => {
    return {
      params: {
        pid: item._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const pid = context.params.pid;
  let characters = null;
  let programs = null;
  characters = await axios
    .get(`${baseURL}/programs/${pid}`)
    .catch((error) => console.log(error));
  programs = await axios
    .get(`${baseURL}/programs`)
    .catch((error) => console.log(error));
  if (programs.data.error !== null) {
    return {
      props: {
        characters: characters.data,
        programs: programs.data,
      },
    };
  } else {
    let programData = programs.data.programs.filter((program) => {
      return program._id === pid;
    });
    return {
      props: {
        characters: characters.data,
        programs: {
          programs: programData,
          error: null,
        },
      },
    };
  }
};

export default function ProgramPage({ characters, programs }) {
  const router = useRouter();
  const { pid } = router.query;
  const auth = useContext(AuthContext);
  const { logout, checkAuth } = auth;
  const [loggedIn, setLoggedIn] = useState(false);
  const [isProgramOwner, setIsProgramOwner] = useState(false);
  const [stateUID, setStateUID] = useState("");
  const [stateToken, setStateToken] = useState("");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [programDeleteError, setProgramDeleteError] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState(programs.programs[0].name);
  const [description, setDescription] = useState(
    programs.programs[0].description
  );
  const [start, setStart] = useState(programs.programs[0].startedIn);
  const [end, setEnd] = useState(programs.programs[0].endedIn);
  const [imgAddress, setImgAddress] = useState(programs.programs[0].image);
  const [saving, setSaving] = useState(false);
  const [newError, setNewError] = useState(null);
  const [isCreateCharacterModalOpen, setIsCreateCharacterModalOpen] =
    useState(false);

  const handleConfirmModalOpen = () => {
    setIsConfirmModalOpen(true);
  };

  const handleDeleteProgram = async () => {
    setIsDeleting(true);
    const response = await axios
      .delete(`${baseURL}/programs/${pid}`, {
        data: {
          uid: stateUID,
        },
        headers: {
          Authorization: `Bearer ${stateToken}`,
        },
      })
      .catch((error) => console.log(error));
    if (response.data.success) {
      setIsDeleting(false);
      setIsConfirmModalOpen(false);
      router.push("/");
    } else {
      setIsDeleting(false);
      setProgramDeleteError(response.data.error);
    }
  };

  const handleOnDeleteError = () => {
    setIsConfirmModalOpen(false);
    setProgramDeleteError(null);
  };

  const handleEditModal = () => {
    console.log("edit");
    setIsEditModalOpen(true);
  };

  useEffect(async () => {
    let uid;
    let token;
    if (typeof window !== undefined) {
      uid = localStorage.getItem("uid");
      token = localStorage.getItem("jwt_token");
      setStateUID(uid);
      setStateToken(token);
    }
    let valid = await checkAuth(token);
    if (valid) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    if (programs.programs[0].createdBy === uid) {
      setIsProgramOwner(true);
    } else {
      setIsProgramOwner(false);
    }
  });

  return (
    <>
      <CharacterModals
        customStyles={customStyles}
        customStyles2={customStyles2}
        isConfirmModalOpen={isConfirmModalOpen}
        isEditModalOpen={isEditModalOpen}
        isDeleting={isDeleting}
        programDeleteError={programDeleteError}
        handleOnDeleteError={handleOnDeleteError}
        handleDeleteProgram={handleDeleteProgram}
        setIsConfirmModalOpen={setIsConfirmModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        name={name}
        description={description}
        start={start}
        end={end}
        imgAddress={imgAddress}
        saving={saving}
        newError={newError}
        setName={setName}
        setDescription={setDescription}
        setStart={setStart}
        setEnd={setEnd}
        setImgAddress={setImgAddress}
        setSaving={setSaving}
        setNewError={setNewError}
        stateUID={stateUID}
        stateToken={stateToken}
        pid={pid}
      />
      <CreateCharacterModal
        isCreateCharacterModalOpen={isCreateCharacterModalOpen}
        setIsCreateCharacterModalOpen={setIsCreateCharacterModalOpen}
        stateUID={stateUID}
        stateToken={stateToken}
        pid={pid}
      />
      <div className={styles.charactersPage}>
        <div className={styles.navbar}>
          <div className={styles.navbarContent}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <div className={styles.registerContainer}>
              {!loggedIn ? (
                <>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                  <Link href="/signup">
                    <a>Signup</a>
                  </Link>
                </>
              ) : (
                <p id={styles.logout} onClick={() => logout()}>
                  Logout
                </p>
              )}
            </div>
          </div>
          <div className={styles.underline}></div>
          <div className="underline"></div>
        </div>
        <div className={styles.programContainer}>
          <div className={styles.programLeft}>
            <div className={styles.programHeadingContainer}>
              <p className={styles.programHeading}>
                {programs.programs[0].name}
              </p>
              {isProgramOwner && loggedIn ? (
                <>
                  <button
                    className={styles.programDelBtn}
                    onClick={() => handleConfirmModalOpen()}
                  >
                    DELETE
                  </button>
                  <button
                    className={styles.programUpdBtn}
                    onClick={() => handleEditModal()}
                  >
                    EDIT
                  </button>
                </>
              ) : null}
            </div>
            <div className={styles.underline}></div>
            <p className={styles.programDescription}>
              {programs.programs[0].description}
            </p>
          </div>
          <div className={styles.programRight}>
            <img
              src={programs.programs[0].image}
              alt={programs.programs[0].name}
            />
          </div>
        </div>
        <div className={styles.underline}></div>
        <Character
          loggedIn={loggedIn}
          characters={characters}
          uid={stateUID}
          setIsCreateCharacterModalOpen={setIsCreateCharacterModalOpen}
        />
      </div>
    </>
  );
}

import React from "react";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import {useAppState} from "./useAppState";
import Modal from "./components/Modal/Modal";

function App() {
  const {
    handleLoadBtnClick,
    notesData,
    loadBtnText,
    postData,
    postResponseMessage,
    isModalOpen,
    openModal,
    closeModal
  } = useAppState();

  return (
    <div className="App">
      <button onClick={openModal}>Create A New Note</button>
      <Modal show={isModalOpen} onClose={closeModal} postData={postData} responseMessage={postResponseMessage}/>
      <button onClick={handleLoadBtnClick}>{loadBtnText}</button>
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

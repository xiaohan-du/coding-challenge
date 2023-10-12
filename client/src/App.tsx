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
    responseMessage,
    isModalOpen,
    openModal,
    closeModal,
    showResponseMessage,
    handleInputChange,
    handleConfirm
  } = useAppState();

  return (
    <div className="App">
      <button onClick={openModal}>Create A New Note</button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        responseMessage={responseMessage}
        showResponseMessage={showResponseMessage}
        handleInputChange={handleInputChange}
        handleConfirm={handleConfirm}
      />
      <button onClick={handleLoadBtnClick}>{loadBtnText}</button>
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

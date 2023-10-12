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
    responseMessage,
    isModalOpen,
    openModal,
    closeModal,
    inputValue,
    showResponseMessage,
    setShowResponseMessage,
    handleInputChange
  } = useAppState();

  return (
    <div className="App">
      <button onClick={openModal}>Create A New Note</button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        postData={postData}
        responseMessage={responseMessage}
        inputValue={inputValue}
        showResponseMessage={showResponseMessage}
        setShowResponseMessage={setShowResponseMessage}
        handleInputChange={handleInputChange}
      />
      <button onClick={handleLoadBtnClick}>{loadBtnText}</button>
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

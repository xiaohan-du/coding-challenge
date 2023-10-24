import React from "react";
import "./App.scss";
import NoteList from "./components/NoteList/NoteList";
import {useAppState} from "./useAppState";
import Modal from "./components/Modal/Modal";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const {
    handleToggle,
    notesData,
    responseMessage,
    isModalOpen,
    openModal,
    closeModal,
    showResponseMessage,
    handleInputChange,
    handleModalSubmit,
    inputValue
  } = useAppState();

  return (
    <div className="App">
      <Sidebar openModal={openModal} />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        responseMessage={responseMessage}
        showResponseMessage={showResponseMessage}
        handleInputChange={handleInputChange}
        handleModalSubmit={handleModalSubmit}
        inputValue={inputValue}
      />
        <NoteList notes={notesData} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;

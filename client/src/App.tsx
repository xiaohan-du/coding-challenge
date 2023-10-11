import React from "react";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import {useAppState} from "./useAppState";

function App() {

  const {handleClick, notesData, loadBtnText} = useAppState();

  return (
    <div className="App">
      <button onClick={handleClick}>{loadBtnText}</button>
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

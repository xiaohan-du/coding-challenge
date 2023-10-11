import React from "react";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import {useAppState} from "./useAppState";

function App() {

  const {handleLoadBtnClick, notesData, loadBtnText, postData} = useAppState();
  const testNote = {
    "note": "test note"
  };

  const testPost = () => {
    postData(testNote);
  };

  return (
    <div className="App">
      <button onClick={handleLoadBtnClick}>{loadBtnText}</button>
      <button onClick={testPost}>Post</button>
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

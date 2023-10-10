import React, {useState} from "react";
import "./App.css";
import { useEffect } from "react";
import NoteList from "./components/NoteList/NoteList";

function App() {
  const [notesData, setNotesData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/notes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Response error');
      }

      const responseData = await response.json();
      setNotesData(responseData);
      console.log(responseData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      {/*<Note dateTime={'2023-09-24T07:29:40.382Z'} user={'Orland Doyle'} content={'Magnam expedita iste enim cum quia qui dolores vel ut ea debitis sed ad sed qui et sint odio saepe est maxime aliquid saepe quisquam cumque architecto aut possimus deserunt.'}/>*/}
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

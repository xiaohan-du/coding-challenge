import React, {useState, useCallback} from "react";
import "./App.css";
import { useEffect } from "react";
import NoteList from "./components/NoteList/NoteList";

function App() {
  const [notesData, setNotesData] = useState([]);

  const calcDate = (nMonths: number) => {
    const todaysDate = new Date();
    const nMonthAheadDate = todaysDate.setMonth(todaysDate.getMonth() - nMonths);
    const nMonthAheadDateFormatted = new Date(nMonthAheadDate).toISOString().split('T')[0]
    return nMonthAheadDateFormatted;
  }

  const fetchData = useCallback(async (nMonths: number) => {
    const formattedDate = calcDate(nMonths);
    const apiUrl = 'http://localhost:3000/api/notes' + (nMonths !== 0 ? `/?from=${formattedDate}` : '');
    try {
      const response = await fetch(apiUrl, {
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
  }, []);

  useEffect(() => {
    fetchData(6);
  }, [fetchData]);

  return (
    <div className="App">
      <NoteList notes={notesData}/>
    </div>
  );
}

export default App;

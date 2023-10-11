import {useState, useCallback} from "react";
import "./App.css";
import { useEffect } from "react";
import {INoteProps} from "./interfaces/INoteProps";
import {IAppStateProps} from "./interfaces/IAppStateProps";

export const useAppState = (): IAppStateProps => {
  const [notesData, setNotesData] = useState<INoteProps[]>([]);
  const [loadBtnText, setLoadBtnText] = useState<string>('Load All Notes');
  const [fetchPastNMonths, setFetchPastNMonths] = useState<number>(0);
  const calcDate = (nMonthsAhead: number): string => {
    const todaysDate = new Date();
    const nMonthAheadDate = todaysDate.setMonth(todaysDate.getMonth() - nMonthsAhead);
    const nMonthAheadDateFormatted = new Date(nMonthAheadDate).toISOString().split('T')[0]
    return nMonthAheadDateFormatted;
  };

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

      const responseData: INoteProps[] = await response.json();
      setNotesData(responseData);
      console.log(responseData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData(6);
  }, [fetchData]);

  const handleLoadBtnClick = () => {
    setLoadBtnText(loadBtnText === 'Load All Notes' ? 'Load Notes within Last 6 Months' : 'Load All Notes');
    setFetchPastNMonths(fetchPastNMonths === 0 ? 6 : 0);
    fetchData(fetchPastNMonths);
  };

  const postData = async (noteData: INoteProps) => {
    try {
      const response = await fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });

      if (response.status === 201) {
        console.log('Post successfully');
      } else {
        throw new Error('Failed to post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    handleLoadBtnClick,
    notesData,
    loadBtnText,
    postData
  };
};

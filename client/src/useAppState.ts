import React, {useState, useCallback} from "react";
import "./App.scss";
import { useEffect } from "react";
import {INoteProps} from "./interfaces/INoteProps";
import {IAppStateProps} from "./interfaces/IAppStateProps";

export const useAppState = (): IAppStateProps => {
  const initialNoteProps: INoteProps = {
    note: ''
  };
  const [notesData, setNotesData] = useState<INoteProps[]>([]);
  const [loadBtnText, setLoadBtnText] = useState<string>('Load All Notes');
  const [fetchPastNMonths, setFetchPastNMonths] = useState<number>(0);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<INoteProps>(initialNoteProps);
  const [showResponseMessage, setShowResponseMessage] = useState<boolean>(false);
  const openModal = () => {
    setResponseMessage('');
    setShowResponseMessage(false);
    setInputValue(initialNoteProps);
    setIsModalOpen(true);
  };

  const closeModal = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
  };
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
      };

      const responseData: INoteProps[] = await response.json();
      setNotesData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    };
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
        setResponseMessage('Post failed');
        throw new Error('Failed to post');
      }
    } catch (error) {
      setResponseMessage('Post failed');
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      note: event.target.value
    }));
    setShowResponseMessage(false);
  };

  const handleModalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const textarea = form.elements.namedItem("note") as HTMLTextAreaElement;
    setShowResponseMessage(true);
    if (!textarea || !textarea.value) {
      setResponseMessage('Please enter a valid note less than 500 characters');
    } else {
      postData(inputValue);
      setResponseMessage('Post Successfully');
    };
  };

  return {
    handleLoadBtnClick,
    notesData,
    loadBtnText,
    responseMessage,
    isModalOpen,
    openModal,
    closeModal,
    showResponseMessage,
    handleInputChange,
    handleModalSubmit,
    inputValue
  };
};

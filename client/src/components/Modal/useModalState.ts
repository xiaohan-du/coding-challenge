import React, {useState} from "react";
import {INoteProps} from "../../interfaces/INoteProps";

export const useModalState = () => {
  const initialNoteProps: INoteProps = {
    note: ''
  };
  const [inputValue, setInputValue] = useState<INoteProps>(initialNoteProps);
  const [showResponseMessage, setShowResponseMessage] = useState<boolean>(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue({note: event.target.value});
    setShowResponseMessage(false);
  };
  return {
    inputValue,
    showResponseMessage,
    setShowResponseMessage,
    handleInputChange
  };
};

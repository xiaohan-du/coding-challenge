import {INoteProps} from "./INoteProps";

export interface IModalProps {
  responseMessage: string;
  isModalOpen: boolean;
  closeModal: (event: React.FormEvent<HTMLButtonElement>) => void;
  showResponseMessage: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleModalSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputValue: INoteProps;
};

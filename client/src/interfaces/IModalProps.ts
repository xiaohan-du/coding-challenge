import {INoteProps} from "./INoteProps";

export interface IModalProps {
  postData: (noteData: INoteProps) => void;
  responseMessage: string;
  isModalOpen: boolean;
  closeModal: () => void;
  inputValue: INoteProps;
  showResponseMessage: boolean;
  setShowResponseMessage: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

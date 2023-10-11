import {INoteProps} from "./INoteProps";

export interface IAppStateProps {
  handleLoadBtnClick: () => void;
  notesData: INoteProps[];
  loadBtnText: string;
  postData: (noteData: INoteProps) => void;
  postResponseMessage: string;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

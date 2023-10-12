import {INoteProps} from "./INoteProps";
import {IModalProps} from "./IModalProps";

export interface IAppStateProps extends IModalProps{
  handleLoadBtnClick: () => void;
  notesData: INoteProps[];
  loadBtnText: string;
  openModal: () => void;
};

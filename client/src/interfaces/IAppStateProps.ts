import {INoteProps} from "./INoteProps";

export interface IAppStateProps {
  handleClick: () => void;
  notesData: INoteProps[];
  loadBtnText: string;
};

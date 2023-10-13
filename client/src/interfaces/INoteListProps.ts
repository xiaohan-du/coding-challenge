import {INoteProps} from "./INoteProps";
export interface INoteListProps {
  notes: INoteProps[];
  handleLoadBtnClick: () => void;
  loadBtnText: string;
};

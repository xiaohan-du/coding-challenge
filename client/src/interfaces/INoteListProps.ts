import {INoteProps} from "./INoteProps";
import {IToggleProps} from "./IToggleProps";
export interface INoteListProps extends IToggleProps{
  notes: INoteProps[];
};

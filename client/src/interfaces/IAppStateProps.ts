import {INoteProps} from "./INoteProps";
import {IModalProps} from "./IModalProps";
import {IToggleProps} from "./IToggleProps";
import {ISidebarProps} from "./ISidebarProps";

export interface IAppStateProps extends IModalProps, IToggleProps, ISidebarProps {
  notesData: INoteProps[];
};

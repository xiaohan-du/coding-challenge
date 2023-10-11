import {INoteProps} from "./INoteProps";

export interface IModalProps {
  show: boolean;
  onClose: () => void;
  postData: (noteData: INoteProps) => void;
  responseMessage: string;
};

export interface IModalProps {
  responseMessage: string;
  isModalOpen: boolean;
  closeModal: () => void;
  showResponseMessage: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleConfirm: () => void;
};

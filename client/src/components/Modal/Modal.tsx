import React from 'react';
import {IModalProps} from "../../interfaces/IModalProps";
import styles from './Modal.module.scss';
import {useModalState} from "./useModalState";
const Modal = ({ show, onClose, postData, responseMessage }: IModalProps) => {

  const {inputValue, showResponseMessage, setShowResponseMessage, handleInputChange} = useModalState();

  const handleConfirm = () => {
    postData(inputValue);
    setShowResponseMessage(true);
  };

  return (
    <div className={`${show ? styles.modalShow : styles.modalHide}`}>
      <div className={styles.modalContent}>
        <textarea
          onChange={handleInputChange}
        />
        {
          showResponseMessage ? <p>{responseMessage}</p> : ''
        }
        <div className={styles.modalBtnGroup}>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

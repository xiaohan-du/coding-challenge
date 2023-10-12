import React from 'react';
import {IModalProps} from "../../interfaces/IModalProps";
import styles from './Modal.module.scss';
const Modal = ({ isModalOpen, closeModal, postData, responseMessage, inputValue, showResponseMessage, setShowResponseMessage, handleInputChange }: IModalProps) => {

  const handleConfirm = () => {
    postData(inputValue);
    setShowResponseMessage(true);
  };

  return (
    <div className={`${isModalOpen ? styles.modalShow : styles.modalHide}`}>
      <div className={styles.modalContent}>
        <textarea
          onChange={handleInputChange}
        />
        {
          showResponseMessage ? <p>{responseMessage}</p> : ''
        }
        <div className={styles.modalBtnGroup}>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

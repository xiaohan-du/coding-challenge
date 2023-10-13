import React from 'react';
import {IModalProps} from "../../interfaces/IModalProps";
import styles from './Modal.module.scss';
const Modal = ({ isModalOpen, closeModal, responseMessage, showResponseMessage, handleInputChange, handleModalSubmit, inputValue }: IModalProps) => {

  return (
    <div className={`${isModalOpen ? styles.modalShow : styles.modalHide}`}>
      <form onSubmit={handleModalSubmit}>
        <div className={styles.modalContent}>
          <textarea
            placeholder={'Enter note, max 500 characters'}
            onChange={handleInputChange}
            value={inputValue.note}
            name={'note'}
            maxLength={500}
            className={styles.modalTextarea}
          />
          {
            showResponseMessage ? <p className={styles.modalResponse}>{responseMessage}</p> : ''
          }
          <div className={styles.modalBtnGroup}>
            <button className={`${styles.modalBtn} ${styles.modalBtnConfirm}`} type="submit">Confirm</button>
            <button className={`${styles.modalBtn} ${styles.modalBtnClose}`} onClick={closeModal}>Close</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;

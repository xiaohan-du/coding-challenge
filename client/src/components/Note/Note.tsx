import React from 'react';
import styles from './Note.module.scss';
import {INoteProps} from "../../interfaces/INoteProps";

const Note = ({ id, createdAt, user, note }: INoteProps) => {
  return (
    <div className={styles.noteContainer}>
      <div>{id}</div>
      <p className={styles.noteUser}>{user}</p>
      <p className={styles.noteContent}>{note}</p>
      <div className={styles.noteDateTime}>{createdAt}</div>
    </div>
  )
};

export default Note;

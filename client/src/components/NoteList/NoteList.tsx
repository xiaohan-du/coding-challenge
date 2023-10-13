import React from 'react';
import {INoteListProps} from "../../interfaces/INoteListProps";
import Note from "../Note/Note";
import styles from './NoteList.module.scss';
const NoteList = ({ notes, handleLoadBtnClick, loadBtnText }: INoteListProps) => {
  return (
    <div className={styles.noteListContainer}>
      <div className={styles.noteListTopbar}>
        <button onClick={handleLoadBtnClick}>{loadBtnText}</button>
      </div>
      <div className={styles.noteListContent}>
        {notes.map((note) => {
          return (
              <Note key={note.id} id={note.id} createdAt={note.createdAt} user={note.user} note={note.note}/>
            )
        })}
      </div>
    </div>
  )
};

export default NoteList;

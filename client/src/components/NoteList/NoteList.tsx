import React from 'react';
import {INoteListProps} from "../../interfaces/INoteListProps";
import Note from "../Note/Note";
import styles from './NoteList.module.scss';
import Toggle from "../Toggle/Toggle";
const NoteList = ({ notes, isToggled, handleToggle }: INoteListProps) => {
  return (
    <div className={styles.noteListContainer}>
      <div className={styles.noteListTopbar}>
        <Toggle isToggled={isToggled} handleToggle={handleToggle} data-testid={'toggle'}/>
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

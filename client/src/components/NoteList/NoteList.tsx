import React from 'react';
import {INoteListProps} from "../../interfaces/INoteListProps";
import Note from "../Note/Note";
const NoteList: React.FC<INoteListProps> = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => {
        return (
            <Note key={note.id} id={note.id} createdAt={note.createdAt} user={note.user} note={note.note}/>
          )
      })}
    </div>
  )
};

export default NoteList;

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoteList from "../NoteList";
import {NoteListProps} from "./incomingProps/NoteListProps";

describe('NoteList component', () => {
  const { getByText } = render(<NoteList notes={NoteListProps} />);
  it('should render the NoteList component with the correct number and content of test props', () => {
    NoteListProps.forEach((NoteListProp) => {
      expect(getByText(NoteListProp.user)).toHaveTextContent(NoteListProp.user);
      expect(getByText(NoteListProp.note)).toHaveTextContent(NoteListProp.note);
      expect(getByText(NoteListProp.createdAt)).toHaveTextContent(NoteListProp.createdAt);
    })
  })
});

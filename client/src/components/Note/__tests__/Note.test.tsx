import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Note from "../Note";
import {NoteProps} from "./incomingProps/NoteProps";

describe('Note component', () => {
  it('should render the Note component with the test props', () => {
    const { getByText } = render(<Note {...NoteProps} />);
    expect(getByText(NoteProps.user)).toHaveTextContent('test user');
    expect(getByText(NoteProps.note)).toHaveTextContent('test content');
    expect(getByText(NoteProps.createdAt)).toHaveTextContent('2023-09-24T07:29:40.382Z');
  });
});

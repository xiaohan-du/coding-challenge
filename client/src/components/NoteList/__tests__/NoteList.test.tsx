import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoteList from "../NoteList";
import {NoteListProps} from "./incomingProps/NoteListProps";
import {IToggleProps} from "../../../interfaces/IToggleProps";
jest.mock('../../Toggle/Toggle', () => {
  return function MockToggle({ }: IToggleProps) {
    return (
      <div data-testid="toggle">
      </div>
    );
  };
});
describe('NoteList component', () => {
  const { getByText } = render(<NoteList notes={NoteListProps} isToggled={false} handleToggle={() => {}}/>);
  it('should render the NoteList component with the correct number and content of test props', () => {
    NoteListProps.forEach((NoteListProp) => {
      expect(getByText(NoteListProp.user)).toHaveTextContent(NoteListProp.user);
      expect(getByText(NoteListProp.note)).toHaveTextContent(NoteListProp.note);
      expect(getByText(NoteListProp.createdAt)).toHaveTextContent(NoteListProp.createdAt);
    })
  });
  it('should render the toggle component', () => {
    render(<NoteList notes={NoteListProps} isToggled={true} handleToggle={() => {}}/>);
    const toggleElement = screen.getByTestId('toggle');
    expect(toggleElement).toBeInTheDocument();
  });
});

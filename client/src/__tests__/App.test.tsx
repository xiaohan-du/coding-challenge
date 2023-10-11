import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from "../App";

describe('App page, NoteList test is ignored', () => {
  const { getByText } = render(<App />);
  const button = getByText('Load All Notes');
  it('should flip button text on click', () => {
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Load All Notes');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Load Notes within Last 6 Months');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Load All Notes');
  });
})
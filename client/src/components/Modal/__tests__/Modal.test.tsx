import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../Modal';

const mockProps = {
  isModalOpen: true,
  closeModal: jest.fn(),
  responseMessage: 'Test Post Successfully',
  showResponseMessage: true,
  handleInputChange: jest.fn(),
  handleConfirm: jest.fn(),
};

describe('renders modal with props', () => {
  const { getByText, getByPlaceholderText } = render(<Modal {...mockProps} />);

  it('should render the modal with correct contents and behaviour', () => {
    const modal = getByText('Test Post Successfully');
    expect(modal).toBeInTheDocument();

    const textarea = getByPlaceholderText('Enter note...');
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: 'New test note' } });
    expect(mockProps.handleInputChange).toHaveBeenCalledWith(expect.anything());

    const confirmButton = getByText('Confirm');
    const closeButton = getByText('Close');
    expect(confirmButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(confirmButton);
    fireEvent.click(closeButton);

    expect(mockProps.handleConfirm).toHaveBeenCalled();
    expect(mockProps.closeModal).toHaveBeenCalled();
  });

  it('should hide modal when isModalOpen is false', () => {
    const { container } = render(<Modal {...mockProps} isModalOpen={false}/>);
    const modal = container.querySelector('.modalHide');
    expect(modal).toBeInTheDocument();
  });
});

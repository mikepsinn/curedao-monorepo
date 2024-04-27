import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './page';

jest.mock('./ChatComponent', () => () => <div data-testid="chat-component" />);

describe('Image2Measurements Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should render file uploader and chat component', () => {
    render(<App />);
    
    expect(screen.getByText('OR')).toBeInTheDocument();
    expect(screen.getByTestId('chat-component')).toBeInTheDocument();
  });

  it('should update status message and preview on file change', async () => {
    global.URL.createObjectURL = jest.fn().mockReturnValue('test-url');
    render(<App />);
    
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    fireEvent.change(screen.getByLabelText('fileInput'), { target: { files: [file] } });
    
    expect(await screen.findByText('Image selected. Click "Analyze Image" to proceed.')).toBeInTheDocument();
    expect(screen.getByAltText('Preview')).toHaveAttribute('src', 'test-url');
  });

  it('should show error message if no file selected on submit', async () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Analyze Image'));
    
    expect(await screen.findByText('No file selected!')).toBeInTheDocument();
  });

  it('should send request and display result on successful submit', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ success: true, analysis: 'test analysis' }),
    });
    render(<App />);
    
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    fireEvent.change(screen.getByLabelText('fileInput'), { target: { files: [file] } });
    fireEvent.change(screen.getByPlaceholderText('Optional: Include any additional info'), { target: { value: 'test input' } });
    fireEvent.click(screen.getByText('Analyze Image'));
    
    expect(await screen.findByText('Analysis complete.')).toBeInTheDocument();
    expect(screen.getByText('test analysis')).toBeInTheDocument();
  });

  it('should display error message on failed submit', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });
    render(<App />);
    
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    fireEvent.change(screen.getByLabelText('fileInput'), { target: { files: [file] } });
    fireEvent.click(screen.getByText('Analyze Image'));
    
    expect(await screen.findByText('HTTP error! status: 500')).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './page';

describe('Text2Measurements Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should render input and send button', () => {
    render(<App />);
    
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  });

  it('should add user message on send', async () => {
    render(<App />);
    
    fireEvent.change(screen.getByPlaceholderText('Type your message...'), { target: { value: 'test message' } });
    fireEvent.click(screen.getByText('Send'));
    
    expect(await screen.findByText('test message')).toBeInTheDocument();
  });

  it('should not send empty message', () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('Send'));
    
    expect(screen.queryByText('user:')).not.toBeInTheDocument();
  });

  it('should display loading spinner while waiting for response', async () => {
    render(<App />);
    
    fireEvent.change(screen.getByPlaceholderText('Type your message...'), { target: { value: 'test message' } });
    fireEvent.click(screen.getByText('Send'));
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should display response on successful submit', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({ test: 'response' }),
    });
    render(<App />);
    
    fireEvent.change(screen.getByPlaceholderText('Type your message...'), { target: { value: 'test message' } });
    fireEvent.click(screen.getByText('Send'));
    
    expect(await screen.findByText('{"test":"response"}')).toBeInTheDocument();
  });
});
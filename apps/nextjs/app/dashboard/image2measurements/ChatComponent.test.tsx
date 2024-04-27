import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatComponent from './ChatComponent';
import { nanoid } from 'ai';

jest.mock('ai/react', () => ({
  useChat: jest.fn(),
}));

jest.mock('ai', () => ({
  nanoid: jest.fn(),
}));

describe('ChatComponent', () => {
  const mockMessages = [
    { id: '1', role: 'system', content: 'System message' },
    { id: '2', role: 'user', content: 'User message' },
  ];
  const mockUseChat = {
    messages: mockMessages,
    input: 'test input',
    handleInputChange: jest.fn(),
    handleSubmit: jest.fn(),
  };

  beforeEach(() => {
    (useChat as jest.Mock).mockReturnValue(mockUseChat);
    (nanoid as jest.Mock).mockReturnValue('test-id');
  });

  it('should render messages with correct roles and colors', () => {
    render(<ChatComponent base64Image="test-image" />);
    
    expect(screen.getByText('system: System message')).toHaveStyle('color: red');
    expect(screen.getByText('user: User message')).toHaveStyle('color: black');
  });

  it('should render input with correct value and placeholder', () => {
    render(<ChatComponent base64Image="test-image" />);
    
    expect(screen.getByPlaceholderText('Ask a question about your data...')).toHaveValue('test input');
  });

  it('should call handleInputChange on input change', () => {
    render(<ChatComponent base64Image="test-image" />);
    
    fireEvent.change(screen.getByPlaceholderText('Ask a question about your data...'), { target: { value: 'new input' } });
    
    expect(mockUseChat.handleInputChange).toHaveBeenCalled();
  });

  it('should call handleSubmit on form submit', () => {
    render(<ChatComponent base64Image="test-image" />);
    
    fireEvent.submit(screen.getByRole('form'));
    
    expect(mockUseChat.handleSubmit).toHaveBeenCalled();
  });

  it('should handle get_custom_description function call', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ analysis: 'test analysis' }),
    });
    const mockFunctionCallHandler = jest.fn();
    (useChat as jest.Mock).mockReturnValue({
      ...mockUseChat,
      experimental_onFunctionCall: mockFunctionCallHandler,
    });
    
    render(<ChatComponent base64Image="test-image" />);
    
    await mockFunctionCallHandler(mockMessages, {
      name: 'get_custom_description',
      arguments: JSON.stringify({ prompt: 'test prompt' }),
    });
    
    expect(global.fetch).toHaveBeenCalledWith('/api/image2measurements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: 'test-image',
        prompt: 'test prompt',
        max_tokens: 100,
      }),
    });
    expect(mockMessages).toContainEqual({
      id: 'test-id',
      name: 'get_custom_description',
      role: 'function',
      content: 'test analysis',
    });
  });
});
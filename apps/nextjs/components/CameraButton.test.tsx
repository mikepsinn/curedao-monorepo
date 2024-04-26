import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { CameraButton } from './CameraButton';

describe('CameraButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should capture an image and call onCapture with the blob', async () => {
    const onCaptureMock = jest.fn();
    const mockBlob = new Blob(['test'], { type: 'image/png' });
    const mockStream = {
      getTracks: jest.fn().mockReturnValue([{ stop: jest.fn() }]),
    };
    global.navigator.mediaDevices = {
      getUserMedia: jest.fn().mockResolvedValueOnce(mockStream),
    };
    global.URL.createObjectURL = jest.fn().mockReturnValueOnce('mockUrl');

    const { getByText } = render(<CameraButton onCapture={onCaptureMock} />);
    const startButton = getByText('Start Camera');

    await act(async () => {
      fireEvent.click(startButton);
    });

    const captureButton = getByText('Capture Image');

    await act(async () => {
      fireEvent.click(captureButton);
    });

    expect(onCaptureMock).toHaveBeenCalledWith(expect.any(Blob));
  });

  it('should handle camera stream error and log the error', async () => {
    const onCaptureMock = jest.fn();
    const mockError = new Error('Camera error');
    global.navigator.mediaDevices = {
      getUserMedia: jest.fn().mockRejectedValueOnce(mockError),
    };
    console.error = jest.fn();

    const { getByText } = render(<CameraButton onCapture={onCaptureMock} />);
    const startButton = getByText('Start Camera');

    await act(async () => {
      fireEvent.click(startButton);
    });

    expect(console.error).toHaveBeenCalledWith('Error accessing camera:', mockError);
  });
});
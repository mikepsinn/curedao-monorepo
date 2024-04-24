import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

// CameraButton component to capture images from webcam or mobile camera
export const CameraButton = ({ onCapture }) => {
  const [capturing, setCapturing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [videoStream, setVideoStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);
  

  const handleStartCapture = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          setVideoStream(stream);
          setShowModal(true);
          setCapturing(true);
        })
        .catch(err => {
          console.error("Error accessing camera:", err);
          setCapturing(false);
        });
    }
  };

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(onCapture);
      videoStream.getTracks().forEach((track: { stop: () => any; }) => track.stop());
      setShowModal(false);
      setCapturing(false);
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" onClick={handleStartCapture}>
            {capturing ? 'Capturing...' : 'Take Picture'}
          </Button>
        </PopoverTrigger>
        {showModal && (
          <PopoverContent className="modal">
            <video ref={videoRef} autoPlay={true}></video>
            <button onClick={handleCapture}>Capture</button>
          </PopoverContent>
        )}
      </Popover>
    </>
  );
};

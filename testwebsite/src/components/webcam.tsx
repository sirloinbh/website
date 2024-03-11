import React, { useEffect, useRef } from 'react';

const CameraStream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const constraints = {
          video: {
            aspectRatio: 16 / 9
          }
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera", err);
      }
    };

    getVideo();
  }, []);

  return <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />;
};

export default CameraStream;

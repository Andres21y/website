import React from 'react';

interface VideoPlayerProps {
  src: string; // La URL del video
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <video preload='auto' autoPlay loop>
      <source src={src} type="video/mp4" />
      Tu navegador no soporta la reproducción de video.
    </video>
  );
}

export default VideoPlayer;

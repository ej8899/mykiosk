import React, { useState, useEffect } from 'react';
import { globalconfig } from '../config.js';

const ImageRotator = ({ forceChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialized, setInitialized] = useState(false); // Track if component is initialized

  const imageList = globalconfig.bgImages;

  useEffect(() => {
    const randomizeIndex = () => {
      const newIndex = Math.floor(Math.random() * imageList.length);
      setCurrentImageIndex(newIndex);
    };

    if (!initialized) {
      // Initialize the component by randomizing the index
      randomizeIndex();
      setInitialized(true);
    }

    if (forceChange) {
      // If forceChange is true, generate a random index for the background image
      randomizeIndex();
    } else {
      // If forceChange is not true, continue rotating the background images based on the timed interval
      const rotateInterval = setInterval(() => {
        randomizeIndex();
      }, 600000); // 10 minutes in milliseconds

      return () => clearInterval(rotateInterval);
    }
  }, [forceChange, imageList.length, initialized]);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageList[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    width: '100%',
    zIndex: -1,
    position: 'absolute',
  };

  return <div style={backgroundImageStyle}></div>;
};

export default ImageRotator;

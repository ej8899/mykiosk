import { useState, useEffect } from 'react';
import { globalconfig } from '../config.js';

const ImageRotator = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const imageList = [
  //   'http://www.tcmd.com/lhl/final1.jpeg', 
  //   'http://www.tcmd.com/lhl/final2.jpg', 
  //   'http://www.tcmd.com/lhl/final3.jpeg',
  //   'http://www.tcmd.com/lhl/final4.jpg', 
  //   'http://www.tcmd.com/lhl/final5.jpg',
  //   'http://www.tcmd.com/lhl/final6.jpg', 
  //   'http://www.tcmd.com/lhl/final7.jpg',   
  // ];

  const imageList = globalconfig.bgImages;

  useEffect(() => {
    const initialIndex = Math.floor(Math.random() * imageList.length);
    setCurrentImageIndex(initialIndex);
    
    const rotateInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 600000); // 10 minutes in milliseconds

    return () => clearInterval(rotateInterval);
  }, [currentImageIndex, imageList.length]);

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

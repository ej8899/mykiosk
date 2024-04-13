import React, { useEffect } from 'react';

const ImagePrefetch = ({ urls }) => {
  useEffect(() => {
    const prefetchImages = async () => {
      const promises = urls.map(async (url) => {
        const img = new Image();
        img.src = url;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Handling error cases, image loading may fail
        });
      });
      await Promise.all(promises);
    };

    prefetchImages();

    
    return () => {
    
    };
  }, [urls]);

  return null; 
};

export default ImagePrefetch;

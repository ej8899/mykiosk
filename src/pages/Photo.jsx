/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OURB0S0gR7N
 */

import { globalconfig } from '../config.js';
import { useState } from 'react';

export default function Component() {
  const [randomImageIndex, setRandomImageIndex] = useState(Math.floor(Math.random() * globalconfig.carouselImages.length));
  const [rotateClass, setRotateClass] = useState(Math.random() < 0.5 ? 'rotate-1' : '-rotate-1');
  const randomImage = globalconfig.carouselImages[randomImageIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-auto ${rotateClass}`}>
      <img
        alt="Photo of {randomImage.photoDescription}"
        className="aspect-square object-cover rounded-lg"
        height={800}
        src={randomImage.photoURL}
        width={900}
      />
      <div className="p-4 items-center justify-center flex flex-col">
        <h3 className="font-semibold text-3xl text-slate-400">{randomImage.photoDescription}</h3>
      </div>
    </div>
  </div>

    // <div className="dark flex items-center justify-center h-screen w-screen bg-black bg-opacity-15">
    //   <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border-2 border-blue-400">
    //     <img
    //         alt="Photo 1"
    //         className="object-cover w-full h-60"
    //         height="600"
    //         width="800"
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "800/600",
    //           objectFit: "cover",
    //         }}
    //       />
    //       <div className="p-4">
    //         <h3 className="font-semibold text-lg md:text-xl">Photo 1</h3>
    //       </div>
    //     </div>
    // </div>
  )
}


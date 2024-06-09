/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OURB0S0gR7N
 */

import { globalconfig } from '../config.js';
import { useState } from 'react';
import Underline from '../icons/Underline.jsx';

export default function Component() {
  const [randomImageIndex, setRandomImageIndex] = useState(Math.floor(Math.random() * globalconfig.carouselImages.length));
  const [rotateClass, setRotateClass] = useState(Math.random() < 0.5 ? 'rotate-1' : '-rotate-1');
  const randomImage = globalconfig.carouselImages[randomImageIndex];
  const oppositeRotateClass = rotateClass === 'rotate-1' ? '-rotate-1' : 'rotate-1';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-35 flex items-center justify-center">


<div style={{ position: 'relative' }}>
  {/* Existing content with rotateClass */}
  <div className={`bg-gray-300 rounded-lg shadow-lg p-6 border border-slate-500 shadow-md w-auto ${rotateClass}`}>
    <img
      alt="Photo of {randomImage.photoDescription}"
      className="aspect-square object-cover rounded-lg"
      height={720}
      src={randomImage.photoURL}
      width={820}
    />
    <div className="p-4 items-center justify-center flex flex-col">
      <h3 className="font-semibold text-4xl text-slate-700">{randomImage.photoDescription}</h3>
    </div>
  </div>

  {/* New duplicated content without rotateClass, positioned absolutely */}
  <div style={{ position: 'absolute', top: 0, left: 0 }}>
    <div className={`bg-gray-300 rounded-lg shadow-lg p-6 w-auto border-slate-500 shadow-md border-2 ${oppositeRotateClass}`}>
      <img
        alt={`Photo of ${randomImage.photoDescription}`}
        className="aspect-square object-cover rounded-lg"
        height={720}
        src={randomImage.photoURL}
        width={820}
      />
      <div className="p-4 items-center justify-center flex flex-col">
        <h3 className="font-semibold text-4xl text-slate-700">{randomImage.photoDescription}</h3>
        <Underline className={`w-1/2 rotate-180 transparent fill-${globalconfig.accentColor}-500`}/>
      </div>
    </div>
  </div>
</div>




    </div>
)
}


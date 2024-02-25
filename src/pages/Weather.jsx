/* eslint-disable react/prop-types */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P9xOHEF3ENZ
 */

import { globalconfig } from '../config.js';
import { Card } from 'flowbite-react';

export default function WeatherPage({weatherData}) {
  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-10">
      <div className="mt-10 flex flex-col items-end justify-center space-y-4 w-full border-0 fixed bottom-0 right-0 p-16 ">
      <Card className={`w-2/5 mt-0 border-0 border-l-8 border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-80`}>
      <div className="dark:border-blue-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-70 w-full rounded-xl p-0">
      <div className="flex space-x-4 items-center justify-center">
        <div className="text-6xl font-thin text-white pb-4">Windsor, ON</div>
      </div>
      <div className="flex space-x-4 items-center justify-center -m-6 p-0">
          <img src={`https:${weatherData.condition.icon}`} alt={weatherData.condition.text} className="w-32 h-32" />
          <div className="text-7xl font-bold text-white m-0 p-0">{weatherData.temp_c}°C</div>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <div className="text-6xl font-bold text-white">{weatherData.condition.text}</div>
        </div>
      </div>
      </Card>
      </div>
    </div>
  )
}


// function CloudIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//     </svg>
//   )
// }


// function CloudRainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
//       <path d="M16 14v6" />
//       <path d="M8 14v6" />
//       <path d="M12 16v6" />
//     </svg>
//   )
// }


// function SunIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="4" />
//       <path d="M12 2v2" />
//       <path d="M12 20v2" />
//       <path d="m4.93 4.93 1.41 1.41" />
//       <path d="m17.66 17.66 1.41 1.41" />
//       <path d="M2 12h2" />
//       <path d="M20 12h2" />
//       <path d="m6.34 17.66-1.41 1.41" />
//       <path d="m19.07 4.93-1.41 1.41" />
//     </svg>
//   )
// }

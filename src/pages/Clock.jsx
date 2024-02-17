/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JbhHOduwgo5
 */

import { useState, useEffect } from 'react';
import { getCurrentTime, getTimeZoneAbbr } from '../helpers';

export default function Component() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeZoneAbbr = getTimeZoneAbbr(timeZone);
  // const formattedTime = formatTime(currentTime);
  const formattedTime = currentTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });

  // const formattedTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-45">
      <div className="flex flex-col justify-center  text-center fixed bottom-0 right-0 p-16">

      <div className="dark:border-blue-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-70 rounded-xl p-4">
        <div className="clock text-9xl text-white font-bold mb-0 p-0 custom-time-container">
          {formattedTime}
        </div>

        <div className="text-6xl font-bold text-blue-300 mt-0 p-0 flex-grow text-right">
          {timeZoneAbbr}
        </div>
      </div>

      </div>
    </div>
  )
}


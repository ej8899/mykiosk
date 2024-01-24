/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JbhHOduwgo5
 */

import { useState, useEffect } from 'react';
import { getCurrentTime, formatTime, getTimeZoneAbbr } from '../helpers';

export default function Component() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const timeZoneAbbr = getTimeZoneAbbr(timeZone);
  const formattedTime = formatTime(currentTime);

  // const formattedTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-15">
      <div className="text-center">


        <div className="clock text-9xl font-bold">
        {formattedTime}
        </div>

        <p className="text-2xl mt-4">{timeZoneAbbr}</p>
      </div>
    </div>
  )
}


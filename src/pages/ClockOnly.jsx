
import React, { useState, useEffect } from 'react';
import { getCurrentTime, formatTime, getTimeZoneAbbr } from '../helpers';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeZoneAbbr = getTimeZoneAbbr(timeZone);
  const formattedTime = formatTime(currentTime);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">CURRENT TIME</h1>

      <div className="clock text-6xl">
        {formattedTime}
      </div>

      <p className="text-lg mt-4">Time Zone: {timeZoneAbbr}</p>
    </div>
  );
};

export default Clock;

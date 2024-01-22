
import { useState, useEffect } from 'react';
import { getCurrentTime, formatTime, getTimeZoneAbbr } from '../helpers';
import NavBar from '../components/Navbar'

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
    <div className="h-screen w-screen bg-black bg-opacity-75">
    <NavBar />
    <div className="dark flex flex-col items-center justify-center ">
      
      <h1 className="text-4xl font-bold mb-4">CURRENT TIME</h1>

      <div className="clock text-6xl">
        {formattedTime}
      </div>

      <p className="text-lg mt-4">{timeZoneAbbr}</p>
      <p>primary page</p>
    </div>
    </div>
    
  );
};

export default Clock;

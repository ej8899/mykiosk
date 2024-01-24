
import { useState, useEffect } from 'react';
import { getCurrentTime, formatTime, getTimeZoneAbbr } from '../helpers';
import NavBar from '../components/Navbar'

import { Card } from 'flowbite-react';
import { Carousel } from 'flowbite-react';

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
    <div className="dark flex flex-row items-center justify-center border-2 ">
      
        <div className="flex flex-col gap-4 border-2 w-full">
          <h1 className="text-2xl font-bold text-white">Upcoming Events</h1>
          <div className="flex flex-col gap-4 border-2">
            <Card className="bg-transparent">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-white">Event 1</h2>
                <p className="text-sm text-gray-400">Event 1 description...</p>
              </div>
            </Card>
            <Card className="bg-transparent">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-white">Event 2</h2>
                <p className="text-sm text-gray-400">Event 2 description...</p>
              </div>
            </Card>
            <Card className="bg-transparent">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-white">Event 3</h2>
                <p className="text-sm text-gray-400">Event 3 description...</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-2 w-full">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>

      
    </div>
    <h1 className="text-4xl font-bold mb-4">CURRENT TIME</h1>

      <div className="clock text-6xl">
        {formattedTime}
      </div>

      <p className="text-lg mt-4">{timeZoneAbbr}</p>
      <p>primary page</p>
    </div>
    
  );
};

export default Clock;

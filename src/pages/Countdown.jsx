import { useState, useEffect } from 'react';

import { globalconfig } from '../config.js'

const findClosestEvent = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison

  const upcomingEvents = globalconfig.events.filter(event => new Date(event.date) >= today);
  
  if (upcomingEvents.length === 0) {
    // No upcoming events
    return null;
  }

  upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  return upcomingEvents[0];
};


const Countdown = () => {

  const closestEvent = findClosestEvent();
  // Set your event date in the format: 'YYYY-MM-DDTHH:mm:ss'
  const eventDate = new Date(closestEvent.date);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-45">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white border-b-8 border-blue-500">{closestEvent.title}</h1>
        
        <div className="flex flex-col items-center justify-center mt-8">
          
          <div className="flex justify-center items-end pb-4">
            <span className="text-9xl font-extrabold text-white inline-block w-40 pb-6 z-10">{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className="text-6xl font-bold text-gray-400 ml-8 mt-16">DAYS</span>
          </div>

          <div className='flex flex-row'>
            <div className="text-6xl font-bold text-white mx-4">{timeLeft.hours.toString().padStart(2, '0')}h</div>          
            <div className="text-6xl font-bold text-white mx-4">{timeLeft.minutes.toString().padStart(2, '0')}m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

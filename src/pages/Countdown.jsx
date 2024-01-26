import { useState, useEffect } from 'react';
import { globalconfig } from '../config.js';

const Countdown = () => {
  const getRandomEvent = () => {
    const upcomingEvents = globalconfig.events.filter(event => new Date(event.date) >= new Date());

    if (upcomingEvents.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * upcomingEvents.length);
    return upcomingEvents[randomIndex];
  };

  const [randomEvent, setRandomEvent] = useState(getRandomEvent());
  const eventDate = new Date(randomEvent.date);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
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
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, randomEvent]); // Added randomEvent as a dependency

  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-45">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white border-b-8 border-blue-500">{randomEvent.title}</h1>
        
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

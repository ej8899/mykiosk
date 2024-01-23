import { useState, useEffect } from 'react';

const Countdown = () => {
  // Set your event date in the format: 'YYYY-MM-DDTHH:mm:ss'
  const eventDate = new Date('2024-12-31T00:00:00');

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
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-75">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Event Name</h1>
        <p className="text-lg text-gray-300 mt-4">The event starts in:</p>
        <div className="flex items-center justify-center mt-8">
          <div className="text-6xl font-bold text-white mx-4">{timeLeft.days.toString().padStart(2, '0')}days</div>
          <div></div>
          <div className="text-6xl font-bold text-white mx-4">{timeLeft.hours.toString().padStart(2, '0')}h</div>
          
          <div className="text-6xl font-bold text-white mx-4">{timeLeft.minutes.toString().padStart(2, '0')}m</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

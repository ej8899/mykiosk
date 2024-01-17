import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="clock">
      <span className="clock-item">{formatTime(hours)}</span>:
      <span className="clock-item">{formatTime(minutes)}</span>:
      <span className="clock-item">{formatTime(seconds)}</span>
    </div>
  );
};

export default Clock;

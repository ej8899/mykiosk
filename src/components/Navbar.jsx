import { useState, useEffect } from 'react';

const TitleBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = currentDateTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });


  return (
    <div className="bg-gray-800 text-white p-4 flex flex-row items-center justify-between px-4 bg-opacity-35">
      
      <div className="flex items-center">
        <img src="YourCompanyLogo" alt="Company Logo" className="h-8 w-8 mr-2" />
        <div className="text-6xl">
          Welcome to <br />
          <span className="text-7xl font-semibold">Your Company Name</span>
        </div>
      </div>

      <div className='flex flex-col text-right'>
        <div className="text-6xl">{formattedTime}</div>
        <div className="text-5xl mr-2">{formattedDate}</div>
      </div>

    </div>
  );
};

export default TitleBar;

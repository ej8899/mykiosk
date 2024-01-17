import React, { useState, useEffect } from 'react';

const TitleBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="bg-gray-800 text-white h-16 flex items-center justify-between px-4">
      
      <div className="flex items-center">
  <img src="YourCompanyLogo" alt="Company Logo" className="h-8 w-8 mr-2" />
  <div>
    Welcome to <br />
    <span className="text-lg font-semibold">Your Company Name</span>
  </div>
</div>



      <div>
        <div className="text-sm mr-2">{formattedDate}</div>
        <div className="text-sm">{formattedTime}</div>
      </div>
    </div>
  );
};

export default TitleBar;

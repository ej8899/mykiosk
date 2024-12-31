import { useEffect, useRef } from 'react';
import { globalconfig } from '../config.js';

import { Card } from 'flowbite-react';


const UpcomingEvents = ({ upcomingEvents }) => {
  const containerRef = useRef(null);
  const sortedEvents = upcomingEvents.slice().sort((a, b) => new Date(a.date) - new Date(b.date));


  useEffect(() => {
    const container = containerRef.current;

    // Duplicate the list items to create a continuous loop
    container.innerHTML += container.innerHTML;

    // Function to handle the scrolling animation
    const scrollEvents = () => {
      container.scrollTop += 1; // Adjust the scrolling speed as needed

      // When the second set of list items is reached, reset the scroll position to the start of the list
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0;
      }
    };

    // Start the scrolling animation after a delay
    const scrollDelay = 8000; // 8 second delay
    const scrollTimeout = setTimeout(() => {
      const scrollInterval = setInterval(scrollEvents, 100); // Adjust the interval for scroll speed (system dependent though)

      // Clean up the interval on component unmount
      return () => clearInterval(scrollInterval);
    }, scrollDelay);

    // Clean up the timeout on component unmount
    return () => clearTimeout(scrollTimeout);
  }, []);



  function formatEventDate(eventDate,considerOverdue) {
    const today = new Date();
    const targetDate = new Date(eventDate);
    let setPrefix = '';
    const difference = targetDate - today;
    // console.log("consider overdue:",considerOverdue)

    if(considerOverdue === 'yes'){
      setPrefix = ' ';
      // console.log("Overdue")
      //return `Days Remaining -${difference}`
    }

    if (difference < 0 && !setPrefix) {
      return 'Milestone Achieved';
    } else if (difference === 0) {
      return 'Now';
    } else {
      const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
  
      if (daysRemaining === 0) {
        const hoursRemaining = Math.floor(difference / (1000 * 60 * 60));
        return `Hours Remaining: ${setPrefix}${hoursRemaining}`;
      } else {
        return `Days Remaining: ${setPrefix}${daysRemaining}`;
      }
    }
  }

  return (
    <div className="flex flex-col gap-4 w-1/3 overflow-hidden">
      <h1 className={`text-4xl font-bold text-${globalconfig.accentColor}-400 uppercase`}>Upcoming Events...</h1>
      <div ref={containerRef} className="flex flex-col gap-6 mr-4" style={{height: '900px', overflow: 'hidden'}}>
        {sortedEvents.map((event, index) => (
          <div key={index}>
            <Card key={index+33} className={`border-0 border-l-8 border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-80`}>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-white">{event.title}</h2>
              <h3 className="text-2xl font-bold text-slate-400">{formatEventDate(event.date,event.overdue)}</h3>
              <p className="text-xl text-gray-400">{event.details}</p>
            </div>
            </Card>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default UpcomingEvents;

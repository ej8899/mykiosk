

import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

import { Card } from 'flowbite-react';
import { Carousel } from 'flowbite-react';

import { globalconfig } from '../config.js'

function formatEventDate(eventDate) {
  const today = new Date();
  const targetDate = new Date(eventDate);
  
  // Calculate the difference in milliseconds
  const difference = targetDate - today;
  let formattedDate, result;

  // Calculate the difference in days
  const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
  
  if (daysRemaining < 0) {
    result = `Event has passed`;
  } else if (daysRemaining === 0) {
    const hoursRemaining = Math.floor(difference / (1000 * 60 * 60));
    if (hoursRemaining < 1) {
      result = "Now";
    } else {
      result = `Hours Remaining: ${hoursRemaining}`;
    }
  } else {
    result = `Days Remaining: ${daysRemaining}`;
  }

  return result;
}

const Dashboard = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = globalconfig.events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="flex flex-col h-screen w-screen bg-black bg-opacity-15 min-h-screen">
      <NavBar />
      <div className="dark flex flex-row flex-grow  mr-8 ml-8 mt-4">
        
          <div className="flex flex-col gap-4 w-full">
          <h1 className="text-4xl font-bold text-blue-400 uppercase">Upcoming Events...</h1>
            <div className="flex flex-col gap-4 mr-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 border-l-8 dark:border-blue-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-70">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                  <h3 className="text-2xl font-bold text-white">{formatEventDate(event.date)}</h3>
                  <p className="text-xl text-gray-400">{event.details}</p>
                </div>
              </Card>
            ))}
            </div>
          </div>

          
          <div className="carousel h-256 sm:h-264 xl:h-280 2xl:h-full w-full ml-4 mt-0">
            <h1 className="text-4xl font-bold text-blue-400 mt-0 uppercase">Announcements...</h1>
            <div className="dark:border-blue-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-70 rounded-xl p-4">
            <p className="text-2xl text-white ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolorum ipsa esse quae aperiam id vel. Sapiente repellendus sunt tempore ratione tempora id, animi sequi incidunt, debitis, culpa rem.</p>
            <p className="text-2xl text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati ullam magni veniam voluptates aspernatur facere natus. Dolorem, aut tempore fugiat, repellat expedita odio neque nulla quidem architecto, quaerat aspernatur?</p>
            </div>
            <h1 className="text-4xl font-bold text-blue-400 mt-4 uppercase">Happening on Site...</h1>
          <Carousel leftControl="&nbsp;" rightControl="&nbsp;" className="w-full mb-4 mt-4 rounded-xl dark:border-blue-500 border-2"  slideInterval={9000}>
            
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="http://www.tcmd.com/lhl/final5.jpg"></img>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="http://www.tcmd.com/lhl/final6.jpg"></img>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="http://www.tcmd.com/lhl/final7.jpg"></img>
            </div>
          </Carousel>
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
};

export default Dashboard;




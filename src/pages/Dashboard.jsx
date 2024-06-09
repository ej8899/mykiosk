

import { useState, useEffect } from 'react';

import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

import { Card } from 'flowbite-react';

import { globalconfig } from '../config.js'
import UpcomingEvents from '../components/DashboardEvents.jsx';




const Dashboard = ({weatherData}) => {
  const [randomIndices, setRandomIndices] = useState([0,1]); // Initialize state to hold random indices

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  
  const upcomingEvents = globalconfig.events
  .filter((event) => new Date(event.date) >= today)
  .sort((a, b) => new Date(a.date) - new Date(b.date));

  const firstAnnouncement = globalconfig.announcements[0];

  useEffect(() => {
    const generateRandomIndex = () => Math.floor(Math.random() * globalconfig.carouselImages.length);
    let index1, index2;
    do {
      index1 = generateRandomIndex();
      index2 = generateRandomIndex();
      
    } while (index1 === index2); // Keep generating indices until they are different
    setRandomIndices([index1, index2]);
  }, [globalconfig.carouselImages]);


  return (
    
    <div className="flex flex-col h-screen w-screen bg-black bg-opacity-65 min-h-screen">
      <NavBar />
      <div className="dark flex flex-row flex-grow  mr-8 ml-8 mt-4">
        
          {/* <div className="flex flex-col gap-4 w-1/3">
          <h1 className={`text-4xl font-bold text-${globalconfig.accentColor}-400 uppercase`}>Upcoming Events...</h1>
            <div className="flex flex-col gap-6 mr-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className={`border-0 border-l-8 border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-80`}>
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                  <h3 className="text-2xl font-bold text-slate-400">{formatEventDate(event.date)}</h3>
                  <p className="text-xl text-gray-400">{event.details}</p>
                </div>
              </Card>
            ))}
            </div>
          </div> */}

          <UpcomingEvents upcomingEvents={globalconfig.events} />

          
          <div className="h-256 sm:h-264 xl:h-280 2xl:h-full ml-4 mt-0 w-2/3">
            <h1 className={`text-4xl font-bold text-${globalconfig.accentColor}-400 mt-0 uppercase`}>Announcements...</h1>
            <Card className={`mt-4 border-0 border-l-8 border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-80`}>
              <div className={`border-0  border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-80 rounded-xl p-0 mt-0`}>
                
                <div className="text-2xl text-white mt-0 mb-4" dangerouslySetInnerHTML={{ __html: firstAnnouncement }}></div>
                
              </div>
            </Card>
            <h1 className={`text-4xl font-bold text-${globalconfig.accentColor}-400 mt-4 uppercase`}>Happening on Site...</h1>
          <div className="flex items-stretch flex-row w-full mb-4 mt-4 ">
          <div className="flex-1 h-auto items-center justify-center bg-gray-400  dark:text-white rounded-xl border-blue-400  border-0 mr-4 overflow-hidden w-1/2 relative">
            <img
              src={globalconfig.carouselImages[randomIndices[0]].photoURL}
              alt="Carousel Image 1"
              className="w-full h-auto max-h-96 object-cover"
              // style={{ objectFit: 'cover' }}
            />
            <div className={`absolute bottom-0 left-0 right-0 p-1 bg-black text-slate-300 text-right text-xl bg-gradient-to-t from-${globalconfig.accentColor}-500 to-${globalconfig.accentColor}-500/20 bg-opacity-40 font-semibold`}>{globalconfig.carouselImages[randomIndices[0]].photoDescription}</div>
          </div>
          <div className="flex-1 h-auto items-center justify-center bg-gray-400  dark:text-white rounded-xl  border-blue-400  border-0 overflow-hidden w-1/2 relative">
            <img
              src={globalconfig.carouselImages[randomIndices[1]].photoURL}
              alt="Carousel Image 2"
              className="w-full h-auto max-h-96 object-cover"
              // style={{ objectFit: 'cover' }}
            />
            <div className={`absolute bottom-0 left-0 right-0 p-1 bg-black text-slate-300 text-right text-xl bg-gradient-to-t from-${globalconfig.accentColor}-500 to-${globalconfig.accentColor}-500/20 bg-opacity-40 font-semibold`}>{globalconfig.carouselImages[randomIndices[1]].photoDescription}</div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer weatherData={weatherData}/>
    </div>
    
  );
};

export default Dashboard;




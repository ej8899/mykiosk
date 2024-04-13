import { useState, useEffect } from 'react';
import { globalconfig } from '../config.js';
import { Card } from 'flowbite-react';


const People = () => {
  const [randomAnnouncement, setRandomAnnouncement] = useState('');

  useEffect(() => {
    const getRandomAnnouncement = () => {
      const announcements = globalconfig.people;
      if (announcements.length > 0) {
        const randomIndex = Math.floor(Math.random() * announcements.length);
        return announcements[randomIndex];
      }
      return '';
    };

    setRandomAnnouncement(getRandomAnnouncement());
  }, []);

  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-10">
      <div className="text-center w-3/4 rounded-3xl">
        
        <Card className={`mt-4 border-0 border-l-8 border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-100 rounded-3xl`}>
          <div className="flex opacity-100 z-50 border-0">
            <div className="flex justify-center items-center m-4 m-0 w-2/5 opacity-100 z-50 m-0 ml-4 mr-8">
              <img
                src={randomAnnouncement.photoURL}
                alt="profile image"
                className={`rounded-full  h-96 object-cover border-[10px] border-dotted border-${globalconfig.accentColor}-500/90 dark:border-${globalconfig.accentColor}-400/90 p-2 p-0 m-0 z-50 ml-4`}
                style={{
                  padding: '10px', // Adjust as needed based on border width
                  boxShadow: 'inset 0 0 0 2px transparent',
                }}
              />
            </div>
            <div className="flex flex-col w-1/2 px-6 py-4 items-left justify-center ml-0 pl-8 mr-4 w-full border-0">
              <h3 className="text-4xl font-bold text-white m-0 text-justify">{randomAnnouncement.name}</h3>
              <p className="text-gray-600 text-3xl mb-2 text-slate-400 text-justify">{randomAnnouncement.title}</p>
              <p className="text-gray-700 text-3xl text-slate-500 text-justify">{randomAnnouncement.details}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default People;

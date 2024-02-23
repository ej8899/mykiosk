import { useState, useEffect } from 'react';
import { globalconfig } from '../config.js';
import { Card } from 'flowbite-react';

const Announcements = () => {
  const [randomAnnouncement, setRandomAnnouncement] = useState('');

  useEffect(() => {
    const getRandomAnnouncement = () => {
      const announcements = globalconfig.announcements;
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
      <div className="text-center w-3/5 fixed bottom-0 right-0 p-16">
      <Card className={`mt-4 border-0 border-l-8 border-${globalconfig.accentColor}-500 dark:border-${globalconfig.accentColor}-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-80`}>
        <div className="dark:border-blue-400 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 opacity-70 w-full rounded-xl p-4">
          <div className="flex flex-col items-center justify-center">
            <div className='flex flex-row'>
              <div className="text-4xl font-bold text-white m-0 text-justify" dangerouslySetInnerHTML={{ __html: randomAnnouncement }} />
            </div>
          </div>
        </div>
        </Card>
      </div>
    </div>
  );
};

export default Announcements;

import { useState, useEffect } from 'react';

import Page1 from './pages/Dashboard.jsx';
import Page2 from './pages/Countdown.jsx';
import Page3 from './pages/Weather';
import Page4 from './pages/Clock';
import Page5 from './pages/Photo';
import Page6 from './pages/Announcements';
import People from './pages/People';

import ImageRotator from './components/ImageRotator.jsx';
import { CSSTransition } from 'react-transition-group';

import { globalconfig } from './config.js';

import './App.css'

const logger = window.initializeLogger();

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const DASHBOARD = 1;
  const COUNTDOWN = 2;
  const WEATHER = 3;
  const CLOCK = 4;
  const PHOTO = 5;
  const ANNOUNCEMENTS = 6;
  const PEOPLE = 7;

  const forcedPage = globalconfig.lockToPage;
  // const forcedPage = PEOPLE;

  const primaryPage = DASHBOARD;
  const secondaryPages = [COUNTDOWN, WEATHER, CLOCK, PHOTO, ANNOUNCEMENTS, PEOPLE];
  const secondaryPageDuration = globalconfig.secondaryPageTime * 60 * 1000; 
  const primaryPageDuration = globalconfig.primaryPageTime * 60 * 1000;
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {  

    // Function to fetch weather data
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://erniejohnson.ca/clients/wxapi.php');
        
        if (!response.ok) {
          if (logger) {
            logger.error('Failed to fetch weather data');
          }
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data);
        logger.info("windsor wx loaded ok");
        //console.log(weatherData.current.condition.text)
      } catch (error) {
        logger.error("windsor wx error");
        console.error(error);
        setWeatherData('na')
      }
    };

    fetchWeatherData();
    // refetch every 60 mins:
    const intervalId = setInterval(fetchWeatherData, 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);



  const getRandomSecondaryPage = () => {
    return secondaryPages[Math.floor(Math.random() * secondaryPages.length)];
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => {
        if (prevPage === primaryPage) {
          // If the current page is the primary page, switch to a random secondary page
          return getRandomSecondaryPage();
        } else {
          // If the current page is a secondary page, switch back to the primary page
          return primaryPage;
        }
      });
    }, secondaryPageDuration); // Switch back to the primary page after secondaryPageDuration

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const primaryIntervalId = setInterval(() => {
      setCurrentPage(getRandomSecondaryPage()); // Switch to a random secondary page after primaryPageDuration
    }, primaryPageDuration);
    // Clear the interval when the component is unmounted
    return () => clearInterval(primaryIntervalId);
  }, []);
  
  
  const renderPage = () => {
    if (!weatherData) {
      return <div>Loading from API&apos;s...</div>;
    }
  
    let selectedPage;
  
    if (forcedPage > 0) {
      selectedPage = forcedPage;
    } else {
      selectedPage = currentPage;
    }
  
    switch (selectedPage) {
      case DASHBOARD:
        return <Page1 weatherData={weatherData.current} />;
      case COUNTDOWN:
        return <Page2 />;
      case WEATHER:
        if (weatherData === 'na') {
          logger.info('skipping weather display')
          return <Page2 />;
        }
        return <Page3 weatherData={weatherData.current} />;
      case CLOCK:
        return <Page4 />;
      case PHOTO:
        return <Page5 />;
      case ANNOUNCEMENTS:
        return <Page6 />;
      case PEOPLE:
        return <People />;
      default:
        return null;
    }
  };
  

  return (
<div className="kiosk-app overflow-hidden overflow-y-hidden flex flex-col min-h-screen">
      <ImageRotator />
      <div className="flex-grow">
        <CSSTransition
          in={true}
          timeout={1500}
          classNames="fade"
          unmountOnExit
        >
          {renderPage()}
        </CSSTransition>
      </div>
    </div>
  );
};

export default App;
import { useState, useEffect } from 'react';

import Page1 from './pages/Dashboard.jsx';
import Page2 from './pages/Countdown.jsx';
import Page3 from './pages/Weather';
import Page4 from './pages/Clock';
import Page5 from './pages/Photo';
import Page6 from './pages/Announcements';

import ImageRotator from './components/ImageRotator.jsx';
import { CSSTransition } from 'react-transition-group';

import './config.js';

import './App.css'

const logger = window.initializeLogger();

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const forcedPage = 0;  // set to 0 for rotation
  const primaryPage = 1;
  const secondaryPages = [2, 3, 4, 5, 6];
  const secondaryPageDuration = 30 * 1000; // 30 seconds
  const primaryPageDuration = 1 * 60 * 1000; // 1 minutes
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {

    // console.log(window); // Check the window object contents
    // console.log(window.logger); // Check if logger object exists

    // Access the Logger object once the script has fully loaded
    // const logger = window.logger; // Assuming logger is the global object initialized in index.html
    // if (logger) {
    //   // Access its methods or properties as needed
    //   logger.trace('Accessed logger object from index.html');
    // } else {
    //   console.error('Logger object not found');
    // }


    const logger = window.initializeLogger();
  
  

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
      case 1:
        return <Page1 weatherData={weatherData.current} />;
      case 2:
        return <Page2 />;
      case 3:
        if (weatherData === 'na') {
          return <Page2 />;
        }
        logger.info("skipping wx page");
        return <Page3 weatherData={weatherData.current} />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      case 6:
        return <Page6 />;
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
          timeout={300}
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
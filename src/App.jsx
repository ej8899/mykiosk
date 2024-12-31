import { useState, useEffect } from 'react';


import Page1 from './pages/Dashboard.jsx';
import Page2 from './pages/Countdown.jsx';
import Page3 from './pages/Weather';
import Page4 from './pages/Clock';
import Page5 from './pages/Photo';
import Page6 from './pages/Announcements';
import People from './pages/People';

import ImagePrefetch from './components/Prefetch';
import ImageRotator from './components/ImageRotator.jsx';
import { CSSTransition } from 'react-transition-group';

import { globalconfig } from './config.js';

import './App.css'

const logger = window.initializeLogger();

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [forceChange, setForceChange] = useState(false); // Track if a background image change is forced
  const [mergedConfig, setMergedConfig] = useState(globalconfig);

  const DASHBOARD = 1;
  const COUNTDOWN = 2;
  const WEATHER = 3;
  const CLOCK = 4;
  const PHOTO = 5;
  const ANNOUNCEMENTS = 6;
  const PEOPLE = 7;

  // const urlforcedPage = parseInt(searchParams.get('page'), 10); // Get the 'page' query parameter from the URL
  // const forcedPage = globalconfig.lockToPage;
  // const forcedPage = parseInt(searchParams.get('page'), 10) || globalconfig.lockToPage || 0;
  // const forcedPage = PEOPLE;

  const primaryPage = DASHBOARD;
  const secondaryPages = [COUNTDOWN, WEATHER, CLOCK, PHOTO, ANNOUNCEMENTS, PEOPLE];
  const secondaryPageDuration = globalconfig.secondaryPageTime * 60 * 1000; 
  const primaryPageDuration = globalconfig.primaryPageTime * 60 * 1000;
  const [weatherData, setWeatherData] = useState(null);

  // Retrieve forced page from the URL manually
  const getQueryParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  };

  const urlForcedPage = parseInt(getQueryParam('page'), 10); // Get 'page' query parameter
  const uid = getQueryParam('uid'); // Get 'uid' query parameter or use default.json

  const forcedPage =
  (urlForcedPage > 0 && urlForcedPage <= 7)
    ? urlForcedPage
    : (globalconfig.lockToPage > 0 && globalconfig.lockToPage <= 7)
      ? globalconfig.lockToPage
      : undefined; // Default to undefined if no valid forcedPage is set

  useEffect(() => {
    const fetchConfig = async () => {
      if (!uid) {
        logger.warn('No UID provided. Using default configuration.');
        return;
      }

      try {
        const response = await fetch(`https://erniejohnson.ca/clients/kiosk-bna/configs/${uid}.json`); // Adjust path as necessary
        if (!response.ok) {
          throw new Error(`Failed to fetch configuration for UID: ${uid}`);
        }
        const externalConfig = await response.json();

        // Merge external config with globalconfig (keeping globalconfig untouched)
        // Overwrite globalconfig with externalConfig
        Object.assign(globalconfig, externalConfig);


        logger.info(`Configuration successfully loaded for UID: ${uid}`);
      } catch (error) {
        logger.error(`Error loading configuration for UID: ${uid}`);
        console.error(error);
        // Use default config if fetch fails
        setMergedConfig(globalconfig);
      }
    };

    fetchConfig();
  }, [uid]);

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


  // useEffect(() => {
  //   if (!forcedPage) {
  //     const intervalId = setInterval(() => {
  //       setCurrentPage((prevPage) =>
  //         prevPage === 1 ? getRandomSecondaryPage() : 1
  //       );
  //     }, secondaryPageDuration);
  //     return () => clearInterval(intervalId);
  //   }
  // }, [forcedPage]);


  const handlePageChange = () => {
    console.log('setPageChanged')
    setForceChange(true);
  };

  const getRandomSecondaryPage = () => {
    return secondaryPages[Math.floor(Math.random() * secondaryPages.length)];
  };
  
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentPage((prevPage) => {
  //       if (prevPage === primaryPage) {
  //         // If the current page is the primary page, switch to a random secondary page
  //         return getRandomSecondaryPage();
  //       } else {
  //         // If the current page is a secondary page, switch back to the primary page
  //         return primaryPage;
  //       }
  //     });
  //   }, secondaryPageDuration); // Switch back to the primary page after secondaryPageDuration

  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   const primaryIntervalId = setInterval(() => {
  //     setCurrentPage(getRandomSecondaryPage()); // Switch to a random secondary page after primaryPageDuration
  //   }, primaryPageDuration);
  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(primaryIntervalId);
  // }, []);
  
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
  }, [primaryPage, secondaryPageDuration]);
  
  useEffect(() => {
    const primaryIntervalId = setInterval(() => {
      setCurrentPage(primaryPage); // Always switch back to the primary page after primaryPageDuration
    }, primaryPageDuration);
    // Clear the interval when the component is unmounted
    return () => clearInterval(primaryIntervalId);
  }, [primaryPage, primaryPageDuration]);
  
  useEffect(() => {
    handlePageChange(); // Call handlePageChange after rendering the new page
    // tweak delay below so bg image loads prior to change
    const timeoutId = setTimeout(() => {
      setForceChange(false);
    }, 0);
    return () => clearTimeout(timeoutId); 
  }, [currentPage]); // Trigger whenever currentPage changes
  
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
        return <Page1 config={mergedConfig} weatherData={weatherData.current} />;
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
      <ImagePrefetch urls={globalconfig.bgImages} />
      <ImageRotator forceChange={forceChange} />
      {/* <ImageRotator /> */}
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
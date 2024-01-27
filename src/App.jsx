import { useState, useEffect } from 'react';

import Page1 from './pages/Dashboard.jsx';
import Page2 from './pages/Countdown.jsx';
import Page3 from './pages/Weather';
import Page4 from './pages/Clock';
import Page5 from './pages/Photo';
import Page6 from './pages/Announcements';

import ImageRotator from './components/ImageRotator.jsx';

import './config.js';

import './App.css'


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const forcedPage = 1;  // set to 0 for rotation
  const primaryPage = 1;
  const secondaryPages = [2, 3, 4, 5, 6];
  const secondaryPageDuration = 30 * 1000; // 30 seconds
  const primaryPageDuration = 1 * 60 * 1000; // 1 minutes
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://erniejohnson.ca/clients/wxapi.php');
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data);
        //console.log(weatherData.current.condition.text)
      } catch (error) {
        console.error(error);
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
      return <div>Loading from API's...</div>;
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
        {renderPage()}
      </div>
    </div>
  );
};

export default App;

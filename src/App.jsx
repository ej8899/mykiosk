import React, { useState, useEffect } from 'react';
import Page1 from './pages/Dashboard.jsx';
import Page2 from './pages/Countdown.jsx';
import Page3 from './pages/Weather';
import Page4 from './pages/Clock';
import Page5 from './pages/Photo';

import './config.js';

import './App.css'
import NavBar from './components/Navbar'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Update the total number of pages (numbering starts at 1)
  const primaryPage = 1;
  const secondaryPageDuration = 30 * 1000; // 30 seconds
  const primaryPageDuration = 1 * 60 * 1000; // 1 minutes

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => {
        if (prevPage === primaryPage) {
          // If the current page is the primary page, stay on it for the primary page duration
          return primaryPage;
        } else {
          // If the current page is a secondary page, switch back to the primary page
          return primaryPage;
        }
      });
    }, secondaryPageDuration); // Change every 60 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const primaryPageIntervalId = setInterval(() => {
      setCurrentPage((prevPage) => {
        // Switch to the next secondary page after the primary page duration
        return (prevPage % totalPages) + 1;
      });
    }, primaryPageDuration);

    return () => clearInterval(primaryPageIntervalId);
  }, []); 

  // Render different pages
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      
      default:
        return null;
    }
  };

  return (
    <div className="kiosk-app overflow-hidden overflow-y-hidden">
      {renderPage()}
    </div>
  );
};

export default App;

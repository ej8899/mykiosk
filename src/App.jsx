import React, { useState, useEffect } from 'react';
import Page1 from './pages/ClockOnly.jsx';
// import Page2 from './Page2'; 


import './App.css'
import NavBar from './components/Navbar'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;
  const minutesToChangePage = 5;


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
    }, minutesToChangePage * 60 * 1000); // Change every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  // Render different pages
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 />;
      // case 2:
      //   return <Page2 />;
      // Add more cases as needed
      default:
        return null;
    }
  };

  return (
    <div className="kiosk-app">
      {renderPage()}
    </div>
  );
};

export default App

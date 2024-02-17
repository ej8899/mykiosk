/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { globalconfig } from '../config.js';

const Footer = ({ weatherData }) => {
  return (
    <div className="bg-gray-800 text-white p-2 flex flex-row items-center justify-between px-4 bg-opacity-85 text-5xl font-thin fixed bottom-0 w-full -mt-6 ">
      <div className="flex items-start items-center">
        <PinIcon />
        <span className="ml-2">{globalconfig.companyAddress}</span>
      </div>
      <div className="flex items-end items-center p-0 ml-4">
        <img src={`https:${weatherData.condition.icon}`} alt={weatherData.condition.text} className="w-24 h-24 p-0 -m-4 mr-2 " />
        <span className="mr-2">{weatherData.temp_c}°C</span>
      </div>
    </div>
  );
};


export default Footer;


function PinIcon(props) {
  return (
    <svg className="w-16 h-16 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd"/>
      </svg>
  )
}

  function SunIcon(props) {
    return (
      <svg className="w-16 h-16 text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clipRule="evenodd"/>
    </svg>
    
    )
  }
  
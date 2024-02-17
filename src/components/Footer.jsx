/* eslint-disable react/prop-types */
import { globalconfig } from '../config.js';

const Footer = ({ weatherData }) => {
  // console.log(weatherData);
  return (
    <div className="bg-gray-800 text-white p-2 flex flex-row items-center justify-between px-4 bg-opacity-85 text-5xl font-thin fixed bottom-0 w-full -mt-6 ">
      <div className="flex items-start items-center">
        <PinIcon />
        <span className="ml-2">{globalconfig.companyAddress}</span>
      </div>
      <div className="flex items-end items-center p-0 ml-4">
      {weatherData && (
  <>
    <img src={`https:${weatherData.condition.icon}`} alt={weatherData.condition.text} className="w-24 h-24 p-0 -m-4 mr-2" />
    <span className="mr-2">{weatherData.temp_c}°C</span>
  </>
)}

      </div>
    </div>
  );
};


export default Footer;


function PinIcon() {
  return (
    <svg className="w-16 h-16 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd"/>
      </svg>
  )
}
  
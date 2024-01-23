import { useState, useEffect } from 'react';

const Clock = () => {
  

  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-75">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Event Name</h1>
        <p className="text-lg text-gray-300 mt-4">The event starts in:</p>
        <div className="flex items-center justify-center mt-8">
          <div className="text-6xl font-bold text-white mx-4">00</div>
          <div className="text-6xl font-bold text-white mx-4">:</div>
          <div className="text-6xl font-bold text-white mx-4">00</div>
          <div className="text-6xl font-bold text-white mx-4">:</div>
          <div className="text-6xl font-bold text-white mx-4">00</div>
        </div>
        <p className="text-lg text-gray-300 mt-4">The event will be live on our platform.</p>
  countdown only (page 2)
      </div>
    </div>
  );
};

export default Clock;

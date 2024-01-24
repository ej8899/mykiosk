

import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

import { Card } from 'flowbite-react';
import { Carousel } from 'flowbite-react';

const Dashboard = () => {


  return (
    <div className="flex flex-col h-screen w-screen bg-black bg-opacity-15 min-h-screen">
      <NavBar />
      <div className="dark flex flex-row flex-grow  mr-8 ml-8 mt-4">
        
          <div className="flex flex-col gap-4 w-full">
          <h1 className="text-4xl font-bold text-white">Upcoming Milestones...</h1>
            <div className="flex flex-col gap-4 mr-4">
              <Card className="border-l-8 dark:border-blue-500 dark:bg-opacity-40">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold text-white">Event 11</h2>
                  <p className="text-xl text-gray-400">Event 1 description...</p>
                </div>
              </Card>
              <Card className="border-l-8 dark:border-blue-500 dark:bg-opacity-40">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold text-white">Event 2</h2>
                  <p className="text-xl text-gray-400">Event 2 description...</p>
                </div>
              </Card>
              <Card className="border-l-8 dark:border-blue-500 dark:bg-opacity-40">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold text-white">Event 3</h2>
                  <p className="text-xl text-gray-400">Event 3 description...</p>
                </div>
              </Card>
            </div>
          </div>

          
          <div className="carousel h-256 sm:h-264 xl:h-280 2xl:h-full w-full ml-4 mt-0">
            <h1 className="text-4xl font-bold text-white mt-0">Happening on Site...</h1>
          <Carousel leftControl="&nbsp;" rightControl="&nbsp;" className="w-full mb-4 mt-4 rounded-xl dark:border-blue-500 border-2"  slideInterval={9000}>
            
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="http://www.tcmd.com/lhl/final5.jpg"></img>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="http://www.tcmd.com/lhl/final6.jpg"></img>
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src="http://www.tcmd.com/lhl/final7.jpg"></img>
            </div>
          </Carousel>
        </div>
        
      </div>
      <Footer/>
    </div>
    
  );
};

export default Dashboard;




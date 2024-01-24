

import NavBar from '../components/Navbar'

import { Card } from 'flowbite-react';
import { Carousel } from 'flowbite-react';

const Dashboard = () => {


  return (
    <div className="h-screen w-screen bg-black bg-opacity-15">
      <NavBar />
      <div className="dark flex flex-row items-center justify-center mr-8 ml-8 ">
        
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 mr-4 mt-4">
              <h1 className="text-4xl font-bold text-white">Upcoming Milestones...</h1>
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

          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full ml-4">
            <h1 className="text-4xl font-bold text-white">Happening on Site...</h1>
          <Carousel leftControl="&nbsp;" rightControl="&nbsp;" className="w-full mb-4 mt-4"  slideInterval={3000}>
            
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 1
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel>
          address | Weather (temp & icon)
        </div>

        
      </div>
    
    </div>
    
  );
};

export default Dashboard;

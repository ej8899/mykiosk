/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P9xOHEF3ENZ
 */
export default function WeatherPage() {
  return (
    <div className="dark flex flex-col items-center justify-center h-screen w-screen bg-black bg-opacity-75">
       
      <h1 className="text-6xl font-bold text-white">Weather App</h1>
      <div className="mt-10 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-4xl font-bold text-white">Windsor, ON</h2>
          <p className="text-2xl text-white">22°C / Clear</p>
        </div>
        <div className="flex space-x-4">
          <SunIcon className="h-16 w-16 text-yellow-500" />
          <CloudIcon className="h-16 w-16 text-gray-300" />
          <CloudRainIcon className="h-16 w-16 text-blue-500" />
        </div>
      </div>
    </div>
  )
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CloudRainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

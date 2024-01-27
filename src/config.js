//
// GLOBAL object
//


export const globalconfig = {
  appVersion: "1.0",
  appDeveloper: "ErnieJohnson.ca",
  appName: "CompanyKiosk",
  companyName: "Scuba Club International",
  companyAddress: "35 Lake Avenue, Toronto, ON",

  // first item is 'sticky' on the dashboard.  Basic HTML is allowed (it is DIV wrapped)
  announcements: [
    "<big><i>Stay Safe or Stay Home</i></big>!<br>Yes, we require you to be certified to join us on these dives - and if not, you must be certifying while on our dives under strict supervision with our instructors!<BR><BR>Alternatively, you can certainly join in our trips, but you just can't participate in the actual dives. Boat trips are not guaranteed, divers first!",
    "#2 <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolorum ipsa esse quae aperiam id vel. Sapiente repellendus sunt tempore ratione tempora id, animi sequi incidunt, debitis, culpa rem."
  ],

  events: [
    { date: '2024-12-31T00:00:00',
      title: 'Dive Cozumel',
      details: 'Join in on our semi-annual Cozumel drift dive.  This is a 3 hour dive in the Cuzumel volcano.  The dive is free and open to the public.',
    },
    { date: '2024-07-12T00:00:00',
      title: 'Belize Blue Hole',
      details: 'Once again we are diving the Blue Hole of Belize. This is a 2 hour dive in the Blue Hole of Belize.  The dive is free and open to the public.',
    },
    { date: '2024-05-02T00:00:00',
      title: 'Carribbean Wreck Dive',
      details: 'We\'re off diving some of the significant wrecks off San Pedro island, Belize to look for treasures and any other interesting finds.'
    },
    { date: '2024-01-27T00:00:00',
      title: 'San Pedro Cert Dives',
      details: 'Join us in beautiful San Pedro Belize to refresh your certifications or obtain some new ones!'
    },
    { date: '2024-01-26T21:20:00',
      title: 'event today',
      details: 'this is event 6 but today'
    },
    { date: '2026-01-26T12:00:00',
      title: 'Tobermory Wreck Diving',
      details: 'Requires dry suit certification.  We\'ll venture out into the frigid waters of the Great Lakes to examine some of the most significant wrecks off the island of Tobermory.  The dive is free and open to the public.'
    },
  ],

  // additional global vars and functions:
  timeClock: 12,       // 12 or 24 for clock setting - // todo - save to localstorage
  currentTheme: 'light', // light or dark

  link: {
    github: "https://github.com/ej8899/",
    linkedin: "https://www.linkedin.com/in/ernie-johnson/",
    twitter: "http://www.twitter.com/ejdevscom",
    youtube: "https://www.youtube.com/@oldmancodes",
  },


};



// export default globalconfig;
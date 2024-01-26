//
// GLOBAL object
//


export const globalconfig = {
  appVersion: "1.0",
  appDeveloper: "Ernie Johnson",
  appName: "CompanyKiosk",

  // first item is 'sticky' on the dashboard.  Basic HTML is allowed (it is DIV wrapped)
  announcements: [
    "#1 <big>Lorem</big>, ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolorum ipsa esse quae aperiam id vel. Sapiente repellendus sunt tempore ratione tempora id, animi sequi incidunt, debitis, culpa rem.",
    "#2 <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolorum ipsa esse quae aperiam id vel. Sapiente repellendus sunt tempore ratione tempora id, animi sequi incidunt, debitis, culpa rem."
  ],

  events: [
    { date: '2024-12-31T00:00:00',
      title: 'event 01',
      details: 'this is event 1',
    },
    { date: '2024-07-12T00:00:00',
      title: 'event 02',
      details: 'this is event 2'
    },
    { date: '2024-05-02T00:00:00',
      title: 'event 03',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolorum ipsa esse quae aperiam id vel. Sapiente repellendus sunt tempore ratione tempora id, animi sequi incidunt, debitis, culpa rem.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolorum ipsa esse quae aperiam id vel. Sapiente repellendus sunt tempore ratione tempora id, animi sequi incidunt, debitis, culpa rem.'
    },
    { date: '2024-01-02T00:00:00',
      title: 'event is expired',
      details: 'this is event 4 but expired'
    },
    { date: '2024-01-27T12:00:00',
      title: 'event is tomorrow',
      details: 'this is event 5 but tomorrow'
    },
    { date: '2024-01-26T16:00:00',
      title: 'event is today',
      details: 'this is event 6 but today'
    },
    { date: '2026-01-26T12:00:00',
      title: 'event is long time away',
      details: 'this event occurs in quite a while'
    },
  ],

  // debug mode true or false
  // usage is:  if (global.config.debug) console.log("debugging info here"); // or of course, other options for debug purposes
  debug: true,


  // additional global vars and functions:
  timeClock: 12,       // 12 or 24 for clock setting - // todo - save to localstorage
  currentTheme: 'light', // light or dark

  link: {
    github: "https://github.com/ej8899/",
    linkedin: "https://www.linkedin.com/in/ernie-johnson/",
    twitter: "http://www.twitter.com/ejdevscom",
    youtube: "https://www.youtube.com/@oldmancodes",
  },

  // usage: isFalsey(value) - is true if false value - checks Nan, 0, null, undefined, false, and ""
  isFalsey: function (value) {
    return !value;
  },

  // usage: global.config.goSleep(xxx).then(()=> { ... });
  goSleep: function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
};



// export default globalconfig;
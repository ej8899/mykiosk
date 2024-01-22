//
// GLOBAL object
//


// TASK:
// add this to index.js
// import './config.js';

const globalconfig = {
  // application details:
  appVersion: "1.0",
  appDeveloper: "Ernie Johnson",
  appName: "erniejohnson.ca - Kiosk APp",

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

/*
Setup for a global function like this:

const isFalsey = (value) => !value;
global.isFalsey = isFalsey;

*/

export default globalconfig;
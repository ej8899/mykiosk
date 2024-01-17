// timeHelper.js

export const getCurrentTime = () => new Date();

export const formatTime = (time, options = {}) => {
  const defaultOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedTime = time.toLocaleTimeString([], { ...defaultOptions, ...options });
  return formattedTime;
};

export const getTimeZoneAbbr = (timeZone) => {
  const timeZoneAbbreviations = {
    'America/New_York': 'EST',
    'America/Detroit': 'EST',
    'America/Toronto': 'EST',
    'America/Montreal': 'EST',
    'America/Chicago': 'CST',
    'America/Winnipeg': 'CST',
    'America/Regina': 'CST',
    'America/Denver': 'MST',
    'America/Edmonton': 'MST',
    'America/Phoenix': 'MST',
    'America/Los_Angeles': 'PST',
    'America/Vancouver': 'PST',
    'America/Anchorage': 'AKT',
    'America/Juneau': 'AKT',
    'America/Sitka': 'AKT',
    'America/Yakutat': 'AKT',
    'America/Nome': 'AKT',
    'America/Adak': 'HAST',
    'Pacific/Honolulu': 'HAST',
    // Add more mappings as needed
  };

  return timeZoneAbbreviations[timeZone] || timeZone;
};

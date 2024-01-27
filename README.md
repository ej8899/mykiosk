
# CompanyKiosk...
Company Kiosk is a non-interactive display only kiosk application to display company event listings, photos, and announcements to both visitors to the company office as well as staff internally.

In addition to the company specific information, also presented is the company address, today's date & time along with the current weather conditions.

Due to company privacy, weather conditions are pulled from secure PHP based middleware API.

To allow for easy updates from the company, configuration data of all events, photos, etc., are all pulled from a remote hosted configuration file. This allows for easy updates to the application without having to re-build the application.

Company Kiosk application is otherwise deployed on Raspberry Pi units tied via HDMI to various display systems throughout the building.

# Notes...
Due to the security of our client, in addition to NDA, no identifiable information is in this public source code.  In addition, other aspects of the application such as their logo, actual events, announcements, address are withheld. This is a public source code repository for the purposes of demonstration and education purposes only. API middleware is included in this public source code for the purpose of test and demonstrations, but production code for our client is not included.

# Hardware...
Application deployed on multiple low energy <a href="https://amzn.to/42h0TsP">Raspberry Pi Zero 2W</a> units attached to large screen television displays.

### Other hardware options:
Raspberry Pi Zero W
https://amzn.to/48Mg7IE

Case kit:
https://amzn.to/48UiyZN 

# Developer...
Designed, Developed & Deployed by <a href="https://www.erniejohnson.ca/" title="ErnieJohnson.ca">ErnieJohnson.ca</a>

# Accreditations...
- Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
- Built using React + Vite 
- Utilizing TailwindCSS + FlowBite UI Components
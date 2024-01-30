import axios from "axios";

export const convertTimeZone = (startTime) => {
  navigator.geolocation.getCurrentPosition(function (position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;

    // Use longitude and latitude to get timezone
    var apiUrl = `http://api.timezonedb.com/v2.1/convert-time-zone?key=NOJNXNK9RM5X&format=xml&from=America/Los_Angeles&to=Australia/Sydney&time=1464793200`;

    // Send API request to retrieve timezone data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const timeZone = data.zoneName;
        const currentTime = new Date().toLocaleString("en-US", {
          timeZone: timeZone,
        });

        return currentTime;
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

function getSunInfo() {
  const latitudeInput = document.getElementById("latitudeInput").value;
  const longitudeInput = document.getElementById("longitudeInput").value;
  if (isValidLatitude(latitudeInput) && isValidLongitude(longitudeInput)) {
    const error = document.getElementById("error");
    error.textContent = "";

    const url = `https://api.sunrise-sunset.org/json?lat=${latitudeInput}&lng=${longitudeInput}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          if (data) {
            setValues(data);
          } else {
            console.error("Error:", JSON.stringify(xhr.statusText));
          }
        } else {
          console.error("Error:", JSON.stringify(xhr.statusText));
        }
      }
    };

    xhr.onerror = function () {
      console.error("Request failed");
    };

    xhr.send();
  } else {
    const error = document.getElementById("error");
    error.textContent = "Error: Invalid latitude or longitude range";
    // console.error("Invalid latitude or longitude range");
  }
}
function setValues(data) {
  const result = document.getElementById("result");

  // Define an object mapping between property names and corresponding element IDs
  const propertyToElementMapping = {
    sunrise: "sunrise",
    sunset: "sunset",
    solar_noon: "solar_noon",
    day_length: "day_length",
    civil_twilight_begin: "civil_twilight_begin",
    civil_twilight_end: "civil_twilight_end",
    nautical_twilight_begin: "nautical_twilight_begin",
    nautical_twilight_end: "nautical_twilight_end",
    astronomical_twilight_begin: "astronomical_twilight_begin",
    astronomical_twilight_end: "astronomical_twilight_end",
  };

  // Iterate over the properties and update corresponding elements
  for (const [property, elementId] of Object.entries(
    propertyToElementMapping
  )) {
    const element = document.getElementById(elementId);
    if (element) {
      // Use the convertTimeStringToCountryTime function for specific properties
      const value =
        property != "day_length"
          ? convertTimeStringToCountryTime(
              JSON.stringify(data.results[property]) + "GMT"
            )
          : data.results[property];

      element.textContent = value;
    }
  }

  result.style.display = "block";
}

function isValidLatitude(latitude) {
  return (
    latitude !== "" && !isNaN(latitude) && latitude >= -90 && latitude <= 90
  );
}

function isValidLongitude(longitude) {
  return (
    longitude !== "" &&
    !isNaN(longitude) &&
    longitude >= -180 &&
    longitude <= 180
  );
}

function convertTimeStringToCountryTime(inputTimeString) {
  const timezone_options = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const countryCode = new Intl.DateTimeFormat(
    undefined,
    timezone_options
  ).resolvedOptions().timeZone;
  // Create a Date object using the input time string
  const inputDate = new Date(`2000-01-01 ${inputTimeString}`);

  // Get the UTC time in milliseconds
  const utcTime = inputDate.getTime();

  // Create a new Date object for the local time in the specified country
  const localDateInCountry = new Date(utcTime);

  // Use Intl.DateTimeFormat to format the time based on the specified country code
  const options = { hour12: true, timeZone: countryCode };
  const localTimeStringInCountry = localDateInCountry.toLocaleTimeString(
    "en-US",
    options
  );

  return localTimeStringInCountry;
}

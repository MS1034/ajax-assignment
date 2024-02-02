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

  const sun_rise = document.getElementById("sunrise");
  const sun_set = document.getElementById("sunset");
  const solar_noon = document.getElementById("solar_noon");
  const day_length = document.getElementById("day_length");
  const civil_twilight_begin = document.getElementById("civil_twilight_begin");
  const civil_twilight_end = document.getElementById("civil_twilight_end");
  const nautical_twilight_begin = document.getElementById(
    "nautical_twilight_begin"
  );
  const nautical_twilight_end = document.getElementById(
    "nautical_twilight_end"
  );
  const astronomical_twilight_begin = document.getElementById(
    "astronomical_twilight_begin"
  );
  const astronomical_twilight_end = document.getElementById(
    "astronomical_twilight_end"
  );
  if (sun_set) {
    sun_set.textContent = `${JSON.stringify(data.results.sunset)}`;
  }
  if (sun_rise) {
    sun_rise.textContent = `${JSON.stringify(data.results.sunrise)}`;
  }
  if (solar_noon) {
    solar_noon.textContent = `${JSON.stringify(data.results.solar_noon)}`;
  }
  if (day_length) {
    day_length.textContent = `${JSON.stringify(data.results.day_length)}`;
  }
  if (civil_twilight_begin) {
    civil_twilight_begin.textContent = `${JSON.stringify(
      data.results.civil_twilight_begin
    )}`;
  }
  if (civil_twilight_end) {
    civil_twilight_end.textContent = `${JSON.stringify(
      data.results.civil_twilight_end
    )}`;
  }
  if (nautical_twilight_begin) {
    nautical_twilight_begin.textContent = `${JSON.stringify(
      data.results.nautical_twilight_begin
    )}`;
  }
  if (nautical_twilight_end) {
    nautical_twilight_end.textContent = `${JSON.stringify(
      data.results.nautical_twilight_end
    )}`;
  }
  if (astronomical_twilight_begin) {
    astronomical_twilight_begin.textContent = `${JSON.stringify(
      data.results.astronomical_twilight_begin
    )}`;
  }
  if (astronomical_twilight_end) {
    astronomical_twilight_end.textContent = `${JSON.stringify(
      data.results.astronomical_twilight_end
    )}`;
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

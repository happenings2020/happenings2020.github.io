import React from "react";
import "./Location.scss";
import location from "../assets/location.svg";

function Location() {
  return (
    <div className="location-container">
      <div className="mapouter location-col">
        <div className="gmap_canvas">
          <iframe
            width="600"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Dr.%20Shyama%20Prasad&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Location"
          ></iframe>
        </div>
      </div>

      <div className="location-col">
        <img src={location} alt="Location" />
      </div>
    </div>
  );
}

export default Location;

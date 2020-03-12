import React from "react";
import "./EventDetails.scss";

function EventDetails() {
  return (
    <div className="eventdetails-container">
      <h2>Event Details</h2>
      <p>
        <ul>
          <li>
            <h4>
              {" "}
              <span>Where?</span> 13th & !4th
            </h4>
          </li>
          <li>
            <h4>
              {" "}
              <span>When?</span>{" "}
            </h4>
          </li>
          <li>
            <h4>
              {" "}
              <span>Time?</span>{" "}
            </h4>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default EventDetails;

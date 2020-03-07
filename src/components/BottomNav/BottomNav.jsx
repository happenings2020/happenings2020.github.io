import React from "react";
import "./BottomNav.scss";
import badge from "../assets/badge.svg";
import list from "../assets/list.svg";
// import calendar from '../assets/calender.svg'
import userPlus from "../assets/user-plus.svg";

function BottomNav() {
  return (
    <nav className="BottomNav">
      <ul>
        <li>
          <a href="#events">
            <img src={list} alt="" srcset="" /> <p>Events</p>
          </a>
        </li>
        <li>
          <a href="https://forms.gle/NAg4XCbaH5MiP3ze9">
            <img src={userPlus} alt="" srcset="" /> <p>Register</p>
          </a>
        </li>
        <li>
          <a href="#Footer">
            <img src={badge} alt="" srcset="" /> <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;

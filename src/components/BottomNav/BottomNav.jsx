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
        <a href="#events">
          <li>
            <img src={list} alt="Events" /> <p>Events</p>
          </li>
        </a>
        <a href="https://forms.gle/NAg4XCbaH5MiP3ze9">
          <li>
            <img src={userPlus} alt="Register" /> <p>Register</p>
          </li>
        </a>
        <a href="#Footer">
          <li>
            <img src={badge} alt="Contact" /> <p>Contact</p>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default BottomNav;

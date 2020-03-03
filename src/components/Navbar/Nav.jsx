import React from "react";
import logo from "./happeningsLogo.png";

export default function Nav() {
  return (
    <div>
        <ul>
            <li className="left"><img
            className="logo nav"
            src={logo}
            width="150px"
            height="auto"
            alt="Logo"
            ></img>
            </li>
            <li >
              
            </li>
            <div className="right">
              <button className="nav-register">
                Register
              </button>
              </div>
        </ul>
    </div>
  );
}


import React from "react";
import logo from "./happeningsLogo.png";

export default function Nav() {
  return (
    <div>
        <ul>
            <li><img
            className="logo nav"
            src={logo}
            width="150px"
            height="auto"
            alt="Logo"
            ></img>
            </li>
            <li><a className="nav l1" href="#">link1</a></li>
            <li><a className="nav l1" href="#">link1</a></li>            
        </ul>
    </div>
  );
}

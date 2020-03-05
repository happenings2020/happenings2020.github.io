import React from "react";
import './Nav.css'
import logo from "./happeningsLogo.png";

export default function Nav() {
  return (
    <nav style={{ backgroundColor: "#212121" }}>
      <ul>
        <li className="left">
          <img
            className="logo nav"
            src={logo}
            width="150px"
            height="auto"
            alt="Logo"
            style={{ padding: 0, paddingLeft: "30px" }}
          ></img>
        </li>
        <li>
          <div className="right" style={{ padding: 0, marginTop:"10px", marginRight:"10px" }}>
          <button className="nav-register">
                <a href='https://forms.gle/NAg4XCbaH5MiP3ze9'>
                Register
                </a>
              </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

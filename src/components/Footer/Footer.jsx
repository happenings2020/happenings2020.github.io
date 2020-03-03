import React, { PureComponent } from "react";
import "./Footer.scss";
import Marker from "../assets/map-marker.svg";
import Phone from "../assets/phone.svg";
import Envelope from "../assets/envelope.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import GitHub from "../assets/github.svg";

export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer-container">
        <footer>
          <div className="footer-left">
            <h3>Happenings</h3>
            <br />
            <p className="footer-event-name">
              Goa College Of Engineering &copy; 2020
            </p>{" "}
            <br />
            <p className="footer-event-name">Developed by Suniti & Vipul </p>
            <p className="footer-event-name">Design by Rudraksh</p>
          </div>

          <div className="footer-center">
            <div>
              <p>
                <span>
                  <img src={Marker} alt="" height="16px" />
                  Dr Shyama Prasad Mukherjee Indoor Stadium
                </span>{" "}
                Goa, India
              </p>
            </div>

            <div>
              <p>
                <img src={Phone} alt="" height="16px" />
                +91 Phone Number
              </p>
            </div>

            <div>
              <p>
                <img src={Envelope} alt="" height="16px" />
                <a href="mailto:happeningsgec@gmail.com">
                  happeningsgec@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-event-about">
              <span>About Happenings</span>
              Happenings is Goa's oldest and biggest inter-college cultural fest
              organized by the Goa College of Engineering. Started in 1981, it
              is officially the oldest college festival in Goa.
            </p>

            <div className="footer-icons">
              <a href="https://www.facebook.com/gechappenings/">
                <img src={Facebook} alt="" height="16px" />
              </a>
              <a href="https://www.instagram.com/gechappenings/">
                <img src={Instagram} alt="" height="16px" />
              </a>
              <a href="https://github.com/happenings2020/happenings2020.github.io">
                <img src={GitHub} alt="" height="16px" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "./Sponsors.scss";
import SponsorItem from "./SponsorItem.jsx";

export default class Sponsors extends Component {
  render() {
    const sponsors = [
      {
        id: 1,
        name: "Sponsor 1",
        type: "Platinum",
        image: "/images/placeholder400x300.png"
      },
      {
        id: 2,
        name: "Sponsor 2",
        type: "Gold",
        image: "/images/placeholder400x300.png"
      },
      {
        id: 3,
        name: "Sponsor 3",
        type: "Silver",
        image: "/images/placeholder400x300.png"
      },
      {
        id: 4,
        name: "Sponsor 4",
        type: "Bronze",
        image: "/images/placeholder400x300.png"
      }
    ];

    return (
      <div className="sponsors-container">
        <h2>Sponsors</h2>
        <div className="sponsors-row">
          {sponsors.map(sponsor => (
            <SponsorItem
              key={sponsor.id}
              name={sponsor.name}
              type={sponsor.type}
              image={sponsor.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

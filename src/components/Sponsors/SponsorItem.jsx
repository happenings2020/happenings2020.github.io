import React from "react";

function SponsorItem(props) {
  return (
    <div className="sponsors-item">
      <img src={props.image} alt={props.name} className={props.type} />
      <p>{props.name}</p>
      <p>{props.type} Sponsor</p>
    </div>
  );
}

export default SponsorItem;

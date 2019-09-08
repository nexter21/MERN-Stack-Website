import React from "react";

export default function ExtraInfo() {
  return (
    <div className="card extraInfo">
      <ul className="list-group">
        <li className="list-group-item">
          <i className="fas fa-check-circle" /> Guaranteed Departure
        </li>
        <li className="list-group-item">
          <i className="fas fa-check-circle" /> Bigger Group, Bigger Discount
        </li>
        <li className="list-group-item">
          <i className="fas fa-check-circle" /> Customizable Trips
        </li>
        <li className="list-group-item" id="lastElement">
          <i className="fas fa-check-circle" /> All Inclusive/GAP Trip Available
        </li>
      </ul>
    </div>
  );
}

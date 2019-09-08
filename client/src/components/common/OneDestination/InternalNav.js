import React from "react";
import { Link } from "react-router-dom";

export default function InternalNav() {
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <div className="internalNav" style={{ color: "white" }}>
        <a className="btn btn-primary" href="#trekImage">
          Overview
        </a>
        <a className="btn btn-warning" href="#lastPara">
          Itinerary
        </a>
        <a className="btn btn-success" href="#lata">
          What's Included
        </a>
        <a className="btn btn-secondary" href="#dDates">
          Departure Dates
        </a>
        <Link className="btn btn-danger" to="/essential-information">
          Essential Info
        </Link>
      </div>
    );
  } else {
    return (
      <div className="internalNav" style={{ color: "white" }}>
        <a className="btn btn-primary" href="#trekImage">
          Overview
        </a>
        <a className="btn btn-warning" href="#itiAnc">
          Itinerary
        </a>
        <a className="btn btn-success" href="#lata">
          What's Included
        </a>
        <a className="btn btn-secondary" href="#dDates">
          Departure Dates
        </a>
        <Link className="btn btn-danger" to="/essential-information">
          Essential Info
        </Link>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class TripAdvisor extends Component {
  render() {
    return (
      <section id="tripAdvisor">
        <div className="row">
          <div className="col-sm-3">
            <img
              src={require("../../LandingPage/LandingComponents/img/1200x630wa.png")}
              alt=""
            />
          </div>
          <div className="col-sm-3">
            {" "}
            <img
              src={require("../../LandingPage/LandingComponents/img/taan.png")}
              alt=""
            />
          </div>
          <div className="col-sm-3">
            {" "}
            <img
              src={require("../../LandingPage/LandingComponents/img/trustpilot.png")}
              alt=""
            />
          </div>
          <div className="col-sm-3">
            {" "}
            <img
              src={require("../../LandingPage/LandingComponents/img/ntb.jpg")}
              alt=""
            />
          </div>
        </div>
      </section>
    );
  }
}

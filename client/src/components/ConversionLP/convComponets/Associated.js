import React, { Component } from "react";

export default class Associated extends Component {
  render() {
    return (
      <div>
        <section className="reviewdOn" id="associated">
          <div className="container">
            <div className="row">
              <h4 className="col-sm-2">Associated with</h4>
              <div className="col-sm-2">
                <img
                  src={require("../../LandingPage/LandingComponents/img/taan.png")}
                  alt=""
                />
              </div>
              <div className="col-sm-2">
                <img
                  src={require("../../LandingPage/LandingComponents/img/gay-friendly-Italy-vacations.jpg")}
                  alt=""
                />
              </div>
              <div className="col-sm-2">
                <img
                  src={require("../../LandingPage/LandingComponents/img/NMA-Logo.png")}
                  alt=""
                />
              </div>

              <div className="col-sm-2">
                <img
                  src={require("../../LandingPage/LandingComponents/img/icpt.jpg")}
                  alt=""
                />
              </div>
              <div className="col-sm-2">
                <img
                  src={require("../../LandingPage/LandingComponents/img/ntb.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="reviewdOn" id="associatedMobile">
          <div className="container">
            <h4>Associated with</h4>
            <div className="row">
              <div className="col-4">
                <img src={require("./associated/taan.png")} alt="" />
              </div>
              <div className="col-4">
                <img
                  src={require("./associated/gay-friendly-Italy-vacations.png")}
                  alt=""
                />
              </div>
              <div className="col-4">
                <img src={require("./associated/nmatrans.png")} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img src={require("./associated/ictptrans.png")} alt="" />
              </div>
              <div className="col-6">
                <img src={require("./associated/ntbtrans.png")} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

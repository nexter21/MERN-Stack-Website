import React, { Component } from "react";

export default class ReviewdOn extends Component {
  render() {
    return (
      <section className="reviewdOn">
        <div className="container">
          <div className="row">
            <h3 className="col-sm-4">Reviewed On</h3>
            <div className="col-sm-2 col-6">
              <img src={require("./review/Trustpilot_logo.png")} alt="" />
            </div>
            <div className="col-sm-2 col-6">
              <img src={require("./review/tripadvisor.png")} alt="" />
            </div>

            <div className="col-sm-2 col-6">
              <img src={require("./review/google.png")} alt="" />
            </div>
            <div className="col-sm-2 col-6">
              <img src={require("./review/facebook.png")} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";

export default class Regions extends Component {
  render() {
    return (
      <section id="regions">
        <h1
          style={{
            color: "black",
            textAlign: "center"
          }}
        >
          Most Popular Regions
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/trekking/EverestBaseCampTrek–16Days.jpg")}
                  alt="Card cap"
                  id="productImg"
                />{" "}
                <h3 class="card-title">Everest Region Trekking</h3>
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
            <div className="col-sm-4">annapurna</div>
            <div className="col-sm-4">langtang</div>
          </div>
        </div>
      </section>
    );
  }
}

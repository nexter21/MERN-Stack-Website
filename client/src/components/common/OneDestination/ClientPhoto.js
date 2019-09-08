import React, { Component } from "react";

export default class ClientPhoto extends Component {
  render() {
    return (
      <section className="clientPhoto">
        <h3>Our Clients at Everest Base Camp</h3>
        <div className="card">
          <img
            src={require("../../../img/trekking/Ebc_client1.JPG")}
            id="clientImage"
            alt="Clients at Everest Base Camp"
          />
        </div>
      </section>
    );
  }
}

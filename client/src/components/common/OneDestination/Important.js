import React, { Component } from "react";

export default class Important extends Component {
  render() {
    return (
      <section className="important">
        <h2 className="text-danger">Important Information</h2>

        <ul className="list-group">
          <li className="list-group-item">
            No refund can be made for any unused services
          </li>
          <li className="list-group-item">
            Summit bonus min. $500 per Sherpa for the expedition
          </li>
          <li className="list-group-item">
            All the necessary evacuation will be led by the Sherpa guide and
            group assistance. The helicopter evacuation is only available from
            the base camp
          </li>
          <li className="list-group-item">
            The group must trek in/out at same date, if otherwise changed
            pre-hand
          </li>
        </ul>
      </section>
    );
  }
}

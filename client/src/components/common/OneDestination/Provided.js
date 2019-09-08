import React, { Component } from "react";

export default class Provided extends Component {
  render() {
    return (
      <section className="provided">
        <h3>Provided Climbing Gears</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Rope, Harness, Ice-axe, Carabineers
          </li>
          <li className="list-group-item">
            F-8, Jumper, Helmet, Ice-Bar, and Ice-screw, Climbing permit
          </li>
          <li className="list-group-item">
            Tent, foam mattress, sleeping bags, PAC
          </li>
          <li className="list-group-item">
            Bottled Oxygen, masks etc( For medical Purpose Only)
          </li>
        </ul>
      </section>
    );
  }
}

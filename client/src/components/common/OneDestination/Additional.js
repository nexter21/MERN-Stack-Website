import React, { Component } from "react";

export default class Additional extends Component {
  render() {
    return (
      <section className="additional">
        <h2>Additional Services</h2>

        <ul className="list-group">
          <li className="list-group-item">Extra climbing Sherpa: US $2,800</li>
          <li className="list-group-item">POISK 4ltr Oxygen : US $480</li>
          <li className="list-group-item">Re-fill 4ltr Oxygen : US $290</li>
          <li className="list-group-item">
            Mask Set : US $550 (Purchase) / US $250 (Rental)
          </li>
        </ul>
      </section>
    );
  }
}

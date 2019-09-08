import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FinalForm extends Component {
  render() {
    return (
      <section className="finalForm">
        <div className="card bg-dark text-light">
          <h2>Ready to Start this Amazing Journey to Everest?</h2>

          <a
            className="btn btn-light"
            data-toggle="modal"
            data-target="#contactModalC"
            id="lastButton"
          >
            Let's Get Started
          </a>
        </div>
      </section>
    );
  }
}

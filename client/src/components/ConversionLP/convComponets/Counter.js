import React, { Component } from "react";
import CountUp from "react-countup";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
    // this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.setState({ number: this.state.number + 1 });
    }
  }
  render() {
    return (
      <section className="counter">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-4">
              <span id="counterNumber">3000+</span>
              <br />
              <span id="counterText">Satisfied Clients</span>
            </div>
            <div className="col-sm-3 col-4">
              <span id="counterNumber">1400+</span>
              <br />
              <span id="counterText">EBC Trek Completed</span>
            </div>
            <div className="col-sm-3" id="costEffective">
              <span id="counterNumber">100%</span>
              <br />
              <span id="counterText">Cost Effective</span>
            </div>
            <div className="col-sm-3 col-4">
              <span id="counterNumber">4.85/5</span>
              <br />
              <span id="counterText">Stars on Trip Advisor</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

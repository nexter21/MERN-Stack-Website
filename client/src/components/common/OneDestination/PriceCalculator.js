import React, { Component } from "react";

export default class PriceCalculator extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      ip: "",
      packageName: "",
      numberOfPeople: 0,
      priceOfPack: 0,
      value: 0,
      redirect: false
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      value: e.target.value
    });
  };

  render() {
    const price = parseInt(
      this.props.promo[1]
        .replace("$", "")
        .replace("USD", "")
        .replace(",", "")
    );
    let number = this.state.numberOfPeople;
    let newPrice;
    if (number != 0) {
      if ((number = 1)) {
        newPrice = price;
      } else if ((number = 2)) {
        newPrice = price * 0.8;
      }
      console.log("khai");

      this.setState({
        priceOfPack: newPrice,
        numberOfPeople: 0
      });
    }
    return (
      <section className="priceCalc">
        <h3>Price Calculator</h3>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="numberOfPeople"
            placeholder="No of People"
            name="numberOfPeople"
            value={this.state.value}
            onChange={this.onChange}
            required
          />
          <span>No of People: {this.state.value}</span>
          <br />
          <span>Price: {this.state.priceOfPack}</span>
        </div>
      </section>
    );
  }
}

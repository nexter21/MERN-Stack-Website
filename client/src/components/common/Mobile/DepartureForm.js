import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { postPromoClients } from "../../../actions/clientActions";
import { Redirect } from "react-router-dom";
import $ from "jquery";

class DepartureForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      departure: "",
      country: "",
      destination: "",
      price: "",
      pacDate: "",
      passportNumber: "",
      currentCity: "",
      ip: "",
      redirect: false
    };
  }
  componentDidMount() {
    let ipLocation;
    const promise1 = new Promise((resolve, reject) => {
      $.getJSON("https://geoip-db.com/json/").done(function(location) {
        ipLocation =
          location.country_name +
          " latitude: " +
          location.latitude +
          " longitude: " +
          location.longitude +
          " " +
          location.IPv4;

        resolve(ipLocation);
      });
    });
    promise1.then(res => this.setState({ ip: res }));
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  selectCountry(val) {
    this.setState({ country: val });
  }
  // onSubmit = e => {
  //   console.log(
  //     e.target.name,
  //     this.props.promoOffers[0],
  //     this.props.promoOffers[1]
  //   );
  // };
  onClick = e => {
    this.setState({ pacDate: e.target.name });
  };
  onSubmit = e => {
    e.preventDefault();
    let state = this.state;
    if (
      state.email == "" ||
      state.name == ""
      // state.country == "" ||
      // state.phone == "" ||
      // state.departure == "" ||
      // state.passportNumber == "" ||
      // state.currentCity == ""
    ) {
      alert("Please Fill The Required Feilds");
      return;
    }

    const newPromoClient = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      departure: this.state.departure,
      country: this.state.country,
      passportNumber: this.state.passportNumber,
      currentCity: this.state.currentCity,
      ipLocation: this.state.ip,
      destination: this.props.promoOffers[0],
      price: this.props.promoOffers[1],
      packageDate: this.state.pacDate
    };

    this.props.postPromoClients(newPromoClient);

    this.setState({
      name: "",
      email: "",
      phone: "",
      departure: "",
      country: "",

      redirect: true
    });
    window.location.reload();
  };
  render() {
    return (
      <section className="departureMobile">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="number"
                className="form-control"
                placeholder="Passport Number"
                id="passportNumber"
                name="passportNumber"
                value={this.state.passportNumber}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Current City"
                id="currentCity"
                name="currentCity"
                value={this.state.currentCity}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="No of People"
              id="departure"
              name="departure"
              value={this.state.departure}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <CountryDropdown
              value={this.state.country}
              onChange={val => this.selectCountry(val)}
              id="countryDrop"
            />
          </div>
          <button type="submit" className="btn btn-dark" id="bookNowButton">
            Book My Trip
          </button>{" "}
        </form>
      </section>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postPromoClients }
)(DepartureForm);

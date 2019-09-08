import React, { Component } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import $ from "jquery";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { postPromoClients } from "../../../actions/clientActions";

class PromoForm extends Component {
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
      passportNumber: "",
      currentCity: "",
      ip: "",
      redirect: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

    const faStack = document.querySelector(".fa-stack");
    faStack.style.display = "none";
    console.log(document.querySelector("#SjW3x6R-1553678111757"));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  onSubmit = e => {
    e.preventDefault();
    let state = this.state;
    if (
      state.email == "" ||
      state.name == "" ||
      state.country == "" ||
      state.phone == "" ||
      state.departure == "" ||
      state.passportNumber == ""
    ) {
      alert("Please Fill The Required Feilds");
      return;
    }
    console.log(this.props.promo);
    let fetchPrice;
    if (Array.isArray(this.props.promo.promoData[1])) {
      fetchPrice = this.props.promo.promoData[1][1];
    } else {
      fetchPrice = this.props.promo.promoData[1];
    }
    const price = parseInt(
      fetchPrice
        .replace("$", "")
        .replace("USD", "")
        .replace(",", "")
    );
    let todaysPrice = price;
    console.log(todaysPrice);

    const date = new Date();
    const todayDate = date.getDate();

    if (todayDate % 3 == 0) {
      todaysPrice = todaysPrice - 10;
    }

    let newPromoClient;

    if (Array.isArray(this.props.promo.promoData[1])) {
      console.log("hota");
      newPromoClient = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        departure: this.state.departure,
        country: this.state.country,
        passportNumber: this.state.passportNumber,
        currentCity: this.state.currentCity,
        destination: this.props.promo.promoData[1][0],
        ipLocation: this.state.ip,
        packageDate: this.props.promo.promoData[0],
        price: todaysPrice
      };
    } else {
      console.log("ani hainata");
      newPromoClient = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        departure: this.state.departure,
        country: this.state.country,
        passportNumber: this.state.passportNumber,
        currentCity: this.state.currentCity,
        destination: this.props.promo.promoData[0],
        ipLocation: this.state.ip,
        price: todaysPrice
      };
    }

    this.props.postPromoClients(newPromoClient);

    this.setState({
      name: "",
      email: "",
      phone: "",
      departure: "",
      country: "",
      redirect: true
    });
  };
  render() {
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    return (
      <section className="promoMobile">
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Helmet>
        <img
          src={require(`../../layout/caravanlogo.png`)}
          alt="Carvan Outdoors"
          id="bookNowImage"
        />
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
const mapStateToProps = state => ({
  promo: state.promo
});

export default connect(
  mapStateToProps,
  { postPromoClients }
)(PromoForm);

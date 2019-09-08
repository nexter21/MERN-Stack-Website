import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { Redirect, withRouter } from "react-router-dom";
import { postPromoClients } from "../../../actions/clientActions";
import axios from "axios";
import Moment from "react-moment";
import $ from "jquery";
import { sendPromoData } from "../../../actions/promoAction";

class Details extends Component {
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
    this.onClick = this.onClick.bind(this);
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
  onClick = e => {
    this.props.history.push("/promo-form");
    this.props.sendPromoData(["Everest Base Camp Trek- 16 Days", "$1349"]);
  };

  selectCountry(val) {
    this.setState({ country: val });
  }
  onSubmit = async e => {
    const price = 1349;
    let todaysPrice = price;

    // const date = new Date();
    // const todayDate = date.getDate();

    // if (todayDate % 3 == 0) {
    //   todaysPrice = todaysPrice - 10;
    // }
    e.preventDefault();
    const newPromoClient = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      departure: this.state.departure,
      country: this.state.country,
      passportNumber: this.state.passportNumber,
      currentCity: this.state.currentCity,
      destination: "Everest Base Camp TreK - 16 Days",
      ipLocation: this.state.ip,
      price: todaysPrice
    };

    this.props.postPromoClients(newPromoClient);

    await this.setState({
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
    let bookNowContent;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      bookNowContent = (
        <div className="convBookButton">
          <button className="btn btn-success" onClick={this.onClick}>
            Book This Trek
          </button>
        </div>
      );
    } else {
      bookNowContent = (
        <div className="convBookButton">
          <button
            className="btn btn-success promoButton"
            data-toggle="modal"
            data-target="#contactModalC"
            id="promoButton"
          >
            Book This Trek
          </button>
        </div>
      );
    }

    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }

    return (
      <section className="details">
        <h1>Details</h1>

        <div className="container" id="details">
          <div className="row">
            <div className="col-sm-6 col-6">
              <h2>
                {" "}
                <i class="fas fa-tags" id="price" /> Price
              </h2>
            </div>
            <div className="col-sm-6 col-6">
              <h3>
                1349 USD (<strike style={{ color: "grey" }}>1500 USD</strike>)
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-6">
              <h2>
                {" "}
                <i class="fas fa-calendar-alt" id="dates" /> Available Dates
              </h2>
            </div>
            <div className="col-sm-6 col-6">
              <h3>Feb-June | Sept-Dec</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-6">
              <h2>
                {" "}
                <i class="fas fa-list-alt" id="type" />
                Package Type
              </h2>
            </div>
            <div className="col-sm-6 col-6">
              <h3>Complete Trek Package</h3>
            </div>
          </div>
        </div>
        {bookNowContent}
        <div className="container">
          <div className="liner" />
        </div>

        <div class="modal fade text-dark" id="contactModalC">
          <div class="modal-dialog">
            <div class="modal-content" style={{ border: "1px solid #000" }}>
              <div class="modal-header">
                <img
                  src={require(`../../layout/caravanlogo.png`)}
                  alt="Carvan Outdoors"
                  id="bookNowImage"
                />
                <button class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">
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
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    id="bookNowButton"
                  >
                    Book My Trip
                  </button>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    { postPromoClients, sendPromoData }
  )(Details)
);

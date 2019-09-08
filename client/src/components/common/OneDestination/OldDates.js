import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { postPromoClients } from "../../../actions/clientActions";
import { Redirect, withRouter } from "react-router-dom";
import { sendPromoData } from "../../../actions/promoAction";

class OldDates extends Component {
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
    console.log(this.props);
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

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("clicked");
      this.props.history.push("/promo-form");
      this.props.sendPromoData([e.target.name, this.props.promoOffers, "0"]);
    }
  };
  onSubmit = async e => {
    e.preventDefault();

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
    console.log(newPromoClient);
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
    let insideDeparture;
    let trs = [];
    const departureDates = this.props.dates;

    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }

    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      for (let i = 0; i < departureDates.length; i++) {
        trs.push(
          <tr>
            <td>
              <i className="fas fa-clock" /> {departureDates[i][0]}
            </td>
            <td>{departureDates[i][1]}</td>
            <td>{departureDates[i][2]}</td>
            <td>
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#contactModalE"
                name={departureDates[i][2]}
                onClick={this.onClick}
              >
                Book Now
              </button>
            </td>
          </tr>
        );
      }
    } else {
      for (let i = 0; i < departureDates.length; i++) {
        trs.push(
          <tr>
            <td>
              <i className="fas fa-clock" /> {departureDates[i][0]}
            </td>
            <td>{departureDates[i][1]}</td>
            <td>{departureDates[i][2]}</td>
            <td>
              <button
                className="btn btn-primary"
                name={departureDates[i][2]}
                onClick={this.onClick}
              >
                Book Now
              </button>
            </td>
          </tr>
        );
      }
    }
    if (departureDates.length == 0) {
      insideDeparture = (
        <div>
          <h1>Available Throughout The Year</h1>
        </div>
      );
    } else {
      insideDeparture = (
        <div>
          <h2 style={{ color: "#868e96" }}>Departure Dates</h2>
          <div className="datesTable">
            <table className="departTable">
              <tr>
                <th>Package</th>
                <th>Price</th>
                <th>Date</th>
                <th>Book</th>
              </tr>

              {trs}
            </table>
          </div>
        </div>
      );
    }
    return (
      <div>
        {insideDeparture}{" "}
        <div class="modal fade text-dark" id="contactModalE">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    { postPromoClients, sendPromoData }
  )(OldDates)
);

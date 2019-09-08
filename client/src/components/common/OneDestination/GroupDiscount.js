import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { Redirect } from "react-router-dom";
import { postPromoClients } from "../../../actions/clientActions";
import $ from "jquery";

class GroupDiscount extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      departure: "",
      country: "",
      destination: "",
      passportNumber: "",
      currentCity: "",
      price: "",
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
      destination: this.props.title,
      ipLocation: this.state.ip,
      price: "From Group Discount"
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
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    return (
      <section className="groupDiscount">
        <div className="card">
          <h4>
            <strong>Special Offer</strong>
          </h4>
          <h5>Have a Group of People?</h5>
          <h5>Get upto 25% off Per Person</h5>
          <button
            className="btn btn-primary"
            style={{ width: "10rem" }}
            data-toggle="modal"
            data-target="#contactModalE"
          >
            Book Now
          </button>
        </div>

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
      </section>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postPromoClients }
)(GroupDiscount);

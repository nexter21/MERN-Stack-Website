import React, { Component } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { postHomeUsers } from "../../../actions/clientActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import $ from "jquery";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      message: "",
      ip: "",
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  selectCountry(val) {
    this.setState({ country: val });
  }
  async onSubmit(e) {
    e.preventDefault();

    let state = this.state;
    if (state.email == "" || state.name == "") {
      alert("Please Fill The Required Feilds");
      return;
    }

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      country: this.state.country,
      ipLocation: this.state.ip,
      message: this.state.message
    };
    this.props.postHomeUsers(newUser, this.props.history);

    await this.setState({
      name: "",
      email: "",
      country: "",
      message: "",
      redirect: true
    });
  }
  render() {
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    return (
      <section
        id="share-section"
        class=" contact bg-primary text-light text-muted py-5"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://journeysofthespirit.com/wp-content/uploads/2015/02/nepal-yoga.jpg"
                alt=""
                class="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div class="col-md-6">
              <h2 className="contactH2">
                Let Us Help You Plan Your Dream Vacation in Nepal
              </h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
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
                <div className="form-group">
                  <CountryDropdown
                    value={this.state.country}
                    onChange={val => this.selectCountry(val)}
                    className="countryDrop"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-light"
                  id="formButton"
                >
                  Plan My Vacation
                </button>{" "}
              </form>
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
  { postHomeUsers }
)(Contact);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { specificClients } from "../../../actions/clientActions";
import { Redirect } from "react-router-dom";
import $ from "jquery";

class CustomizeForm extends Component {
  constructor() {
    super();
    this.state = {
      noOfPeople: "",
      visitDate: "",

      name: "",
      email: "",
      phone: "",
      message: "",

      redirect: false
    };
  }
  onSubmit = async e => {
    e.preventDefault();

    let state = this.state;
    if (
      state.email == "" ||
      state.name == "" ||
      state.noOfPeople == "" ||
      state.visitDate == ""
    ) {
      alert("Please Fill The Required Feilds");
      return;
    }

    const specificClient = {
      noOfPeople: this.state.noOfPeople,
      visitDate: this.state.visitDate,

      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      ipLocation: this.state.ip,
      heading: this.props.heading
    };
    this.props.specificClients(specificClient);
    await this.setState({
      noOfPeople: "",
      visitDate: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      heading: "",
      ip: "",
      redirect: true
    });
    window.location.reload();
  };

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
  render() {
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    return (
      <div className="customizeForm" id="customizeForm">
        <div className="linerCusto" id="linerCusto" />
        <h4>
          <strong>Customize Your Trip</strong>
        </h4>

        <form className="formForCustomize" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name*"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email*"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="numberOfDays"
              aria-describedby="numberOfDays"
              placeholder="No Of People*"
              name="noOfPeople"
              value={this.state.days}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ color: "#000" }}>When do you wish to visit *</label>
            <input
              className="form-control"
              type="date"
              name="visitDate"
              value={this.state.visitDate}
              onChange={this.onChange}
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Customize My Trip
          </button>{" "}
          <br />
          <small style={{ paddingTop: "1px", color: "#000" }}>
            Dont Worry We Won't Spam Your Inbox{" "}
          </small>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { specificClients }
)(CustomizeForm);

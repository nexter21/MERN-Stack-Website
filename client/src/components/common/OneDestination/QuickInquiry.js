import React, { Component } from "react";
import { connect } from "react-redux";
import { postQuickInquiry } from "../../../actions/quickAction";
import { Redirect, withRouter } from "react-router-dom";
import $ from "jquery";

class QuickInquiry extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      ip: "",
      packageName: "",
      redirect: false
    };
    // this.onClick = this.onClick.bind(this);
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

  onSubmit = async e => {
    e.preventDefault();

    let state = this.state;
    if (state.email == "" || state.name == "") {
      alert("Please Fill The Required Feilds");
      return;
    }

    const newInquiry = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      phone: this.state.phone,
      ipLocation: this.state.ip,
      packageName: this.props.title
    };

    this.props.postQuickInquiry(newInquiry);

    await this.setState({
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
      <section className="quickInquiry" id="quickInquiry">
        <h3>Have a Question?</h3>
        <form onSubmit={this.onSubmit} style={{ marginTop: "1rem" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name(*)"
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
              placeholder="Email(*)"
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
              placeholder="Phone No"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              required
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
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "0.6rem" }}
          >
            Speak With An Expert
          </button>{" "}
          <br />
          <span>
            Get a Reply from one of our Outdoors Expert within Few Minutes
          </span>
        </form>
      </section>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postQuickInquiry }
)(QuickInquiry);

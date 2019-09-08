import React, { Component } from "react";
import { connect } from "react-redux";
import { postNews } from "../../../actions/newsAction";
import { Redirect, withRouter } from "react-router-dom";
import $ from "jquery";

class NewsLetter extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      ip: "",
      theme: "",
      title: "",
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
    promise1.then(res =>
      this.setState({
        ip: res,
        theme: this.props.theme,
        title: this.props.title
      })
    );
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const newNews = {
      title: this.state.title,
      theme: this.state.theme,
      email: this.state.email,
      ip: this.state.ip
    };

    this.props.postNews(newNews);
    await this.setState({
      email: "",
      redirect: true
    });
  };
  render() {
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    let themeText = "";
    const theme = this.props.theme;
    if (theme == "Group") {
      themeText = <h5>Get Up to 10% off in a Group Trek</h5>;
    } else if (theme == "Australia" || theme == "UK" || theme == "Malaysia") {
      themeText = (
        <h5>Up to 20% off for Australian, British and Malaysian Tourists</h5>
      );
    } else {
      themeText = <h5>And Get Up to 20% off in your Next Trip</h5>;
    }
    return (
      <section className="news">
        <h4>Sing Up for our News Letter</h4>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
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
          <button className="btn btn-dark" onClick={this.onClick}>
            Book Now
          </button>
        </form>
        <h5>Get Up to 15% off in your Trip</h5>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postNews }
)(NewsLetter);

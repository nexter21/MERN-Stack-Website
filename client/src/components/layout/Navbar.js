import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { submitApplication } from "../../actions/submitAction";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { postHomeUsers } from "../../actions/clientActions";

class Navbar extends Component {
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
  // componentDidMount() {
  //   $.getJSON("https://geoip-db.com/json/").done(function(location) {
  //     const ipOk = (location.country_name,
  //     location.state,
  //     location.city,
  //     location.latitude,
  //     location.longitude,
  //     location.IPv4);
  //   });
  // }

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

    window.location.reload();
  }
  render() {
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link class="navbar-brand" to="/">
            {/* <img
              src={require("./Caravan_ Logo.jpg")}
              alt="Caravan Logo"
              height="50px"
              width="70px"
            /> */}
            <img
              src={require("./caravan.png")}
              alt=""
              height="40px"
              style={{ padding: "0px" }}
            />
          </Link>

          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="nav-link"
                  href=""
                >
                  Nepal
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="dropdownMenu"
                >
                  <Link class="dropdown-item" to="/trekking-in-nepal">
                    Trekking
                  </Link>

                  <Link class="dropdown-item" to="/climbing">
                    Climbing
                  </Link>
                  <Link class="dropdown-item" to="/expedition">
                    Expedition
                  </Link>
                  <Link class="dropdown-item" to="/heli-tours">
                    Heli Tours
                  </Link>
                  <Link class="dropdown-item" to="/tours-and-hiking">
                    Day Tours
                  </Link>
                  <Link class="dropdown-item" to="/hiking">
                    Hikings
                  </Link>
                  <div class="dropdown-divider" />
                  <Link class="dropdown-item" to="/about-nepal">
                    About Nepal
                  </Link>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="nav-link"
                  href=""
                >
                  Bhutan
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="dropdownMenu"
                >
                  <Link class="dropdown-item" to="/Bhutan-Short-Tour/">
                    Bhutan Short Tour
                  </Link>
                  <Link class="dropdown-item" to="/Bhutan-Overview-Tour/">
                    Bhutan Overview Tour
                  </Link>
                  <Link class="dropdown-item" to="/The-Druk-Path-Trek/">
                    The Druk Path Trek
                  </Link>
                  <div class="dropdown-divider" />
                  <Link class="dropdown-item" to="about-bhutan">
                    About Bhutan
                  </Link>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="nav-link"
                  href=""
                >
                  Tibet
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="dropdownMenu"
                >
                  <Link class="dropdown-item" to="/tibet-overview-tour">
                    Tibet Overview Tour
                  </Link>
                  <Link class="dropdown-item" to="/lhasa-overview-tour">
                    Lhasa Overview Tour
                  </Link>
                  <div class="dropdown-divider" />
                  <Link class="dropdown-item" to="/about-tibet">
                    About Tibet
                  </Link>
                </div>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/about" id="nav-link">
                  About Us<span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item active">
                <Link
                  class="nav-link"
                  to="/essential-information"
                  id="nav-link"
                >
                  Essential Information
                </Link>
              </li>
              {/* <li class="nav-item active">
                <Link class="nav-link" to="/blogs" id="nav-link">
                  Blog
                </Link>
              </li> */}
              <li>
                <button
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="modal fade text-dark" id="contactModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Us</h5>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name(*)"
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
                      placeholder="Email(*)"
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
                      id="countryDrop"
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
                    Submit
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

export default connect(
  mapStateToProps,
  { postHomeUsers }
)(Navbar);

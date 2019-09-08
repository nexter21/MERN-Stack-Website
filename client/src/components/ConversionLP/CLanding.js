import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Details from "./convComponets/Details";
import Includes from "./convComponets/Includes";
import Itinerary from "./convComponets/Itinerary";
import Why from "./convComponets/Why";
import Review from "./convComponets/Review";
import Cta from "./convComponets/Cta";
import { connect } from "react-redux";
import { postQuickInquiry } from "../../actions/quickAction";
import { Redirect, withRouter } from "react-router-dom";
import $ from "jquery";
import Footer from "./convComponets/Footer";
import Reviewd from "./convComponets/ReviewdOn";
import Associated from "./convComponets/Associated";
import Counter from "./convComponets/Counter";

class CLanding extends Component {
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
    const navbar = document.getElementById("navbarNavDropdown");
    navbar.style.display = "none";
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

    //  console.log($('div[style="display: block !important;"]'));
    // console.log(document.querySelector('script[data-name="twake"]'));

    // var scripts = document.getElementsByTagName("script");
    // var thisScriptTag = scripts[scripts.length - 1];
    // //thisScriptTag.parentNode.removeChild(thisScriptTag);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();

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

    const twake = document.getElementById("deZ1zUn-1555396026206");
    console.log(twake);
    return (
      <section className="conversionLP">
        <Helmet>
          <title>Everest Base Camp 16 Days Trek</title>
          <style type="text/css">{`
        .navbar {
            display: none
        }

        p {
            font-size: 12px;
        }
        footer {
          display: none
        }
        .icons {
          display: none;
        }
        #twake{
          display: none !important;
        }
    `}</style>
        </Helmet>

        <nav>
          {/* <img
              src={require("./Caravan_ Logo.jpg")}
              alt="Caravan Logo"
              height="50px"
              width="70px"
            /> */}
          <img
            src={require("./caravan.png")}
            alt=""
            height="50px"
            id="landingNavImage"
            style={{ margin: "10px" }}
          />
          <div className="text text-dark">
            <span id="email">
              <i class="fas fa-envelope" />{" "}
              <a href="mailto:sales@caravanoutdoors.com">
                sales@caravanoutdoors.com
              </a>
            </span>
            <span id="phone">
              <i class="fas fa-phone" />{" "}
              <a href="tel:+9779851049483">+9779851049483</a>
            </span>
          </div>
        </nav>
        <div className="mobileHero">
          <img
            src={require("../ConversionLP/everest2.jpg")}
            alt=""
            id="mobileImage"
          />
          <div className="card" id="heroText">
            <h3> Everest Base Camp Trek</h3>
            <h4>
              {" "}
              Experience the <strong> Best 16 Days </strong> of your life{" "}
              <strong>Without Breaking Your Bank</strong>{" "}
            </h4>
          </div>

          <div className="card" id="priceCard">
            <h4>Price :- $1349</h4>
          </div>
          <div className="card" id="priceCard">
            <h4>Duration :- 16 Days</h4>
          </div>
          <a className="btn btn-success" href="#cta" id="heroButton">
            Sign Up For The Trek
          </a>
        </div>
        <div className="overlay">
          <div className="card">
            <h1>
              {" "}
              Everest Base Camp Trek
              {/* <strong>Customizable</strong> with <strong>Flexible Dates</strong> */}
            </h1>
            <h2>
              Experience the <strong> Best 16 Days </strong> of your life{" "}
              <strong>Without Breaking Your Bank</strong>{" "}
            </h2>
          </div>

          <div className="card" id="priceCard">
            <h2>Price :- $1349</h2>
          </div>
          <div className="card" id="priceCard">
            <h2>Duration :- 16 Days</h2>
          </div>
          {/* 
          <button className="btn btn-primary" id="heroButton" /> */}
          <a className="btn btn-success" href="#cta" id="heroButton">
            Sign Up For The Trek
          </a>
        </div>
        <div className="hero">
          <div className="container home-inner" />
        </div>
        <Associated />
        <Details />
        <Includes />
        <Itinerary />
        <Why />
        <Counter />
        <Review />
        <Reviewd />
        <Cta />
        <Footer />
      </section>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postQuickInquiry }
)(CLanding);

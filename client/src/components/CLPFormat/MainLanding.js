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

const MainLanding = ({ title, price, days }) => {
  return (
    <section className="conversionLP">
      <Helmet>
        <title>
          {title} {days} Days
        </title>
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
          src={require("../CLPFormat/imgs/abcM.jpg")}
          alt=""
          id="mobileImage"
        />
        <div className="card" id="heroText">
          <h3>{title}</h3>
          <h4 id="heroH4">
            {" "}
            Experience the <strong> Best {days} Days </strong> of your life{" "}
            <strong>Without Breaking Your Bank</strong>{" "}
          </h4>
        </div>

        <div className="card" id="priceCard">
          <h4>Price :- {price}</h4>
        </div>
        <div className="card" id="priceCard">
          <h4>Duration :- {days} Days</h4>
        </div>
        <a className="btn btn-success" href="#cta" id="heroButton">
          Sign Up For The Trek
        </a>
      </div>
      <div className="overlay">
        <div className="card">
          <h1>
            {" "}
            {title}
            {/* <strong>Customizable</strong> with <strong>Flexible Dates</strong> */}
          </h1>
          <h2>
            Experience the <strong> Best {days} Days </strong> of your life{" "}
            <strong>Without Breaking Your Bank</strong>{" "}
          </h2>
        </div>

        <div className="card" id="priceCard">
          <h2>Price :- {price}</h2>
        </div>
        <div className="card" id="priceCard">
          <h2>Duration :- {days} Days</h2>
        </div>
        {/* 
          <button className="btn btn-primary" id="heroButton" /> */}
        <a className="btn btn-success" href="#cta" id="heroButton">
          Sign Up For The Trek
        </a>
      </div>
      <div className="hero" id="annapurnaHero">
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
      <Cta title={title} />
      <Footer />
    </section>
  );
};

export default MainLanding;

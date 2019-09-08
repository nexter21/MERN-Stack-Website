import React, { Component } from "react";
import Home from "./LandingComponents/Home";
import Welcome from "./LandingComponents/Welcome";
import Products from "./LandingComponents/Products";
import WhatWDo from "./LandingComponents/WhatWDo";
import Contact from "./LandingComponents/Contact";
import Testimonials from "./LandingComponents/Testimonials";
import Partners from "./LandingComponents/Partners";
import FreeAdvice from "./LandingComponents/FreeAdvice";
import Regions from "./LandingComponents/Regions";

export default class Landing extends Component {
  render() {
    return (
      <section className="landingPage">
        <Home />
        <Welcome />
        <WhatWDo />
        <Products />
        {/* <Regions /> */}
        <Testimonials />
        <Contact />
        <FreeAdvice />
        <Partners />
      </section>
    );
  }
}

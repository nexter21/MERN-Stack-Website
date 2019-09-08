import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Agent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="agent">
        <Helmet>
          {" "}
          <title>Agent</title>
        </Helmet>
        <div className="container">
          <h2>Are You An Agent?</h2>

          <p>
            We are the holidaymakers based in Nepal, and we specialize in
            holidaying and adventure travel throughout Nepal, Tibet and Bhutan.
            If you wish to become our travel agent and refer clients to Caravan
            Outdoors, we can help each other more than we can imagine. There are
            no criteria. All you need, is to represent Caravan Outdoors and help
            find greater outdoor activities for the holiday-goers in your
            country. There are many such tourists who wish to visit South Asia,
            yet aren’t able to find good deals or counselors. You step right in
            to help them from the dilemma!
          </p>

          <strong>Feel Free To Contact Us on the above Form</strong>
        </div>
      </section>
    );
  }
}

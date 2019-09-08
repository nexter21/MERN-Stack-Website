import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Difficulty extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="difficulty">
        <Helmet>
          {" "}
          <title>Trip Difficulty</title>
        </Helmet>
        <h2>Trip Difficulty</h2>
        <div className="container">
          <p>
            Every outdoor activity requires a certain physical and mental
            exertion. The level of exertion demanded by certain outdoor trip is
            known as the physical grading.
          </p>
          <strong>
            Outdoor activities in Nepal, mainly; Trekking, Hiking and Climbing,
            can be distinguished into four different physical levels.
          </strong>
        </div>

        <div className="container">
          <div id="level">
            <h3>Easy</h3>
            <div className="row">
              <div className="col-sm-7">
                It is light walking and hiking suitable for most fitness levels.
                Not too challenging for amateurs or experts. Maximum altitude
                remains around 3000 m and the hike requires around 3-4 hours a
                day. Trekkers younger than 14 years can attempt this trek as
                well.
              </div>

              <div className="col-sm-5">
                <img
                  src={require("../../img/difficulty/download.png")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="level">
            <h3>MODERATE</h3>
            <div className="row">
              <div className="col-sm-7">
                It may pose challenge for the amateurs. It may require fair
                level of fitness. Maximum altitude remains around 4000 m – 4500
                m and the hike requires around 5-6 hours a day. Trekkers older
                than 14 years can easily attempt this trek.
              </div>

              <div className="col-sm-5">
                <img
                  src={require("../../img/difficulty/intermediate-icon-512x.png")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="level">
            <h3>STRENUOUS</h3>
            <div className="row">
              <div className="col-sm-7">
                It may pose greater level of difficulty as the terrain and
                altitude may differ along with the temperature. Fitness and
                sound health is a must. Maximum altitude may reach over 5000 m
                and the hike requires over 6 hours a day. It isn’t suggested for
                the trekkers younger than 18 years.
              </div>

              <div className="col-sm-5">
                <img
                  src={require("../../img/difficulty/backpacker-self-traveler-004-512.png")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="level">
            <h3>CHALLENGING</h3>
            <div className="row">
              <div className="col-sm-7">
                It requires previous experience of high-altitude trekking and
                sound health, as the chances of Altitude Sickness & Acute
                Mountain Syndrome may become more common. The altitude may get
                over 6000 m and may require less or more climbing skills, such
                as; cramponing, ice-axing etc.
              </div>

              <div className="col-sm-5">
                <img
                  src={require("../../img/difficulty/254911-200.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

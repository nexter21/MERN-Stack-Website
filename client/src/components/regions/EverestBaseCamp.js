import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Partners from "../LandingPage/LandingComponents/Partners";

export default class EverestBaseCamp extends Component {
  render() {
    return (
      <section className="everestBase">
        <Helmet>
          <style />
        </Helmet>
        <div id="everestHead">
          <h1 style={{ color: "#000" }} />
        </div>
        <div id="mainHead">
          <h2>Everest Base Camp Trek</h2>
          <h5>- One of The Best Long Trek in The World</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 bg-primary text-light" id="baseCampText">
              <h2>About The Trek</h2>
              <p>
                Get ready to step in <strong>"The Steps of Heaven"</strong>.
                Everest Base Camp is among the most popular and the{" "}
                <strong>Most Rewarding</strong> trek in the world. After
                Completing this trip you can tell the whole world that you've
                been to the base camp of the <strong>Highest Mountain</strong>{" "}
                in the world.
              </p>
              <p>
                It isn't as hard as climbing the mount everest, but it's still
                far from easy. However, it's <strong>all worth it</strong>,
                because the
                <strong> Pain Completely Disappears</strong> as you are rewarded
                with spectacular views and a huge sense of{" "}
                <strong>Personal Achievement</strong>. From the day you take a
                flight to Lukla airport, you will traverse scenery that will
                literally take your breath away.{" "}
              </p>
              <p>
                This trek will provide once in a lifetime experience to expert
                travelers. And even if this is your first trek:{" "}
                <strong>Don't Worry</strong> about things like Altitude Mountain
                Sickness, we have a team of{" "}
                <strong>Expert Guides and Trekkers</strong> that will take great
                care of you, and make sure you get the most out of your trek
              </p>
            </div>
            <div className="col-sm-8" id="packages">
              <h2>Explore Your Options</h2>
              <div className="row">
                <div className="col-sm-6">
                  <div class="card" style={{ width: "22rem" }}>
                    <img
                      class="card-img-top"
                      src={require("../../img/trekking/EverestShortTrek–11Days.jpg")}
                      alt="Card cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Everest Base Camp (Short Trek)</h5>
                      <p class="card-text">
                        <h4 id="h4">
                          {" "}
                          <span class="badge badge-pill badge-primary">
                            Price: $999
                          </span>{" "}
                          <span class="badge badge-pill badge-primary">
                            Days: 11 Days
                          </span>{" "}
                        </h4>
                      </p>
                      <Link
                        className="btn btn-dark"
                        to="/Everest-Short-Trek/"
                        id="relatedButton"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="card" style={{ width: "22rem" }}>
                    <img
                      class="card-img-top"
                      src={require("../../img/trekking/EverestRapidTrek–10Days.jpg")}
                      alt="Card cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Everest Base Camp (Rapid Trek)</h5>
                      <p class="card-text">
                        <h4 id="h4">
                          {" "}
                          <span class="badge badge-pill badge-primary">
                            Price: $1149
                          </span>{" "}
                          <span class="badge badge-pill badge-primary">
                            Days: 10 Days
                          </span>{" "}
                        </h4>
                      </p>
                      <Link
                        className="btn btn-dark"
                        to="/Everest-Rapid-Trek/"
                        id="relatedButton"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div class="card" style={{ width: "22rem" }}>
                    <img
                      class="card-img-top"
                      src={require("../../img/trekking/EverestBaseCampTrek–16Days.jpg")}
                      alt="Card cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Everest Base Camp Trek</h5>
                      <p class="card-text">
                        <h4 id="h4">
                          {" "}
                          <span class="badge badge-pill badge-primary">
                            Price: $1349
                          </span>{" "}
                          <span class="badge badge-pill badge-primary">
                            Days: 16 Days
                          </span>{" "}
                        </h4>
                      </p>
                      <Link
                        className="btn btn-dark"
                        to="/Everest-Base-Camp-Trek/"
                        id="relatedButton"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="card" style={{ width: "22rem" }}>
                    <img
                      class="card-img-top"
                      src={require("../../img/trekking/EverestBaseCampTrek(Budget)–14Days.jpg")}
                      alt="Card cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        Everest Base Camp (Budget Trek)
                      </h5>
                      <p class="card-text">
                        <h4 id="h4">
                          {" "}
                          <span class="badge badge-pill badge-primary">
                            Price: $949
                          </span>{" "}
                          <span class="badge badge-pill badge-primary">
                            Days: 14 Days
                          </span>{" "}
                        </h4>
                      </p>
                      <Link
                        className="btn btn-dark"
                        to="/Everest-Base-Camp-Trek-Budget/"
                        id="relatedButton"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

     
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid black", marginTop: "4rem" }}>
          <Partners />
        </div>
      </section>
    );
  }
}

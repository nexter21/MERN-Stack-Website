import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tibet extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="bhutan">
        <div className="container">
          <h1>About Tibet</h1>
          <img
            src="http://www.airtreks.com/wp-content/uploads/shutterstock_107875109.jpg"
            alt="bhutan"
            title="bhutan"
            id="bhutanImg"
          />
          <div className="bhutanText">
            <h2>Tibet Overview</h2>
            <p>
              Planning to travel to Tibet? You might like to know when the best
              time to visit Tibet is. Well, April to October is the period when
              Tibet tourism is on a roll, with August and September being the
              two months when a lot of Tibet tours are planned. Now, before you
              go, wouldn’t you like to know about some places that you must
              visit? Well then, here are the top 10 most popular tourist
              attractions of Tibet.
            </p>
          </div>
          <h2>Explore Your Options</h2>
          <br />
          <div className="row" id="bhutanTreks">
            <div className="col-sm-4">
              {" "}
              <div className="card trekCard" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={require("../../../img/tibet/TibetOverviewTripInNepal.jpg")}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Tibet Overview Trip In Nepal</h5>
                  <p>
                    Tibet or Tibet Autonomous Region of China is located on the
                    Tibetan plateau. It’s is also known as the Roof of the World
                    because of its geographic proximity.
                  </p>
                  <div className="card-body">
                    <Link
                      to="/tibet-overview-tour"
                      className="card-link btn btn-primary"
                    >
                      More Info
                    </Link>
                    <Link
                      to="/tibet-overview-tour"
                      className="card-link btn btn-primary"
                    >
                      Available Dates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card trekCard" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={require("../../../img/tibet/LhasaOverviewTour–7Days.jpg")}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Lhasa Overview Tour</h5>
                  <p>
                    Tibet or Tibet Autonomous Region of China is located on the
                    Tibetan plateau. It’s is also known as the Roof of the World
                    because of its geographic proximity.
                  </p>
                  <div className="card-body">
                    <Link
                      to="/lhasa-overview-tour"
                      className="card-link btn btn-primary"
                    >
                      More Info
                    </Link>
                    <Link
                      to="/lhasa-overview-tour"
                      className="card-link btn btn-primary"
                    >
                      Available Dates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

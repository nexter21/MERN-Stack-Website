import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Related extends Component {
  constructor() {
    super();
    this.state = {
      destinations: [],
      current: ""
    };
  }
  componentDidMount() {
    const current = this.props.number;
    const el = document.getElementById(current);

    el.style.display = "none";
  }

  createDestinations = () => {
    const trips = [];

    const destinations = this.state.destinations;

    for (let i = 0; i < destinations.length; i++) {
      trips.push(
        <div className="col-6" id="eachDestination">
          <div className="row">
            <div className="col-sm-6" id="destination">
              <img
                src={require(`../../../img/trekking/${destinations[i][1]}.jpg`)}
                alt={destinations[i][1]}
              />
            </div>
            <div className="col-sm-6">
              <h5>{destinations[i][1]}</h5>
              <p>{destinations[i][2].substr(0, 200)}...</p>
              <Link className="btn btn-primary" to={`/${destinations[i][5]}`}>
                See More
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return trips;
  };
  render() {
    return (
      <section className="related">
        <div className="card" id="mainCard">
          <h3>Related Trips</h3>
          <div className="row">
            <div className="col-sm-12" id="rel1">
              <div className="card">
                <img
                  src={require("../../../img/trekking/EverestBaseCampTrek(Budget)–14Days.jpg")}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Everest Base Camp Budget Trek</strong>
                  </h5>
                  <h4 id="h4">
                    {" "}
                    <span class="badge badge-pill badge-primary">
                      Price: $949
                    </span>{" "}
                    <span class="badge badge-pill badge-primary">
                      Days: 14 Days
                    </span>{" "}
                  </h4>

                  <Link
                    className="btn btn-dark"
                    to="/Everest-Base-Camp-Trek-Budget/"
                    id="relatedButton"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12" id="rel2">
              {" "}
              <div className="card">
                <img
                  src={require("../../../img/trekking/EverestBaseCampTrek–16Days.jpg")}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Everest Base Camp Trek</strong>
                  </h5>
                  <h4 id="h4">
                    {" "}
                    <span class="badge badge-pill badge-primary">
                      Price: $1349
                    </span>{" "}
                    <span class="badge badge-pill badge-primary">
                      Days: 16 Days
                    </span>{" "}
                  </h4>

                  <Link
                    className="btn btn-dark"
                    to="/Everest-Base-Camp-Trek/"
                    id="relatedButton"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12" id="rel3">
              {" "}
              <div className="card">
                <img
                  src={require("../../../img/trekking/EverestShortTrek–11Days.jpg")}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Everest Short Trek</strong>
                  </h5>
                  <h4 id="h4">
                    {" "}
                    <span class="badge badge-pill badge-primary">
                      Price: $999
                    </span>{" "}
                    <span class="badge badge-pill badge-primary">
                      Days: 11 Days
                    </span>{" "}
                  </h4>

                  <Link
                    className="btn btn-dark"
                    to="/Everest-Short-Trek/"
                    id="relatedButton"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12" id="rel4">
              <div className="card">
                <img
                  src={require("../../../img/trekking/EverestRapidTrek–10Days.jpg")}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Everest Rapid Trek</strong>
                  </h5>
                  <h4 id="h4">
                    {" "}
                    <span class="badge badge-pill badge-primary">
                      Price: $1149
                    </span>{" "}
                    <span class="badge badge-pill badge-primary">
                      Days: 10 Days
                    </span>{" "}
                  </h4>

                  <Link
                    className="btn btn-dark"
                    to="/Everest-Rapid-Trek/"
                    id="relatedButton"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

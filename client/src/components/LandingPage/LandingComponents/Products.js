import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  render() {
    return (
      <section className="bg-light text-dark" id="products">
        <h1
          style={{
            color: "black",
            textAlign: "center"
          }}
        >
          Our Most Popular Trips
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/trekking/AnnapurnaBaseCamp(Abc)BudgetTrek–11Days.jpg")}
                  alt="Card image cap"
                  id="productImg"
                />
                <div className="card-body text-dark">
                  <h4 class="card-title">
                    Annapurna Base Budget Trek - 11 Days{" "}
                    <span class="badge badge-pill badge-primary">
                      Best Value
                    </span>
                  </h4>

                  <strong>Price: $849 Duration: 11 Days</strong>
                  <br />
                  <br />
                  <Link
                    className="btn btn-dark"
                    style={{ width: "9rem" }}
                    to="/Annapurna-Base-Camp-Budget-Trek/"
                  >
                    See More
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    style={{
                      float: "right",
                      width: "9rem"
                    }}
                    to="/Annapurna-Base-Camp-Budget-Trek/"
                  >
                    View Dates
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/trekking/EverestBaseCampTrek–16Days.jpg")}
                  alt="Card cap"
                  id="productImg"
                />
                <div className="card-body text-dark">
                  <h4 class="card-title">
                    Everest Base Camp Trek - 16 Days{" "}
                    <span class="badge badge-pill badge-primary">
                      Best Price
                    </span>
                  </h4>

                  <strong>Price: $1349 Duration: 16 Days</strong>
                  <br />
                  <br />
                  <Link
                    className="btn btn-dark"
                    style={{ width: "9rem" }}
                    to="/Everest-Base-Camp-Trek/"
                    rel="nofollow"
                  >
                    See More
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    style={{
                      float: "right",
                      width: "9rem"
                    }}
                    to="/Everest-Base-Camp-Trek/"
                    rel="nofollow"
                  >
                    View Dates
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/trekking/LangtangKyanjinGompaTrek–11Days.jpg")}
                  alt="Card image cap"
                  id="productImg"
                />
                <div className="card-body text-dark">
                  <h4 class="card-title">
                    Langtang Kyanjin Gompa(Valley) Trek – 11 Days{" "}
                    <span class="badge badge-pill badge-primary">
                      Most Affordable
                    </span>
                  </h4>

                  <strong>Price: $680 Duration: 11 Days</strong>
                  <br />
                  <br />
                  <Link
                    className="btn btn-dark"
                    style={{ width: "9rem" }}
                    to="/Langtang-Valley-Trek/"
                    rel="nofollow"
                  >
                    See More
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    style={{
                      float: "right",
                      width: "9rem"
                    }}
                    to="/Langtang-Valley-Trek/"
                    rel="nofollow"
                  >
                    View Dates
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row" id="lowerProducts">
            <div className="col-sm-4">
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/climbs/IslandPeakClimb–16Days.jpg")}
                  alt="Card image cap"
                  id="productImg"
                />
                <div className="card-body text-dark">
                  <h4 class="card-title">
                    Island Peak Climb – 16 Days{" "}
                    <span class="badge badge-pill badge-primary">
                      Most Popular
                    </span>
                  </h4>

                  <strong>Price: $1999 Duration: 16 Days</strong>
                  <br />
                  <br />
                  <Link
                    className="btn btn-dark"
                    style={{ width: "9rem" }}
                    to="/Island-Peak-Climb/"
                    rel="nofollow"
                  >
                    See More
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    style={{
                      float: "right",
                      width: "9rem"
                    }}
                    to="/Island-Peak-Climb/"
                    rel="nofollow"
                  >
                    View Dates
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/climbs/KyajoRiPeakClimb–16Days.jpg")}
                  alt="Card image cap"
                  id="productImg"
                />
                <div className="card-body text-dark">
                  <h4 class="card-title">
                    Kyajo Ri Peak Climb – 16 Days{" "}
                    <span class="badge badge-pill badge-primary">
                      Best Value
                    </span>
                  </h4>

                  <strong>Price: $2699 Duration: 16 Days</strong>
                  <br />
                  <br />
                  <Link
                    className="btn btn-dark"
                    style={{ width: "9rem" }}
                    to="/Kyajo-Ri-Peak-Climb/"
                    rel="nofollow"
                  >
                    See More
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    style={{
                      float: "right",
                      width: "9rem"
                    }}
                    to="/Kyajo-Ri-Peak-Climb/"
                    rel="nofollow"
                  >
                    View Dates
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card">
                <img
                  class="card-img-top"
                  src={require("../../../img/climbs/MeraPeakClimb–17Days.jpg")}
                  alt="Card image cap"
                  id="productImg"
                />
                <div className="card-body text-dark">
                  <h4 class="card-title">
                    Mera Peak Climb – 17 Days{" "}
                    <span class="badge badge-pill badge-primary">
                      Best Price
                    </span>
                  </h4>

                  <strong>Price: $2399 Duration: 17 Days</strong>
                  <br />
                  <br />
                  <Link
                    className="btn btn-dark"
                    style={{ width: "9rem" }}
                    to="/Mera-Peak-Climb/"
                    rel="nofollow"
                  >
                    See More
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    style={{
                      float: "right",
                      width: "9rem"
                    }}
                    to="/Mera-Peak-Climb/"
                    rel="nofollow"
                  >
                    View Dates
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

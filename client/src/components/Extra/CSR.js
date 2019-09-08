import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class CSR extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="csr">
        <Helmet>
          {" "}
          <title>CSR</title>
        </Helmet>
        <div className="container">
          <h1>Corporate Social Responsibility</h1>

          <div className="row">
            <div className="col-sm-8">
              <img
                src={require("../../img/csr/csr.jpg")}
                alt=""
                className="csrImg"
                id="csrImg"
              />
              <h2>Responsible Tourism</h2>

              <p>
                As a responsible stakeholder of tourism in Nepal, we oblige to
                our duty of making the community a better place. We envision,
                only a better community can sustain throughout the time. Our
                primary motive is to introduce the concept of self-sustenance
                through tourism, and offer basic health, medical, sanitation and
                education to the under-privileged communities.
              </p>
              <p>
                We work closely with the{" "}
                <a href="http://www.pfnepal.org/about-us.html" target="_blank">
                  {" "}
                  <strong style={{ color: "#007bff" }}>
                    Pioneer Foundation Nepal (PFN)
                  </strong>
                </a>
                , a non-profit entity based in Kathmandu. It was founded with
                the aim of uplifting the under-privileged, impoverished and
                marginalized communities. Their entire field-projects account
                for uplifting the rural villages located outside the capital
                city, Kathmandu.
              </p>

              <h3>Functions</h3>

              <ul className="list-group">
                <li className="list-group-item">
                  <span class="badge badge-primary badge-pill">1</span>{" "}
                  Long-term/short-term rehabilitation of the earthquake victims
                </li>
                <li className="list-group-item">
                  <span class="badge badge-primary badge-pill">2</span>{" "}
                  Advocating and raising fund for the primary education to the
                  children in the rural areas.
                </li>
                <li className="list-group-item">
                  <span class="badge badge-primary badge-pill">3</span>
                  Advocating the concept of sustainable tourism in the villages.
                </li>
                <li className="list-group-item">
                  <span class="badge badge-primary badge-pill">4</span>
                  Offering basic medical assistance and sanitation in the
                  earthquake stricken areas
                </li>
                <li className="list-group-item">
                  <span class="badge badge-primary badge-pill">5</span>
                  Advocating volunteer based teaching.
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <div className="indiImg">
                <img
                  src={require("../../img/csr/csr1.jpg")}
                  alt="A house devastated by the Earthquake"
                />
                <br />
                <span>A house devastated by the Earthquake</span>
              </div>
              <div className="indiImg">
                <img
                  src={require("../../img/csr/csr2.jpg")}
                  alt="A house devastated by the Earthquake"
                />
                <br />
                <span>A house devastated by the Earthquake</span>
              </div>
              <div className="indiImg">
                <img
                  src={require("../../img/csr/csr3.jpg")}
                  alt="A house devastated by the Earthquake"
                />
                <br />
                <span>PFN volunteers building the temporary shelter</span>
              </div>
              <div className="indiImg">
                <img
                  src={require("../../img/csr/csr4.jpg")}
                  alt="A house devastated by the Earthquake"
                  height="220rem"
                />
                <br />
                <span>PFN volunteers building the temporary shelter</span>
              </div>
              <div className="indiImg">
                <img
                  src={require("../../img/csr/csr5.jpg")}
                  alt="A house devastated by the Earthquake"
                />
                <br />
                <span>Immediate relief for earthquake victims at Gorkha</span>
              </div>
              <div className="indiImg">
                <img
                  src={require("../../img/csr/csr6.jpg")}
                  alt="A house devastated by the Earthquake"
                />
                <br />
                <span>Immediate relief for earthquake victims at Gorkha</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

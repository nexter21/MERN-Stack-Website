import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <section className="welcome">
        <h2>Welcome to Caravan Outdoors</h2>

        <section id="create-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6 order-2">
                <img
                  src={require(`../../../img/caravan.jpg`)}
                  alt=""
                  class="img-fluid mb-3 rounded-circle"
                />
              </div>
              <div class="col-md-6 order-1" id="welcomeText">
                <div class="d-flex" id="benefit">
                  <div class="align-self-start">
                    <i class="fas fa-check fa-2x" />
                  </div>
                  <div class="align-self-end">
                    <span>
                      Even with a <strong>Small Budget</strong> you can have a{" "}
                      <strong>Great Vacation</strong> as we have very affordable
                      pricing
                    </span>
                  </div>
                </div>

                <div class="d-flex" id="benefit">
                  <div class="align-self-start">
                    <i class="fas fa-check fa-2x" />
                  </div>
                  <div class="align-self-end">
                    <span>
                      We are among the <strong>Most Reliable</strong> agents in
                      Nepal. And Our{" "}
                      <a
                        href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                        style={{ color: "#007bff" }}
                        target="_blank"
                        rel="nofollow"
                      >
                        Excellent Reviews
                      </a>{" "}
                      Definitely shows that
                    </span>
                  </div>
                </div>
                <div class="d-flex" id="benefit">
                  <div class="align-self-start">
                    <i class="fas fa-check fa-2x" />
                  </div>
                  <div class="align-self-end">
                    <span>
                      {" "}
                      Our Every Trip is <strong>Customizable</strong> according
                      to your need
                    </span>
                  </div>
                </div>
                <div class="d-flex" id="benefit">
                  <div class="align-self-start">
                    <i class="fas fa-check fa-2x" />
                  </div>
                  <div class="align-self-end">
                    <span>
                      Our <strong>Experienced Guides</strong> and Managers
                      always make sure you get the most out of your Vacation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

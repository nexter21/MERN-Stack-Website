import React, { Component } from "react";

export default class Why extends Component {
  render() {
    return (
      <section className="welcome" id="whyIti">
        <h2>Why Caravan Outdoors?</h2>

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
                      You can do a <strong>Solo/Private</strong> Trek, Or You
                      Can Also <strong>Join a Group</strong>
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
                      This Trek is <strong>Fully Customizable</strong> according
                      to your need with <strong>No Hidden Fees</strong>
                    </span>
                  </div>
                </div>
                <div class="d-flex" id="benefit">
                  <div class="align-self-start">
                    <i class="fas fa-check fa-2x" />
                  </div>
                  <div class="align-self-end">
                    <span>
                      Our <strong>Experienced Guides</strong> are Trained to
                      Deal with Ams and Other Obstacles
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

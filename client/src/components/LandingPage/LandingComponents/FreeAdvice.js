import React, { Component } from "react";

export default class FreeAdvice extends Component {
  render() {
    return (
      <section className="bg-dark text-light" id="free">
        <h2>Have Questions?</h2>
        <h4 style={{ textAlign: "center" }}>
          Contact us below to get Free Advice{" "}
        </h4>
        <div className="contactInfo">
          <div className="container">
            <div className="row">
              <div className="col-sm-6" id="phoneNo">
                <h5 style={{ fontSize: "2rem" }}>
                  <strong>
                    {" "}
                    <a href="tel:+9779851049483" rel="nofollow">
                      +9779851049483
                    </a>
                  </strong>
                </h5>
                <h6>Outdoors Expert, Gautam Wagle</h6>
              </div>
              <h3 id="or">OR</h3>
              <br />
              <div className="col-sm-6" id="askButton">
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#contactModal"
                  id="askNowButton"
                >
                  Ask Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

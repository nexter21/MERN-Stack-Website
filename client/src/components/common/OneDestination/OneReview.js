import React, { Component } from "react";

export default class OneReview extends Component {
  render() {
    let url = `../../../img/${this.props.folderName}/${
      this.props.review[0]
    }.jpg`;
    if (!this.props.folderName) {
      url = `../../../img/main-review.jpg`;
    }

    let clientImg;
    let clientText;
    if (this.props.folderName) {
      clientImg = (
        <img
          src={require(`../../../img/${this.props.folderName}/${
            this.props.review[0]
          }.jpg`)}
        />
      );
      clientText = (
        <h1 style={{ marginTop: "2rem" }}>"{this.props.review[1]}"</h1>
      );
    } else {
      clientImg = (
        <img
          src={require(`../../../img/main-review.jpg`)}
          style={{ marginTop: "1.5rem" }}
        />
      );
      clientText = (
        <h1 style={{ marginTop: "1rem" }}>"{this.props.review[1]}"</h1>
      );
    }
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return (
        <section className="oneReview">
          <div className="card bg-primary text-light">
            <div className="row">
              <div className="col-5">{clientImg}</div>
              <div className="col-7" id="revText">
                <h3>{this.props.review[2]}</h3>
                <h7>
                  {" "}
                  <a
                    href={this.props.review[3]}
                    style={{ marginRight: "0.3rem" }}
                    target="_blank"
                  >
                    From Trip Advisor
                  </a>
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                </h7>
                {clientText}
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="oneReview">
          <div className="card bg-primary text-light">
            <div className="row">
              <div className="col-5">{clientImg}</div>
              <div className="col-7" id="revText">
                <h3>{this.props.review[2]}</h3>
                <h7>
                  {" "}
                  <a
                    href={this.props.review[3]}
                    style={{ marginRight: "0.3rem" }}
                    target="_blank"
                  >
                    From Trip Advisor
                  </a>
                  <br />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                </h7>
              </div>
            </div>
            {clientText}
          </div>
        </section>
      );
    }
  }
}

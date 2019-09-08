import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class MainPage extends Component {
  render() {
    return (
      <section className="blogs">
        <Helmet>
          <title>Blogs Caravan Outdoors</title>
        </Helmet>
        <div className="container" style={{ gridAutoRows: "1fr" }}>
          <h2>Caravan Outdoors Blogs</h2>

          <div className="row row-eq-height" id="mainBlogSection">
            <div className="col-sm-4">
              <div class="card" style={{ width: "23rem", height: "30rem" }}>
                <img
                  class="card-img-top"
                  src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OS8wNzYvb3JpZ2luYWwvbW91bnQtZXZlcmVzdC5qcGc="
                  alt="Card"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Everest Base Camp Trek dadaa Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Libero, quos?
                  </h5>
                  <div className="row" id="blogInfo">
                    <div className="col-sm-8">
                      Added to{" "}
                      <strong className="text-primary">Everest Region</strong>
                    </div>
                    <div className="col-sm-4" id="blogDate">
                      2019/12/10
                    </div>
                  </div>
                  <span id="writerSpan">
                    {" "}
                    <img
                      src={require("./download.jpg")}
                      alt=""
                      id="blogWriter"
                    />{" "}
                    By Paras KC
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div class="card" style={{ width: "23rem", height: "30rem" }}>
                <img
                  class="card-img-top"
                  src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OS8wNzYvb3JpZ2luYWwvbW91bnQtZXZlcmVzdC5qcGc="
                  alt="Card"
                />
                <div class="card-body">
                  <h5 class="card-title">Everest Base Camp Trek</h5>
                  <div className="row" id="blogInfo">
                    <div className="col-sm-8">
                      Added to{" "}
                      <strong className="text-primary">Everest Region</strong>
                    </div>
                    <div className="col-sm-4" id="blogDate">
                      2019/12/10
                    </div>
                  </div>
                  <span id="writerSpan">
                    {" "}
                    <img
                      src={require("./download.jpg")}
                      alt=""
                      id="blogWriter"
                    />{" "}
                    By Paras KC
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div class="card" style={{ width: "23rem", height: "30rem" }}>
                <img
                  class="card-img-top"
                  src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OS8wNzYvb3JpZ2luYWwvbW91bnQtZXZlcmVzdC5qcGc="
                  alt="Card"
                />
                <div class="card-body">
                  <h5 class="card-title">Everest Base Camp Trek</h5>
                  <div className="row" id="blogInfo">
                    <div className="col-sm-8">
                      Added to{" "}
                      <strong className="text-primary">Everest Region</strong>
                    </div>
                    <div className="col-sm-4" id="blogDate">
                      2019/12/10
                    </div>
                  </div>
                  <span id="writerSpan">
                    {" "}
                    <img
                      src={require("./download.jpg")}
                      alt=""
                      id="blogWriter"
                    />{" "}
                    By Paras KC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

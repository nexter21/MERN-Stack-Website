import React, { Component } from "react";

export default class Partners extends Component {
  render() {
    return (
      <section className="partners">
        <div className="container">
          <div className="row" id="partnerRow">
            <div className="col-sm-2" id="taan">
              <h4>
                <strong>Certified By</strong>
              </h4>
              <a
                href="https://taan.org.np/members/caravan-outdoors-pvt-ltd-1588"
                target="_blank"
                rel="nofollow"
              >
                <img src={require("./img/taan.png")} alt="" />
                <h6>
                  <strong>Trekking Agencies Association Of Nepal</strong>
                </h6>
              </a>
            </div>
            <div className="col-sm-2" id="partner">
              <h6>
                <strong>Recommended On</strong>
              </h6>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                target="_blank"
                rel="nofollow"
              >
                <img src={require("./img/1200x630wa.png")} alt="" />
              </a>
              <br />
              <br />
              <h6>
                <strong>Trip Advisor</strong>
              </h6>
            </div>
            <div className="col-sm-2" id="partner">
              <h4>
                <strong>Member Of</strong>
              </h4>
              <a
                href="https://ictp.travel/caravan-outdoors/"
                target="_blank"
                rel="nofollow"
              >
                <img src={require("./img/icpt.jpg")} alt="" />
              </a>
              <br />
              <br />
              <h6>
                <strong>International Coalition of Tourism Partners</strong>
              </h6>
            </div>

            <div className="col-sm-2" id="partner">
              <h4>
                <strong>Reviewed On</strong>
              </h4>
              <a
                href="https://www.trustpilot.com/review/caravanoutdoors.com"
                target="_blank"
                rel="nofollow"
              >
                <img src={require("./img/trustpilot.png")} alt="" />
              </a>
              <br />
              <br />
              <h6>
                <strong>Trust Pilot</strong>
              </h6>
            </div>
            <div className="col-sm-2" id="partner">
              <h5>
                <strong>Associated With</strong>
              </h5>
              <a
                href="https://www.geta-europe.org/"
                target="_blank"
                rel="nofollow"
              >
                <img
                  src={require("./img/gay-friendly-Italy-vacations.jpg")}
                  alt=""
                />
              </a>
              <br />
              <br />
              <h6>
                <strong>Gay European Tourism Association</strong>
              </h6>
            </div>
          </div>
          <div className="row justify-content-center" id="nepalis">
            <div className="col-sm-4" id="ntb">
              <h3>
                <strong>Approved By</strong>
              </h3>
              <a
                href="https://www.welcomenepal.com/"
                target="_blank"
                rel="nofollow"
              >
                <img src={require("./img/ntb.jpg")} alt="" />
              </a>
              <br />
              <br />
              <h5>
                <strong>Nepal Tourism Board</strong>
              </h5>
            </div>
            <div className="col-sm-4" id="nma">
              <h3>
                <strong>Licensed By</strong>
              </h3>
              <a
                href="http://www.nepalmountaineering.org/"
                target="_blank"
                rel="nofollow"
              >
                <img src={require("./img/NMA-Logo.png")} alt="" />
              </a>
              <br />
              <br />
              <h5>
                <strong>Nepal Mountaineering Association</strong>
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";

export default class Includes extends Component {
  render() {
    return (
      <section className="includes">
        <h1>The Trek Includes</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <img
                src={require("./incImg/airport.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6>Airport Pick Up and Drop</h6>
            </div>
            <div className="col-sm-2">
              {" "}
              <img
                src={require("./incImg/bus.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6>Entire land commute during the trip</h6>
            </div>
            <div className="col-sm-2">
              <img
                src={require("./incImg/domestic.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6> Domestic flight fare, airport tax and domestic transfer</h6>
            </div>
            <div className="col-sm-2">
              <img
                src={require("./incImg/breakfast.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6> (B,L,D) Meals during the trek.</h6>
            </div>
            <div className="col-sm-2">
              {" "}
              <img
                src={require("./incImg/hunter.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6>
                Certified, English speaking, Guide (Licensed & First Aid
                Trained)
              </h6>
            </div>
            <div className="col-sm-2">
              <img
                src={require("./incImg/porter.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6>A Very Strong Porter(1 for 2)</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              {" "}
              <img
                src={require("./incImg/hotel.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6>Exclusive Hotels in KTM and Tea House/Lodges During Trek</h6>
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={require("./incImg/first-aid-kit.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6>A First Aid Kit(Carried By Your Guide)</h6>
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={require("./incImg/helicopter.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6> Arrangement of Rescue/Medical Helicopter service</h6>
            </div>
            <div className="col-sm-3">
              {" "}
              <img
                src={require("./incImg/permit.png")}
                alt="Airport Pick Up and Drop"
              />
              <h6> TIMS Card/ National Park entry fee/Other Permits</h6>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

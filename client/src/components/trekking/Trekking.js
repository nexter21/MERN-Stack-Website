import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trek from "./Trek";

export default class Trekking extends Component {
  render() {
    return (
      <section className="trekking">
        <Helmet>
          <title>Trekking in Nepal</title>
        </Helmet>
        <Route exact path="/trek" component={Trek} />
        <div id="courseHeading">
          <img
            src="http://www.trekkingpartners.com/resources/images/blog/top-treks/manaslu-circuit-trek-by-alex-treadway.jpg"
            alt="Trekking in Nepal"
            className="img-fluid"
            id="blogImage"
          />
        </div>
        <div className="container">
          <div id="trekIntro">
            <h1 className="h1trek" style={{ marginBottom: "2rem" }}>
              <b>Trekking In Nepal</b>
            </h1>
            <p>
              Nepal is known as the trekkers’ haven. Everest Base Camp &
              Annapurna Circuit are rated among the Top Ten Trek Trails in the
              World. The mountains and hills are the USPs of Nepal. They cover
              more than 60% of the country’s landmass, hence offering more
              options for the trekking. The uneven terrains and mountainous
              landscape offers some unique trails. Everest, Annapurna and
              Manaslu comprise of high altitude trekking, whereas. Dolpo and
              Mustang regions are “Rain-shadow” areas which are suitable for
              monsoon trekking due to their geographical alienation. The treks
              can last from few days to a month. Ghorepani-Poon Hill is one of
              the shortest treks, whereas, Makalu Base Camp and Annapurna
              Circuit are the longest treks, in Nepal. We organize full-board
              trek activities in almost every region for travelers of any age or
              preference. You can choose to go solo, couple, family or in a
              larger group; and spend time at tea-houses or camps as well.
            </p>
          </div>
          
          <div className="row treks">
            <div className="card trekCard" style={{ width: "22rem" }}>
              <img
                className="card-img-top"
                src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/everest-base-camp-trek-ebc-trek-12-days-tour-2-20727_1547110138.JPG"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Everest Base Camp</h5>
                <p className="card-text">
                  Take this trek to experience once in a lifetime moment
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Trip Cost: $695</li>
                <li className="list-group-item">Duration: 7 Days</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link btn btn-primary">
                  More Info
                </a>
                <a href="#" className="card-link btn btn-primary">
                  Available Dates
                </a>
              </div>
            </div>

            <div className="card trekCard" style={{ width: "22rem" }}>
              <img
                className="card-img-top"
                src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/everest-base-camp-trek-ebc-trek-12-days-tour-2-20727_1547110138.JPG"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Everest Base Camp</h5>
                <p className="card-text">
                  Take this trek to experience once in a lifetime moment
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Trip Cost: $695</li>
                <li className="list-group-item">Duration: 7 Days</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link btn btn-primary">
                  More Info
                </a>
                <a href="#" className="card-link btn btn-primary">
                  Available Dates
                </a>
              </div>
            </div>

            <div className="card trekCard" style={{ width: "22rem" }}>
              <img
                className="card-img-top"
                src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/everest-base-camp-trek-ebc-trek-12-days-tour-2-20727_1547110138.JPG"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Everest Base Camp</h5>
                <p className="card-text">
                  Take this trek to experience once in a lifetime moment
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Trip Cost: $695</li>
                <li className="list-group-item">Duration: 7 Days</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link btn btn-primary">
                  More Info
                </a>
                <a href="#" className="card-link btn btn-primary">
                  Available Dates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

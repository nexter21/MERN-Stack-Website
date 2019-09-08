import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      //SHOWCASE SLIDER
      <section id="showcase">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div
              className="carousel-item carousel-image-1 active"
              id="indiCarousel"
            >
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left text-dark mb-5">
                  <h1 className="display-3">
                    <strong>Climbing</strong>
                  </h1>
                  <p style={{ fontSize: "1srem" }}>
                    <strong>
                      Climbing is the elite adventure sport popular among
                      climbing enthusiast
                    </strong>
                  </p>
                  <Link
                    to="/climbing"
                    className="btn btn-danger btn-lg"
                    rel="nofollow"
                  >
                    Explore Climbing
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item carousel-image-2" id="indiCarousel">
              <div className="container" style={{ color: "black" }}>
                <div className="carousel-caption d-none d-sm-block mb-5">
                  <h1 className="display-3">Tours</h1>
                  <p className="lead">
                    <strong>
                      {" "}
                      There are countless places to visit and every place may
                      offer a unique taste. Our tours may vary from one day to
                      multiple day tours. Every trip is led by certified and
                      language-versed guides. Wildlife Safari in Chitwan,
                      Rafting and the city tour of Kathmandu are few of the
                      popular overland tours in Nepal.
                    </strong>
                  </p>
                  <Link
                    to="/tours-and-hiking"
                    className="btn btn-primary btn-lg"
                    rel="nofollow"
                  >
                    Explore Tours
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item carousel-image-3" id="indiCarousel">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-left mb-5">
                  <h1 className="display-3">Trekking</h1>
                  <p className="lead">
                    Nepal is known as the trekkers’ Heaven. Everest Base Camp &
                    Annapurna Circuit are rated among the Top Ten Trek Trails in
                    the World.We organize full-board trek activities in almost
                    every region for travelers of any age or preference.
                  </p>
                  <Link
                    to="trekking-in-nepal"
                    className="btn btn-success btn-lg"
                    rel="nofollow"
                  >
                    Explore Destinations
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#myCarousel"
            data-slide="prev"
            className="carousel-control-prev"
          >
            <span className="carousel-control-prev-icon" />
          </a>

          <a
            href="#myCarousel"
            data-slide="next"
            className="carousel-control-next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </section>
    );
  }
}

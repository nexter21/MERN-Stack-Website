import React, { Component } from "react";

export default class Review extends Component {
  render() {
    return (
      <section className="landingReview">
        <h1 className="text-success">Client's Review</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img
                src={require("../merapeak.jpg")}
                alt="Mera Peak Review"
                id="meraReview"
              />
            </div>
            <div className="col-lg-6 col-md-12" id="lreviewtext">
              <blockquote>
                <q>
                  It was a great experience, the guides were amazing, the trip
                  was amazing! I can't say enough good things, I'm already
                  looking to go back and do another trip!
                </q>
              </blockquote>
              <h2 className="text-success">Patricia Smith</h2>
              <h3>London UK, 2017</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

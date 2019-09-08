import React, { Component } from "react";

export default class Testimonials extends Component {
  onClick(e) {
    const button = e.target;
    const extra = button.previousSibling;
    const span = extra.previousSibling;

    if (extra.style.display == "inline") {
      extra.style.display = "none";
      span.innerText = "...";
      button.innerHTML = "See More";
    } else {
      extra.style.display = "inline";
      span.innerText = "";
      button.innerHTML = "See Less";
    }
  }
  render() {
    return (
      <section id="authors" class="my-5 text-center" style={{ color: "black" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="pb-3">Meet Our Clients</h1>
                <p class="lead">See What our Clients are saying</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-l/01/8f/82/04/travelingsun.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Traveling_sun</h3>
                  <h7>Austin, Texas</h7>
                  <p>
                    "Outstanding service and very accommodating to our requests"
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-l/02/fe/99/c8/facebook-avatar.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Isabelw</h3>
                  <h7>Wolverhampton, United Kingdom</h7>
                  <p>"Amazing EBC trek"</p>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-l/11/9d/b4/cc/desmund-t.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Desmund T</h3>
                  <h7>Toronto, Canada</h7>
                  <p>
                    "Wonderful holiday with many great memories with Caravan"
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-3" style={{ marginBottom: "1rem" }}>
              <div class="card">
                <div class="card-body">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/01/2e/70/99/avatar025.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Connie</h3>
                  <h7>Cairns, Australia</h7>
                  <p>"My lucky day when I discovered Caravan Outdoors"</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
            className="btn btn-dark"
            id="tripButton"
            target="_blank"
            rel="nofollow"
          >
            See All the Reviews on <i class="fab fa-tripadvisor" />
          </a>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nepal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="nepal">
        <div className="container">
          <h1>About Nepal</h1>
        </div>
        <div className="container" id="nepalCont">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Nepal-Himalayas-497318374-kapulya-copy.jpg"
                alt=""
                id="nepalImg"
              />
              <br />
              <div className="nepalText">
                <p>
                  Nepal makes it to the <strong>Bucket List</strong> of a lot
                  travellers all over the world. You get see a lot of stunning
                  views of mountains, experience the natural and cultural
                  diversity this country provides, and meet a lot of Friendly
                  People. Whether you want to witness the rare{" "}
                  <strong>One horned Rhinoceros</strong> or climb the highest
                  point on the earth , or may be even witness the only{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Kumari_(goddess)"
                    style={{ color: "#007bff" }}
                    target="_blank"
                  >
                    <strong>Living Goddess</strong>
                  </a>{" "}
                  in this world, this country provides it all.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <h2>Quick Facts</h2>
              <ul className="list-group" id="quickFacts">
                <li className="list-group-item">
                  <i class="fas fa-smile-beam" /> Hello = Namaste
                </li>
                <li className="list-group-item">
                  <i class="fas fa-money-bill-alt" /> $1 USD ~ Rs 110
                </li>
                <li className="list-group-item">
                  <i class="fas fa-location-arrow" />
                  Latitudes 26° and 31°N
                </li>
                <li className="list-group-item">
                  <i class="fas fa-temperature-low" /> 9°C(49°F) to 23°C(73°F)
                </li>
              </ul>
            </div>
          </div>
          <div className="exploreOptions">
            <h2>Explore Your Options</h2>
            <div className="row" id="exploreOptions">
              <div className="col-sm-4">
                {" "}
                <div className="card trekCard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src={require("../../../img/trekking/AnnapurnaBaseCamp(Abc)ShortTrek–6Days.jpg")}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Trekking In Nepal</h5>
                  </div>
                  <p>
                    Nepal is known as the trekkers’ heaven. Everest Base Camp &
                    Annapurna Circuit are rated among the Top Ten Trek Trails in
                    the World
                  </p>
                  <div className="card-body">
                    <Link
                      to="/trekking-in-nepal"
                      className="card-link btn btn-primary"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                {" "}
                <div className="card trekCard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src={require("../../../img/climbs/IslandPeakClimbviaEBC–20Days.jpg")}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Climbing In Nepal</h5>
                  </div>
                  <p>
                    Climbing is the elite adventure sport popular among climbing
                    enthusiasts. With the advent of technology, climbing has
                    been less harder; and anyone with previous trekking
                    experience can climb a couple of small peaks.
                  </p>
                  <div className="card-body">
                    <Link to="/climbing" className="card-link btn btn-primary">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                {" "}
                <div className="card trekCard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src={require("../../../img/expedition/AmaDablamExpedition–31Days.jpg")}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Expedition In Nepal</h5>
                  </div>
                  <p>
                    Nepal Mountaineering Association has classified 33 peaks in
                    Nepal as ‘the trekking peaks,’ ranging from 5,650 meter to
                    6,500 meters. Group A comprises of 15 peaks and Group B
                    comprises of 18 peaks. Check the entire small peaks list. If
                    you wish to try something new or taste the amateur
                    mountaineering experience, you can sign up for any of the
                    Small Peaks
                  </p>
                  <div className="card-body">
                    <Link
                      to="/expedition"
                      className="card-link btn btn-primary"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                {" "}
                <div className="card trekCard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src={require("../../../img/heli/EverestHeliLuxuryTrek–6Days.jpg")}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Heli Tours In Nepal</h5>
                  </div>
                  <p>
                    Due to wide range of mountains and snow capped hills, Nepal
                    is one of the best places in the world to take a Helicopter
                    Tour.
                  </p>
                  <div className="card-body">
                    <Link
                      to="/heli-tours"
                      className="card-link btn btn-primary"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                {" "}
                <div className="card trekCard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src={require("../../../img/tour/Kathmandu&DhulikhelTour–4Days.jpg")}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tours In Nepal</h5>
                  </div>
                  <p>
                    About the Overland tours. The various regions of Nepal have
                    different settings. Terai is mostly plain and covered with
                    evergreen forests and wild animals. It’s mostly inhabited by
                    the Maithali and Bhojpuris, and the culture and lifestyle
                    tend to remain more or less similar. Hills comprise of
                    uneven landscapes and variety of cultures.
                  </p>
                  <div className="card-body">
                    <Link
                      to="/tours-and-hiking"
                      className="card-link btn btn-primary"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                {" "}
                <div className="card trekCard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src={require("../../../img/hiking/ChandragiriHiking–01Day.jpg")}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hiking In Nepal</h5>
                  </div>
                  <p>
                    Along with trekking, Nepal also provides some great places
                    to Hike for a day or two
                  </p>
                  <div className="card-body">
                    <Link to="/hiking" className="card-link btn btn-primary">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

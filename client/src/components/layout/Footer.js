import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <span id="caraTitle">Caravan Outdoors</span>

              <ul className="list-unstyled">
                <li>
                  <p>
                    <i class="fas fa-map-marker-alt mr-3" /> Dabali Marg,
                    Thamel, Kathmandu
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-envelope mr-3" />{" "}
                    sales@caravanoutdoors.com
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-phone mr-3" /> +977 1 4420840
                  </p>
                </li>
                <li>
                  <span id="socialMedia">Find Us On</span>
                  <br />
                  <div className="socialLinks">
                    <a
                      href="https://www.facebook.com/CaravanOutdoors"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i
                        class="fab fa-facebook"
                        style={{ fontSize: "3rem", color: "#3b5998" }}
                      />
                    </a>

                    <a
                      href="https://twitter.com/caravanoutdoors"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i
                        class="fab fa-twitter-square"
                        style={{ fontSize: "3rem", color: "#1DA1F2" }}
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/caravan-outdoors/"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i
                        class="fab fa-linkedin"
                        style={{ fontSize: "3rem", color: "#0077B5" }}
                      />
                    </a>

                    <a
                      href="https://www.youtube.com/watch?v=vdB0V4ijalQ&list=PLfE0EybRLGz5eGst6GMnLU8dHvVNnQ6TX"
                      target="_blank"
                      rel="nofollow"
                    >
                      <i
                        class="fab fa-youtube"
                        style={{ fontSize: "3rem", color: "#ff0000" }}
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <span id="title">Company</span>
              <ul className="list-unstyled" id="footerUl">
                <li>
                  <Link to="/about" rel="nofollow">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/csr" rel="nofollow">
                    CSR
                  </Link>
                </li>
                <li>
                  <Link to="/faq" rel="nofollow">
                    FAQs
                  </Link>
                </li>
                {/* <li>
                  <Link to="/blogs" rel="nofollow">
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link to="/agent" rel="nofollow">
                    Are You an Agent?
                  </Link>
                </li>
                <li>
                  <Link to="/gears-and-equipment" rel="nofollow">
                    Gears And Equipment
                  </Link>
                </li>
                <li>
                  <span id="socialMedia" rel="nofollow">
                    We Accept
                  </span>
                  <br />
                  <div className="socialLinks">
                    <i
                      class="fab fa-cc-visa"
                      style={{
                        fontSize: "4rem",
                        color: "#000",
                        margin: "0.1rem"
                      }}
                    />

                    <i
                      class="fab fa-cc-mastercard"
                      style={{
                        color: "#000",
                        fontSize: "4rem",
                        margin: "0.1rem"
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              {" "}
              <span id="title">Destinations</span>
              <ul className="list-unstyled" id="footerUl">
                <li>
                  <Link to="/about-nepal" rel="nofollow">
                    Nepal
                  </Link>
                </li>
                <li>
                  <Link to="/about-bhutan" rel="nofollow">
                    Bhutan
                  </Link>
                </li>
                <li>
                  <Link to="/about-tibet" rel="nofollow">
                    Tibet
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              {" "}
              <span id="title">Services</span>
              <ul className="list-unstyled" id="footerUl">
                <li>
                  <Link to="/trekking-in-nepal" rel="nofollow">
                    Trekking
                  </Link>
                </li>
                <li>
                  <Link to="/climbing" rel="nofollow">
                    Climbing
                  </Link>
                </li>
                <li>
                  <Link to="/expedition" rel="nofollow">
                    Expedition
                  </Link>
                </li>
                <li>
                  <Link to="/heli-tours" rel="nofollow">
                    Heli Tours
                  </Link>
                </li>
                <li>
                  <Link to="/tours-and-hiking" rel="nofollow">
                    Day Tours
                  </Link>
                </li>
                <li>
                  <Link to="/hiking" rel="nofollow">
                    Hiking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              {" "}
              <span id="title">Information</span>
              <ul className="list-unstyled" id="footerUl">
                <li>
                  <Link to="/essential-information" rel="nofollow">
                    Essential Information
                  </Link>
                </li>
                <li>
                  <Link to="/lgbt" rel="nofollow">
                    LGBT Travel
                  </Link>
                </li>
                <li>
                  <Link to="/trip-difficulty" rel="nofollow">
                    Trip Difficulty
                  </Link>
                </li>
                <li>
                  <Link to="/climate-and-season" rel="nofollow">
                    Climate & Seasons
                  </Link>
                </li>
                <li>
                  <Link to="/peaks" rel="nofollow">
                    Trekking Peaks in Nepals
                  </Link>
                </li>
                <li>
                  <Link to="/climbing-terms" rel="nofollow">
                    Climbing Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-condition" rel="nofollow">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

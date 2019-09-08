import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Moment from "react-moment";
import DepartureDates from "./DepartureDates";

export default class Trek extends Component {
  constructor() {
    super();
    this.state = {
      startDate: ""
    };
  }

  handleChange(e) {
    console.log(e.value);
  }

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
  on2ndClick() {
    const button = document.getElementById("readMore2");
    const extra = button.previousSibling;
    const span = extra.previousSibling;

    if (extra.style.display == "inline") {
      extra.style.display = "none";
      span.style.display = "inline";
      button.innerHTML = "See More";
    } else {
      extra.style.display = "inline";
      span.style.display = "none";
      button.innerHTML = "See Less";
    }
  }
  render() {
    return (
      <section className="trek">
        <Helmet>
          <title>Everest Trek in Nepal</title>
        </Helmet>
        <div className="container">
          <h1 className="trekh1">Everest Trek In Nepal</h1>
          <div className="row">
            <div className="col-lg-8">
              <img
                src="https://www.rei.com/adventures/assets/adventures/images/trip/gallery/asia/ebc_07"
                alt="Everest Trekking in Nepal"
                id="trekImage"
              />
              <div className="internalNav" style={{ color: "white" }}>
                <a className="btn btn-primary" href="#trekImage">
                  Overview
                </a>
                <a className="btn btn-warning" href="#lastPara">
                  Itinerary
                </a>
                <a className="btn btn-success" href="#lata">
                  What's Included
                </a>
                <a className="btn btn-secondary" href="#dDates">
                  Departure Dates
                </a>
              </div>
              <div className="trekOverview" id="trekOverview">
                <h2 style={{ color: "#007bff" }}>Overview</h2>
                <div className="trekPara">
                  <p>
                    Voted one of the best long treks in the world, Annapurna
                    Circuit caters tourists with desire for adventure,
                    wilderness and sightseeing. The trail makes a complete round
                    of Annapurna mountain range; therefore, you can get the
                    iconic view of the Annapurna from almost every corner. You
                    must pass through four different regions during the trek;
                    Lamjung, Manang, Mustang and Myagdi. Lamjung and Myagdi of
                    the lower elevations are both predominantly Hindu region,
                    whereas, Manang and Mustang are Buddhist regions.
                  </p>

                  <p>
                    The total length of the Annapurna circuit route is almost
                    230 km (145 mi). The trek begins at Besishahar, a small
                    town. The trail slowly ascends and will reach up to 5,416
                    meters at Thorong La Pass, the highest elevation on the
                    trek. From here, the trail descends almost the entire way.
                    Muktinath and Marpha are two major stops. You can choose to
                    visit the holy Muktinath temple and enjoy some delicious
                    local Marpha wine (Apple wine) en route.
                  </p>

                  <p id="lastPara">
                    Along with Annapurna base camp, it attracts over 120,000
                    trekkers in a year. Annapurna Conservation Area (ACAP) is
                    the highlight of the trek which offers a rare glimpse of
                    mid-western flora and fauna.
                  </p>
                </div>
                <div className="trekIti" id="trekIti">
                  <h2 style={{ color: "#ffc107", marginBottom: "1.5rem" }}>
                    Itinerary
                  </h2>
                  <div className="itinerary">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <a
                              role="button"
                              href="#collapse1"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <span>
                                {" "}
                                <strong>Day 1</strong> - Arrive in Kathmandu /
                                Transfer to Hotel
                              </span>
                            </a>
                          </h5>
                        </div>

                        <div id="collapse1" className="collapse show">
                          <div className="card-body">
                            At your arrival in Kathmandu, a member of our team
                            will greet and receive you at the airport. You will
                            be transferred to your hotel. Our representative
                            will brief on your arrival about the trip. The rest
                            of the day is yours. The evening we be spent
                            enjoying complimentary local dinner one of the
                            finest local diner with cultural program
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse2"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 2</strong> - Drive from Kathmandu to
                              Pokhara
                            </div>
                          </h5>
                        </div>

                        <div id="collapse2" className="collapse">
                          <div className="card-body">
                            After the early morning breakfast, you will drove
                            from Kathmandu to Pokhara in a tourist coach bus.
                            The 6-7 hours ride will be provided with mineral
                            water and enough loo breaks. The noon at the
                            lakeside city of Pokhara will invite you with a
                            great ambiance. You can take a short walk around the
                            city and enjoy your lunch. Pokhara is the most
                            popular getaway in Nepal, therefore, you may find
                            many like-minded tourists strolling around the
                            city..
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse3"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 3</strong> - Drive to Nayapul/Trek to
                              Ghandruk
                            </div>
                          </h5>
                        </div>

                        <div id="collapse3" className="collapse">
                          <div className="card-body">
                            A short early morning drive through Banglung Highway
                            will lead you to Nayapul. From here, your trek will
                            begin. The first day leg will include a moderate
                            hike up to the culturally rich village of Ghandruk.
                            Ghandruk is one of the most beautiful villages in
                            the region. The ethnic Gurung culture and lifestyle
                            will surely bring a smile to you face. You can rest
                            here the entire day, contemplate on your first day
                            trek and enjoy your meal along with relishing the
                            local lifestyle and scenery.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse4"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 4</strong> - Trek to Chhomrong
                            </div>
                          </h5>
                        </div>

                        <div id="collapse4" className="collapse">
                          <div className="card-body">
                            After a hefty breakfast, you climb start your trek
                            and advance up to the beautiful village of
                            Chhomrong. The trail encounters some steep descends
                            and ascends, therefore, it might prove challenging
                            for a second day trek. It’s a very lively part of
                            the region. You can interact with the trekkers
                            visiting the region. The local houses are a sight to
                            see with their intricate designs and texture. The
                            village of Chhomrong isn’t lesser amazing. It is
                            considered the best village in the entire region.
                            You can find many modern amenities in here. You can
                            rest the remaining day strolling around the village
                            and enjoying your local meal.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse5"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 5</strong> - Trek to Dovan
                            </div>
                          </h5>
                        </div>

                        <div id="collapse5" className="collapse">
                          <div className="card-body">
                            The Trek begins with the downhill hike along the
                            stony staircases to Chhomrong Khola and cross the
                            suspension bridge. It will be followed by continuous
                            ascend. The first stop will be made at Sinuwa 2,324
                            m. The trail beyond it passes through lush
                            vegetation and bamboo forest. A brief 30 minutes
                            downhill hike will bring you to Bamboo village 2,340
                            m. The end of the day will be made at Dovan.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse6"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 6</strong> - Trek to Machhapuchhre
                              Base Camp
                            </div>
                          </h5>
                        </div>

                        <div id="collapse6" className="collapse">
                          <div className="card-body">
                            The early morning hike amounting for two and half
                            hours along the bank of the Modi Khola will lead you
                            to Himalaya village. You are likely to encounter
                            continuous uphill ascend. From here, the weather may
                            start changing. Fog is common in this region;
                            therefore, the trail may seem blur. Hinku Cave is
                            the local landmark; a hard-ice cave formed by the
                            falling ice water stream. The trail will pass
                            through Deurli village and to the Machhapuchhre Base
                            Camp. The lodges here are located right below the
                            Machhapuchhre peak, therefore, you will likely get
                            to see a serene mountainous views.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse7"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 7</strong> - Trek to Annapurna Base
                              Camp & Back to Dovan
                            </div>
                          </h5>
                        </div>

                        <div id="collapse7" className="collapse">
                          <div className="card-body">
                            Day 7 is the greatest day of the trek, as you ascend
                            to the Annapurna Base Camp. You may wake up at the
                            earliest hour if you do not wish to miss seeing the
                            sunlight touch the Annapurna I. An early morning
                            hike will facilitate a plenty of time for yourself
                            and the nature. The base camp in the early morning
                            is less occupied, therefore, you have more time to
                            explore around. After a short hike, you can have
                            your breakfast and start preparing to descend. You
                            will descend the same way you came up, while meeting
                            many trekkers on the way. Dovan is the final stop
                            for the day.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse8"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 8</strong> - Trek to Jhinu Dada
                            </div>
                          </h5>
                        </div>

                        <div id="collapse8" className="collapse">
                          <div className="card-body">
                            After the breakfast, you’ll start descending towards
                            Jhinu Dada. It takes around6 hours of hike. If you
                            wish, you can rest and enjoy the hot water spring at
                            Jhinu Danda, and let the exhaustion of the trek
                            sweep away.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse9"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="true"
                              aria-controls="collapse9"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 9</strong> - Trek to Nayapul & Back to
                              Pokhara
                            </div>
                          </h5>
                        </div>

                        <div id="collapse9" className="collapse">
                          <div className="card-body">
                            The final leg of the trek will take you back to Naya
                            Pul and a short ride will take you to Pokhara, where
                            you can relax and sunbath beside the Phewa Lake.
                            Most tourists choose to boat or cycle around the
                            small city
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse10"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 10</strong> - Drive from Pokhara to
                              Kathmandu
                            </div>
                          </h5>
                        </div>
                        <div id="lata" />
                        <div id="collapse10" className="collapse">
                          <div className="card-body">
                            A 6-7 hours ride will take you back to Kathmandu.
                            Our representative will transfer you in a Hotel,
                            followed by a humongous farewell dinner.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header">
                          <h5 className="mb-0">
                            <div
                              href="#collapse11"
                              data-toggle="collapse"
                              data-parent="#accordion"
                            >
                              <i className="fas fa-arrow-circle-down" />{" "}
                              <strong>Day 11</strong> - Depart from Kathmandu
                            </div>
                          </h5>
                        </div>

                        <div id="collapse11" className="collapse">
                          <div className="card-body">
                            You will be transferred to the Airport to catch your
                            flight back home.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="whatIncluded"
                  style={{ fontSize: "1rem" }}
                  id="whatIncluded"
                >
                  <h2 style={{ color: "#28a745" }}>The Cost Includes</h2>

                  <div className="includedUl">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-star" /> Arrival airport pick and
                        drop.
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-star" /> 2 complimentary dinners at
                        Kathmandu.
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-star" /> 2 Nights at ★★★ hotel in
                        Kathmandu.
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-star" /> 2 Nights at ★★★ hotel in
                        Pokhara.
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-star" /> Standard Tea-house/ Lodge
                        during the trek.
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-star" /> TIMS/ACAP Permits & Other
                        related permits trough out the trip.
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-star" /> Round Trip Flight to &
                        from Pokhara or Private Jeep Transportation to and from
                        Pokhara & near to Trek start Point
                      </li>
                      <div id="dDates" />
                      <li className="list-group-item">
                        <i className="fas fa-star" /> Trek guide & Porter
                        service( 1:02 basis) , their salary, foods,
                        accommodation and insurance( Porter will carry about 20
                        Kg)
                      </li>

                      <li className="list-group-item">
                        <i className="fas fa-star" /> Trip Completion
                        certificate
                      </li>
                    </ul>
                  </div>
                </div>
                <DepartureDates />
                {/* 
                <div className="departureDate" id="departureDate">
                  <h2 style={{ color: "#868e96" }}>Departure Dates</h2>
                  <div className="datesTable">
                    <table className="departTable">
                      <tr>
                        <th>Package</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Book</th>
                      </tr>

                      <tr>
                        <td>
                          <i className="fas fa-clock" /> ABC Trek (Customized) -
                          6 Days
                        </td>
                        <td>$ 695</td>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-clock" /> ABC Trek (Customized) -
                          6 Days
                        </td>
                        <td>$ 695</td>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-clock" /> ABC Trek (Customized) -
                          6 Days
                        </td>
                        <td>$ 695</td>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-clock" /> ABC Trek (Customized) -
                          6 Days
                        </td>
                        <td>$ 695</td>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-clock" /> ABC Trek (Customized) -
                          6 Days
                        </td>
                        <td>$ 695</td>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fas fa-clock" /> ABC Trek (Customized) -
                          6 Days
                        </td>
                        <td>$ 695</td>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div className="departureDateM" id="departureDateM">
                  <h3 style={{ color: "#868e96" }}>
                    Departure Dates for ABC Trek (Customized) - 6 Days
                  </h3>

                  <div className="datesTableMobile">
                    <table className="departTableM">
                      <tr>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Book</th>
                      </tr>

                      <tr>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>$695</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>$695</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>$695</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>$695</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>$695</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Feb 08, 19 - Feb 13, 19</td>
                        <td>$695</td>
                        <td>
                          <button className="btn btn-primary">Book Now</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div> */}

                <div className="additional">
                  <h2>Additional information</h2>
                  <p>
                    The above information is a guide and standard template of
                    what we provide. Our trips
                    <strong> Can Be Customized</strong> at your request to
                    accommodate your specific requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card" style={{ width: "23rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong style={{ color: "#007bff", fontSize: "2rem" }}>
                      Promotional Offer
                    </strong>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Annapurna Base Camp (Customized) Trek – 6 Days
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Get this trip at:
                  </h6>
                  <p
                    className="card-subtitle text-muted"
                    style={{ fontSize: "2rem" }}
                  >
                    <strong>$ 695 USD</strong>
                  </p>
                  <button className="btn btn-primary promoButton">
                    Book Now
                  </button>
                </div>
              </div>
              <table className="trekTable">
                <h3 style={{ color: "black", marginBottom: "1rem" }}>
                  <b>Details</b>
                </h3>

                <tr>
                  <td>
                    <i className="fas fa-clock" /> Trip Duration
                  </td>
                  <td>3 Days</td>
                </tr>

                <tr>
                  <td>
                    <i className="fas fa-mountain" /> Max Altitude
                  </td>
                  <td>2,551 meters (8,370 ft)</td>
                </tr>

                <tr>
                  <td>
                    <i className="fas fa-utensils" /> Meals
                  </td>
                  <td>Breakfast, Lunch and Snacks</td>
                </tr>

                <tr>
                  <td>
                    <i className="fas fa-bus-alt" /> Vechicles
                  </td>
                  <td>Private And Tourist Bus</td>
                </tr>

                <tr>
                  <td>
                    <i className="fas fa-calendar-alt" /> Best Months
                  </td>
                  <td>
                    February, March, April, May, June, September, October,
                    November
                  </td>
                </tr>

                <tr>
                  <td>
                    <i className="fas fa-fist-raised" /> Difficulty
                  </td>
                  <td>Easy</td>
                </tr>

                <tr>
                  <td>
                    <i className="fas fa-users" /> No of Travelers
                  </td>
                  <td>1-10</td>
                </tr>
              </table>

              <div className="card extraInfo">
                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fas fa-check-circle" /> Guaranteed Departure
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check-circle" /> Bigger Group, Bigger
                    Discount
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check-circle" /> Customizable Trips
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check-circle" /> All Inclusive/GAP Trip
                    Available
                  </li>
                </ul>
              </div>

              <div className="customizeForm">
                <h4>
                  <strong>Let Us Help You Customize Your Trip</strong>
                </h4>

                <form className="formForCustomize">
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfDays"
                      aria-describedby="numberOfDays"
                      placeholder="How many days do you have? *"
                    />
                  </div>
                  <div className="form-group">
                    <label>When do you wish to visit *</label>
                    <input className="form-control" type="date" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="budget"
                      placeholder="Your Budget Range(In USD)*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Customize My Trip
                  </button>{" "}
                  <br />
                  <small style={{ paddingTop: "1px" }}>
                    Dont Worry We Won't Spam Your Inbox{" "}
                  </small>
                </form>
              </div>

              <div className="reviews">
                <h3>
                  <strong>Travellers Reviews</strong>
                </h3>
                <div className="traveller">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/01/2e/70/99/avatar025.jpg"
                    alt=""
                    className="reviewImg"
                  />{" "}
                  <strong>Connie</strong>
                  <span style={{ color: "#f2b01e" }}>
                    <i className="fas fa-star" /> <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  <br />
                  <p>
                    <strong>
                      {" "}
                      My lucky day when I discovered Caravan Outdoors
                    </strong>
                    <br />
                    For 10 years a trip to Nepal had been on the top of my
                    bucket list and finally it was so far! I spent a long time
                    researching and I am sure my lucky star was shining brightly
                    when I discovered Caravan Ourdoors with owner Gautam Wagle.
                    From the moment I contacted him the communication has been
                    fantastic and he <span id="spanSee">...</span>{" "}
                    <span
                      className="extra"
                      style={{ display: "none" }}
                      id="extra"
                    >
                      went out of his way to make our tour as interesting as
                      could be. We have made many changes along the way but that
                      never faced Gautam and with a smile he always found a
                      solution and his helpfulness and flexibility was out of
                      this world. With guide Nava and driver Rammani we had the
                      best time ever. If you are considering a trip to Nepal,
                      don’t look any further because Caravan Outdoors makes it
                      the BEST!!!
                    </span>
                    <button
                      onClick={this.onClick}
                      id="readMore"
                      className="btn btn-secondary"
                    >
                      See More
                    </button>
                  </p>
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                    className="btn btn-outline-primary"
                    target="_blank"
                  >
                    Trip Advisor <i className="fab fa-tripadvisor" />
                  </a>
                </div>

                <div className="traveller">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-l/01/8f/82/04/travelingsun.jpg"
                    alt=""
                    className="reviewImg"
                  />{" "}
                  <strong>Traveling_sun</strong>
                  <span style={{ color: "#f2b01e" }}>
                    <i className="fas fa-star" /> <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  <br />
                  <p>
                    <strong>
                      {" "}
                      Outstanding service and very accommodating to our requests
                    </strong>
                    <br />
                    We recently returned from a wonderful trip to Nepal which we
                    planned with the help of Gautam Wagle of Caravan Outdoors.
                    We had specific sights and cities we wanted to visit and he
                    was extremely helpful in making all of our travel
                    arrangements. When our plans changed due to weather problems
                    for the second part of our trip to India,
                    <span id="spanSee2">...</span>{" "}
                    <span
                      className="extra"
                      style={{ display: "none" }}
                      id="extra2"
                    >
                      he hung in there with us as we extended our trip in Nepal
                      and once again was supportive, helpful and efficient. Our
                      trip included Katmandu, Bandipur, Pokhara and Chitwan. We
                      were more than happy with all of our hotels, both with the
                      accommodations and their locations which were central to
                      sights and good dining. Gautam provided us with an air
                      conditioned car and driver. Our driver Ram was excellent.
                      Not only did he negotiate the crazy traffic and road
                      conditions with ease, but also he was never late, never
                      lost and always cheerful and protective. We consider
                      ourselves very lucky to have put our trust in Caravan.
                    </span>
                    <button
                      onClick={this.onClick}
                      id="readMore2"
                      className="btn btn-secondary"
                    >
                      See More
                    </button>
                  </p>
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                    className="btn btn-outline-primary"
                    target="_blank"
                  >
                    Trip Advisor <i className="fab fa-tripadvisor" />
                  </a>
                </div>

                <div className="traveller">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-l/02/fe/99/c8/facebook-avatar.jpg"
                    alt=""
                    className="reviewImg"
                  />{" "}
                  <strong>Isabelw</strong>
                  <span style={{ color: "#f2b01e" }}>
                    <i className="fas fa-star" /> <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  <br />
                  <p>
                    <strong> Amazing EBC trek</strong>
                    <br />
                    Just completed an amazing 11 day Everest Base Camp trek with
                    Caravan. From my first contact with owner Gautam Wagle I was
                    incredibly impressed with their service. He replied to each
                    of my messages diligently and in detail, putting my mind at
                    ease about any concerns I had leading up to my trek. I met
                    Gautam and my guide Jeewon at a hotel in Kathmandu
                    <span id="spanSee2">...</span>{" "}
                    <span
                      className="extra"
                      style={{ display: "none" }}
                      id="extra2"
                    >
                      the day before flying to Lukla. There’s no one I would
                      rather have had as my guide than Jeewon - from the
                      beginning he always attentive and couldn’t do enough for
                      me. By the end of the trek we were good friends and I’m
                      extremely glad I got to share my base camp experience with
                      him. Highly recommend Caravan for any of their treks or
                      other trips in Nepal or elsewhere!
                    </span>
                    <button
                      onClick={this.onClick}
                      id="readMore2"
                      className="btn btn-secondary"
                    >
                      See More
                    </button>
                  </p>
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                    className="btn btn-outline-primary"
                    target="_blank"
                  >
                    Trip Advisor <i className="fab fa-tripadvisor" />
                  </a>
                </div>

                <div className="traveller">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/01/2e/70/9f/avatar070.jpg"
                    alt=""
                    className="reviewImg"
                  />{" "}
                  <strong>Isabelw</strong>
                  <span style={{ color: "#f2b01e" }}>
                    <i className="fas fa-star" /> <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  <br />
                  <p>
                    <strong> Nepal and Bhutan with Caravan Out Doors</strong>
                    <br />I would like to thank Gautam and Caravan Outdoors for
                    the most amazing holiday. I travelled with two other people
                    and can honestly say we all feel that this was a holiday of
                    a life time.We traveled to many regions of Nepal with an
                    amazing guide Nava and the best driver in Nepal Ram.
                    <span id="spanSee2">...</span>{" "}
                    <span
                      className="extra"
                      style={{ display: "none" }}
                      id="extra2"
                    >
                      We also went to Tibet and Bhutan. We were unable to do the
                      trek to Poon Hill as one of are group suffered altitude
                      sickness at Everest base camp. Gautam generously
                      rearranged our tour, always with a smile and a willingness
                      to make sure we had the best holiday . Thank you so much
                      to Caravan Out Doors and especially Guatam,Nava and Ram.
                      Friends for ever
                    </span>
                    <button
                      onClick={this.onClick}
                      id="readMore2"
                      className="btn btn-secondary"
                    >
                      See More
                    </button>
                  </p>
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g293890-d10758852-Reviews-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                    className="btn btn-outline-primary"
                    target="_blank"
                  >
                    Trip Advisor <i className="fab fa-tripadvisor" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

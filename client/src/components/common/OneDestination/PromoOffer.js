import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { Redirect, withRouter } from "react-router-dom";
import { postPromoClients } from "../../../actions/clientActions";
import axios from "axios";
import Moment from "react-moment";
import $ from "jquery";
import { sendPromoData } from "../../../actions/promoAction";

class PromoOffer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      departure: "",
      country: "",
      destination: "",
      price: "",
      passportNumber: "",
      currentCity: "",
      ip: "",
      redirect: false
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    console.log(this.props.promoOffers);
    let ipLocation;
    const promise1 = new Promise((resolve, reject) => {
      $.getJSON("https://geoip-db.com/json/").done(function(location) {
        ipLocation =
          location.country_name +
          " latitude: " +
          location.latitude +
          " longitude: " +
          location.longitude +
          " " +
          location.IPv4;

        resolve(ipLocation);
      });
    });
    promise1.then(res => this.setState({ ip: res }));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClick = e => {
    this.props.history.push("/promo-form");
    this.props.sendPromoData(this.props.promoOffers);
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  onSubmit = async e => {
    const price = parseInt(
      this.props.promoOffers[1]
        .replace("$", "")
        .replace("USD", "")
        .replace(",", "")
    );
    let todaysPrice = price;

    const date = new Date();
    const todayDate = date.getDate();

    if (todayDate % 3 == 0) {
      todaysPrice = todaysPrice - 10;
    }
    e.preventDefault();
    const newPromoClient = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      departure: this.state.departure,
      country: this.state.country,
      passportNumber: this.state.passportNumber,
      currentCity: this.state.currentCity,
      destination: this.props.promoOffers[0],
      ipLocation: this.state.ip,
      price: todaysPrice
    };

    this.props.postPromoClients(newPromoClient);

    await this.setState({
      name: "",
      email: "",
      phone: "",
      departure: "",
      country: "",
      redirect: true
    });
    window.location.reload();
  };
  render() {
    const price = parseInt(
      this.props.promoOffers[1]
        .replace("$", "")
        .replace("USD", "")
        .replace(",", "")
    );

    let todaysPrice = price;
    let todayPriceContent = (
      <p
        className="card-subtitle text-muted"
        style={{ fontSize: "2rem", color: "#000", marginBottom: "1rem" }}
      >
        <strong style={{ color: "#000" }}>${todaysPrice}USD</strong>
      </p>
    );

    // const date = new Date();
    // const todayDate = date.getDate();

    // if (todayDate % 3 == 0) {
    //   todaysPrice = todaysPrice - 10;

    //   todayPriceContent = (
    //     <p className="card-subtitle text-muted" style={{ fontSize: "2rem" }}>
    //       <h5 className="card-subtitle mb-2">
    //         <strong>
    //           {" "}
    //           Promotional Offer For{" "}
    //           <Moment format="YYYY/MM/DD">{Date.now()}</Moment>
    //         </strong>
    //       </h5>

    //       <strong>${todaysPrice}USD</strong>
    //       <h5 className="card-subtitle mb-2 text-muted">
    //         Original Price: ${price}USD
    //       </h5>
    //     </p>
    //   );
    // }

    let soloTrip = (
      <div className="solo">
        <h5 style={{ color: "#000" }}>
          <i class="fas fa-check-circle" style={{ marginRight: "0.5rem" }} />
          Solo/Private Trip Available
        </h5>
        <h5 style={{ color: "#000" }}>
          <i class="fas fa-check-circle" style={{ marginRight: "0.5rem" }} />
          Guarantee To Run After Booking
        </h5>
      </div>
    );
    console.log(this.props.folderName);
    if (this.props.folderName == "climbs") {
      soloTrip = "";
    }

    if (this.props.folderName == "expedition") {
      soloTrip = "";
    }
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return (
        <section className="promoOffer">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <strong style={{ color: "#007bff", fontSize: "2rem" }}>
                  Complete Cost
                </strong>
                <img
                  src={require("../../../img/best-price.jpg")}
                  alt=""
                  style={{ height: "10rem", marginLeft: "1rem" }}
                />
              </h5>

              {todayPriceContent}
              {/* <h5  style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Best Price
              </h5>

              <h5  style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Affordable Cost
              </h5>
*/}
              {soloTrip}

              <h5 style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Book Now and Pay Later
              </h5>

              <h5 style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Fully Customizable
              </h5>
              <div className="row" id="extraPromo">
                <div className="col-4">
                  <button
                    className="btn btn-secondary promoButton"
                    onClick={this.onClick}
                  >
                    Book Now
                  </button>
                </div>
                <div className="col-8" style={{ marginTop: "0.3rem" }}>
                  <a
                    className="btn btn-secondary"
                    href="#custoScroll"
                    id="promoCustomize"
                  >
                    Customize The Trek
                  </a>
                </div>
              </div>

              <a className="btn btn-primary" href="#itiCusto" id="promoInquiry">
                Enquire Us
              </a>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="promoOffer">
          <div className="card" style={{ width: "23rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <strong style={{ color: "#007bff", fontSize: "1.3rem" }}>
                  Complete Cost
                </strong>
                <img
                  src={require("../../../img/best-price.jpg")}
                  alt=""
                  style={{ height: "7rem", marginLeft: "1rem" }}
                />
              </h5>

              {todayPriceContent}
              {/* <h5  style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Best Price
              </h5>

              <h5  style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Affordable Cost
              </h5>
 */}
              {soloTrip}

              <h5 style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Book Now and Pay Later
              </h5>

              <h5 style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                Fully Customizable
              </h5>

              <h5 style={{ color: "#000" }}>
                <i
                  class="fas fa-check-circle"
                  style={{ marginRight: "0.5rem" }}
                />
                25+ Years of Expertise
              </h5>
              <div className="row" id="extraPromo">
                <div className="col-sm-5">
                  <button
                    className="btn btn-secondary promoButton"
                    data-toggle="modal"
                    data-target="#contactModalC"
                    id="promoButton"
                  >
                    Book Now
                  </button>
                </div>
                <div className="col-sm-7">
                  <a
                    className="btn btn-secondary"
                    id="promoCustomize"
                    href="#custoScroll"
                  >
                    Customize The Trek
                  </a>
                </div>
              </div>

              <a
                className="btn btn-primary"
                id="promoInquiry"
                href="#lastElement"
              >
                Enquire Us
              </a>
            </div>
          </div>

          <div class="modal fade text-dark" id="contactModalC">
            <div class="modal-dialog">
              <div class="modal-content" style={{ border: "1px solid #000" }}>
                <div class="modal-header">
                  <img
                    src={require(`../../layout/caravanlogo.png`)}
                    alt="Carvan Outdoors"
                    id="bookNowImage"
                  />
                  <button class="close" data-dismiss="modal">
                    <span>&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Passport Number"
                          id="passportNumber"
                          name="passportNumber"
                          value={this.state.passportNumber}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Current City"
                          id="currentCity"
                          name="currentCity"
                          value={this.state.currentCity}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="No of People"
                        id="departure"
                        name="departure"
                        value={this.state.departure}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <CountryDropdown
                        value={this.state.country}
                        onChange={val => this.selectCountry(val)}
                        id="countryDrop"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark"
                      id="bookNowButton"
                    >
                      Book My Trip
                    </button>{" "}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    //   } else {
    //     return (
    //       <section className="promoOffer">
    //         <div className="card" style={{ width: "28rem" }}>
    //           <div className="card-body">
    //             <h3 className="card-title">
    //               <strong style={{ color: "#007bff", fontSize: "2rem" }}>
    //                 Complete Cost
    //               </strong>
    //             </h3>

    //             <h2 className="card-subtitle mb-2 text-muted">
    //               Get this trip at:
    //             </h2>
    //             {todayPriceContent}
    //             <button
    //               className="btn btn-primary promoButton"
    //               data-toggle="modal"
    //               data-target="#contactModalC"
    //             >
    //               Book Now
    //             </button>
    //           </div>
    //         </div>

    //         <div class="modal fade text-dark" id="contactModalC">
    //           <div class="modal-dialog">
    //             <div class="modal-content">
    //               <div class="modal-header">
    //                 <h5 class="modal-title">Book Now</h5>
    //                 <button class="close" data-dismiss="modal">
    //                   <span>&times;</span>
    //                 </button>
    //               </div>
    //               <div class="modal-body">
    //                 <form onSubmit={this.onSubmit}>
    //                   <div className="form-group">
    //                     <input
    //                       type="text"
    //                       className="form-control"
    //                       id="name"
    //                       placeholder="Full Name"
    //                       name="name"
    //                       value={this.state.name}
    //                       onChange={this.onChange}
    //                       required
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <input
    //                       type="email"
    //                       className="form-control"
    //                       id="email"
    //                       placeholder="Email"
    //                       name="email"
    //                       value={this.state.email}
    //                       onChange={this.onChange}
    //                       required
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <input
    //                       type="number"
    //                       className="form-control"
    //                       placeholder="Phone Number"
    //                       id="phone"
    //                       name="phone"
    //                       value={this.state.phone}
    //                       onChange={this.onChange}
    //                       required
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <input
    //                       type="number"
    //                       className="form-control"
    //                       placeholder="No of People"
    //                       id="departure"
    //                       name="departure"
    //                       value={this.state.departure}
    //                       onChange={this.onChange}
    //                       required
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <CountryDropdown
    //                       value={this.state.country}
    //                       onChange={val => this.selectCountry(val)}
    //                       id="countryDrop"
    //                     />
    //                   </div>
    //                   <button type="submit" className="btn btn-primary">
    //                     Book My Trip
    //                   </button>{" "}
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     );
    //   }
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    { postPromoClients, sendPromoData }
  )(PromoOffer)
);

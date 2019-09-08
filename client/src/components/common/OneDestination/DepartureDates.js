import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import { postPromoClients } from "../../../actions/clientActions";
import { Redirect, withRouter } from "react-router-dom";
import $ from "jquery";
import { sendPromoData } from "../../../actions/promoAction";

class DepartureDates extends Component {
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
      pacDate: "",
      passportNumber: "",
      currentCity: "",
      ip: "",
      redirect: false
    };
  }
  componentDidMount() {
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
  selectCountry(val) {
    this.setState({ country: val });
  }
  // onSubmit = e => {
  //   console.log(
  //     e.target.name,
  //     this.props.promoOffers[0],
  //     this.props.promoOffers[1]
  //   );
  // };
  onClick = e => {
    this.setState({ pacDate: e.target.name });
    console.log(e.target.name, "name");

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      console.log("clicked");
      this.props.history.push("/promo-form");
      this.props.sendPromoData([e.target.name, this.props.promoOffers, "0"]);
    }
  };

  // onButtonClick = e => {
  //   console.log("clicked");
  //   this.props.history.push("/promo-form");
  //   this.props.sendPromoData(this.props.promoOffers, this.props.promoOffers);
  // };

  onSubmit = async e => {
    e.preventDefault();

    const newPromoClient = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      departure: this.state.departure,
      country: this.state.country,
      passportNumber: this.state.passportNumber,
      currentCity: this.state.currentCity,
      ipLocation: this.state.ip,
      destination: this.props.promoOffers[0],
      price: this.props.promoOffers[1],
      packageDate: this.state.pacDate
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
  createPackage() {
    let days = this.props.promoOffers[0].split(" ");
    let eachMonthDates = [];

    days = parseInt(
      days[days.length - 2].split(" ").filter(function(el) {
        return el != "";
      })[0]
    );

    if (!days) {
      days = 0;
    }

    console.log(days);
    const allMonths = [
      [1, 3, "Jan", "Feb", 31, 28, 7],
      [4, 4, "Feb", "Mar", 28, 31, 7],
      [2, 2, "Mar", "Apr", 31, 30, 6],
      [1, 3, "Apr", "May", 30, 31, 8],
      [4, 3, "May", "Jun", 31, 30, 6],
      [3, 4, "Jun", "Jul", 30, 31, 7],
      [3, 4, "Jul", "Aug", 31, 30, 7],
      [2, 4, "Aug", "Sep", 30, 31, 8],
      [1, 2, "Sep", "Oct", 31, 31, 6],
      [2, 2, "Oct", "Nov", 31, 30, 7],
      [3, 2, "Nov", "Dec", 30, 31, 6],
      [2, 3, "Dec", "Jan", 31, 31, 8]
    ];

    for (let i = 0; i < 12; i++) {
      let startDate = allMonths[i][0];
      let differenceInStartDate = allMonths[i][1];
      let currentMonth = allMonths[i][2];
      let nextMonth = allMonths[i][3];

      const daysInMonth = allMonths[i][4];
      const daysInNextMonth = allMonths[i][5];
      const numOfDates = allMonths[i][6];

      const dates = [];

      if (days > 15) {
        differenceInStartDate = 1;
      } else if (days > 10) {
        differenceInStartDate = 2;
      } else if (days < 5) {
        numOfDates = 5;
      }

      let toMonth = currentMonth;
      let a = 0;
      for (let i = 0; i < numOfDates; i++) {
        let nextDate = startDate + a;
        let finalDate = nextDate + days;
        if (finalDate > daysInMonth) {
          toMonth = nextMonth;
          finalDate = finalDate - daysInMonth;
        }

        let dateRange =
          currentMonth +
          " " +
          nextDate.toString() +
          " to " +
          toMonth +
          " " +
          finalDate;

        a = a + differenceInStartDate;

        dates.push(dateRange);
      }
      eachMonthDates.push(dates);
    }

    const eachMonthpackage = [];
    for (let i = 0; i < eachMonthDates.length; i++) {
      const trDates = [];

      const bookingStatus = [];
      for (let i = 0; i < eachMonthDates[i].length; i++) {
        let notEmpty = eachMonthDates[i].length / 2;
        let packDays = parseInt(days.toString()[1]);
        let noOfSpotForBooked = 0;
        if (packDays <= notEmpty) {
          noOfSpotForBooked = notEmpty;
        } else {
          noOfSpotForBooked = packDays - notEmpty;
          if (noOfSpotForBooked > notEmpty) {
            noOfSpotForBooked = noOfSpotForBooked - notEmpty;
          }

          if (noOfSpotForBooked < 1) {
            noOfSpotForBooked = 2;
          }
        }
        noOfSpotForBooked = Math.floor(noOfSpotForBooked);
        // I have the number of spots i want not Unbooked. now i need to randomly(sort of) show unbooked in that number throughout the total dates.
        const status = ["Join Group", "Join Group", "Join Group"];
        for (let i = 0; i < eachMonthDates[i].length; i++) {
          bookingStatus.push(status[0]);
        }
        let p = 0;
        let addingNumber = Math.floor(eachMonthDates[i].length / 4);
        if (addingNumber > 2) {
          addingNumber = 1;
        }
        for (let i = 0; i < bookingStatus.length; i++) {
          let j = noOfSpotForBooked;

          bookingStatus.splice(j, 1, status[1]);
        }
      }
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        for (let j = 0; j < eachMonthDates[i].length; j++) {
          trDates.push(
            <tr>
              <td id={[i][j]}>{eachMonthDates[i][j]}</td>
              <td>{this.props.promoOffers[1]}</td>
              <td className="text-success">{bookingStatus[j]}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={this.onClick}
                  name={eachMonthDates[i][j]}
                  id="dateButton"
                >
                  Book Now
                </button>
              </td>
            </tr>
          );
        }
      } else {
        for (let j = 0; j < eachMonthDates[i].length; j++) {
          trDates.push(
            <tr>
              <td id={[i][j]}>{eachMonthDates[i][j]}</td>
              <td>{this.props.promoOffers[1]}</td>
              <td className="text-success">{bookingStatus[j]}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  data-toggle="modal"
                  data-target="#contactModalD"
                  onClick={this.onClick}
                  name={eachMonthDates[i][j]}
                  id="dateButton"
                >
                  Book Now
                </button>
              </td>
            </tr>
          );
        }
      }

      let display = "none";

      const date = new Date();
      const monthNumber = date.getMonth() + 1;

      const currentMonth = allMonths[monthNumber][2];

      if (eachMonthDates[i][0].split(" ")[0] == currentMonth) {
        display = "block";
      }
      eachMonthpackage.push(
        <div style={{ display }} id={eachMonthDates[i][0].split(" ")[0]}>
          <table className="departTableM">
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th>Action</th>
              <th>Book</th>
            </tr>
            {trDates}
          </table>
        </div>
      );
    }
    return eachMonthpackage;
  }

  monthClicked = e => {
    const monthName = e.target.name;

    document.getElementById(monthName).style.display = "block";
    const child = document.getElementById(monthName);
    console.log("done");

    var siblings = [];
    var sibling = child.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== child) {
        siblings.push(sibling);
        sibling.style.display = "none";
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  };

  // createMonth() {
  //   let days = this.props.dates[0][0].split("-");
  //   let startDate = 5;
  //   let differenceInStartDate = 3;
  //   let currentMonth = "Jan";
  //   let nextMonth = "Feb";
  //   let nextNextMonth = "march";
  //   const daysInMonth = 31;
  //   const daysInNextMonth = 28;
  //   const numOfDates = 7;

  //   const dates = [];

  //   days = parseInt(
  //     days[days.length - 1].split(" ").filter(function(el) {
  //       return el != "";
  //     })[0]
  //   );
  //   console.log(days);
  //   if (days > 15) {
  //     differenceInStartDate = 1;
  //   } else if (days > 10) {
  //     differenceInStartDate = 2;
  //   }

  //   let toMonth = "Jan";
  //   let a = 0;
  //   for (let i = 0; i < numOfDates; i++) {
  //     let nextDate = startDate + a;
  //     let finalDate = nextDate + days;
  //     if (finalDate > daysInMonth) {
  //       toMonth = nextMonth;
  //       finalDate = finalDate - daysInMonth;
  //     }

  //     let dateRange =
  //       currentMonth +
  //       " " +
  //       nextDate.toString() +
  //       " to " +
  //       toMonth +
  //       " " +
  //       finalDate;

  //     a = a + differenceInStartDate;

  //     dates.push(dateRange);
  //   }
  //   let dTrs = [];
  //   for (let i = 0; i < dates.length; i++) {
  //     dTrs.push(
  //       <tr>
  //         <td>{dates[i]}</td>
  //         <td>{this.props.promoOffers[1]}</td>
  //         <td>
  //           <button className="btn btn-secondary">Book Now</button>
  //         </td>
  //       </tr>
  //     );
  //   }
  //   return dTrs;
  // }
  navMonths() {
    const nMonths = [];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    for (let i = 0; i < months.length; i++) {
      nMonths.push(
        <div className="eachMonth">
          {" "}
          <button
            className="btn btn-primary"
            name={months[i]}
            onClick={this.monthClicked}
            id="dateMonth"
          >
            {months[i]}
          </button>{" "}
          <br />
        </div>
      );
    }
    return nMonths;
  }

  navMonthsM() {
    const nMonths = [];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    for (let i = 0; i < months.length; i++) {
      nMonths.push(
        <button
          className="btn btn-primary"
          name={months[i]}
          onClick={this.monthClicked}
          id="dateMonthM"
        >
          {months[i]}
        </button>
      );
    }
    return nMonths;
  }
  render() {
    const redirectToReferrer = this.state.redirect;
    if (redirectToReferrer === true) {
      return <Redirect to="/thank-you" />;
    }
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return (
        <section className="departureDates">
          <h2 style={{ color: "#868e96" }}>Departure Dates</h2>
          {/* {this.createMonth()} */}
          <div className="row" id="datesPackagesMonths">
            <div className="col-sm-2" id="monthList">
              {this.navMonths()}
            </div>
            <div className="col-sm-10" id="dates">
              {this.createPackage()}
            </div>
          </div>
          <div class="modal fade text-dark" id="contactModalD">
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
    } else {
      return (
        <section className="departureDates">
          <h2 style={{ color: "#868e96" }}>Departure Date</h2>
          {/* {this.createMonth()} */}
          <div className="row" id="datesPackagesMonths">
            <div className="col-sm-10" id="monthList">
              {this.navMonthsM()}
            </div>
            <div className="col-sm-2" id="datesM">
              {this.createPackage()}
            </div>
          </div>
          {/* <div class="modal fade text-dark" id="contactModalD">
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
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark"
                      onClick={this.onClick}
                    >
                      Book My Trip
                    </button>{" "}
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      );
    }
  }
}
const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    { postPromoClients, sendPromoData }
  )(DepartureDates)
);

import React, { Component } from "react";
import ReactDom from "react-dom";
import { Helmet } from "react-helmet";

export default class Essential extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="essential">
        <Helmet>
          {" "}
          <title>Essential Information</title>
        </Helmet>
        <div className="container">
          <h1>Essential Information</h1>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <div className="group">
                <div className="card p-3 bg-secondary text-light">
                  <h3>
                    GROUP/SOLO TRIP <i class="fas fa-users" />
                  </h3>
                  <p>
                    For any group trek in Nepal, there must be at least two
                    trekkers and the maximum of ten or more. For a group of
                    lesser than 10, we name it “Small Group.”We will easily
                    organize private trip for the solo travelers as well. If any
                    selected date is demanded by you, we will register the date
                    and open bookings for other to join in the meantime, hence,
                    organizing a group trek.
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="card p-3 bg-primary text-light">
                  <h3>
                    GUIDES, TRIP AND SAFETY <i class="fas fa-hard-hat" />
                  </h3>
                  <p>
                    It is very essential that you are accompanied with an
                    experienced and qualified leader for the safety and success
                    of your trip. We employ the local & experienced trek guides
                    in Nepal for the same, who are trained and licensed from the
                    Government of Nepal and certified by TAAN & Nepal
                    Mountaineering Association.
                  </p>
                  <p>
                    {" "}
                    Each trip employs a minimum of one trip leader. Such
                    arrangement ensures if any of our guide/assistant falls ill
                    or if any trekker falls ill and needs to get back, they can
                    do so without interrupting the trip.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-3 bg-secondary text-light">
                  <h3>
                    MEALS & ACCOMMODATIONS <i class="fas fa-utensils" />
                  </h3>
                  <p>
                    Each trip offers ★★★ hotel in Kathmandu and standard
                    lodges/tea-houses en trail. The Hotels in Kathmandu are
                    attached with Bathroom, A/C, 24 hours hot/cold shower, and
                    the tea-houses are equipped with minimal modern amenities,
                    clean and comfortable rooms.
                  </p>
                  <p>
                    A breakfast will be offered while your stay in Kathmandu,
                    along with complimentary dinners before and after the trek.
                    The trek, however, offers full board meal services and
                    includes Breakfast, Lunch & Dinner; along with Tea- Coffee).
                  </p>
                  <p>
                    The choices of meal during the trek are limited however you
                    can find a meal of your liking at almost every tea-house.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="group">
                <div className="card p-3 bg-primary text-light">
                  <h3>
                    UPGRADE ACCOMMODATION <i class="fas fa-hotel" />
                  </h3>
                  <p>
                    If you wish to upgrade the accommodation in Kathmandu, this
                    is very much available, upgrade accommodation at ★★★★ hotel
                    in Kathmandu would cost US $30 on top per night and the
                    ★★★★★ upgrade would cost a total of US $65 per night!
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="card p-3 bg-light text-dark">
                  <h3>
                    LOCAL WEATHER & TEMPERATURE{" "}
                    <i class="fas fa-thermometer-three-quarters" />
                  </h3>
                  <p>
                    The weather conditions in Kathmandu are difficult to predict
                    in advance. During the day it can be nice and warm, however,
                    the nights may get colder.
                  </p>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th>Season</th>
                      <th>Average Temperature</th>
                    </tr>
                    <tr>
                      <td>Spring</td>
                      <td>16-23°C (61-73°F)</td>
                    </tr>
                    <tr>
                      <td>Summer</td>
                      <td>23-25°C (73-77°F)</td>
                    </tr>
                    <tr>
                      <td>Autumn</td>
                      <td>15-24°C (59-75°F)</td>
                    </tr>
                    <tr>
                      <td>Winter</td>
                      <td>9-12°C (48-54°F)</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="group">
                <div className="card p-3 bg-primary text-light">
                  <h3>
                    ALTITUDE & ACCLIMATIZATION
                    <i class="fas fa-mountain" />
                  </h3>
                  <p>
                    There is no way to prepare for altitude other than to spend
                    time acclimatizing. Being in very good physical condition
                    will help ameliorate some of the exhaustion that people
                    often feel, but it will not prevent altitude sickness.
                  </p>
                  <p>
                    All of our itineraries are designed to accommodate proper
                    acclimatization and preparation during the trip to ensure
                    sound health. If you follow our lead, you can avoid Acute
                    Mountain Sickness easily.
                  </p>
                  <p>
                    Trekking above the 3,000 meters may attract AMS or other
                    similar medical conditions. At this height the Oxygen
                    available is comparatively lesser than the sea level. The
                    higher you go, the lesser the Oxygen you may find.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-3 bg-secondary text-light">
                  <h3>
                    ACUTE MOUNTAIN SICKNESS (AMS)
                    <i class="fas fa-band-aid" />
                  </h3>
                  <p>
                    Mountain Sickness can be a very serious and potentially life
                    threatening condition. You need to be aware of the symptoms,
                    and act as prescribed by your trip guide. Some people may
                    attract AMS at 3,000 meters, while others can easily ascend
                    above without being affected. A person’s susceptibility to
                    this does not appear to be dependent upon fitness. A clear
                    way to reduce AMS is to ensure you maintain your intake of
                    liquids, or descend immediately when you are aware of the
                    illness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="group">
                <div className="card p-3 bg-secondary text-light">
                  <h3>
                    ADVENTURE TRAVEL INSURANCE{" "}
                    <i class="fas fa-file-invoice-dollar" />
                  </h3>
                  <p>
                    Travel Insurance is mandatory for the entire tourists
                    visiting Nepal. Your travel insurance must cover accidents,
                    medical expenses, theft, medical emergencies and rescue. You
                    can choose an Insurance provider of your liking or take our
                    recommendations on the same. A copy must be provided to your
                    local operator before commencing the trek, and the local
                    agency will help claim the insurance on your behalf!
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-3 bg-primary text-light">
                  <h3>
                    MEDICAL CHECK & IMMUNIZATION{" "}
                    <i class="fas fa-briefcase-medical" />
                  </h3>
                  <p>
                    Proper medical check and immunization is important to
                    safeguard yourself from any medical accidents during the
                    trip. Proper immunization is important to protect yourself
                    from infirmities or venerable diseases.
                  </p>
                  <p>
                    Common Viruses: Hepatities A, B; Tetanus; Diptheria;
                    Measles; Chicken Pox; Influenza; Malaria; Japanese
                    Encephalitis.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="card p-3 bg-secondary text-light">
                  <h3>
                    VISA INFORMATION <i class="fab fa-cc-visa" />
                  </h3>
                  <p>
                    All foreigners require a visa for entry into Nepal (except
                    Indian nationals). Visas can be obtained from the Nepalese
                    embassy prior to travel or on arrival at Tribhuvan
                    International Airport in Kathmandu. Do Carry multiple
                    Passport-sized photographs.
                  </p>

                  <ul>
                    <li>
                      Multiple entry 15 days US$ 25 or equivalent convertible
                      currency
                    </li>
                    <li>
                      Multiple entry 30 days US$ 40 or equivalent convertible
                      currency.
                    </li>
                    <li>
                      Multiple entry 90 days US$ 100 or equivalent convertible
                      currency.{" "}
                    </li>
                  </ul>
                  <p>
                    You must pay visa fee in cash (payable in any major currency
                    but Traveler’s Check) at the TIA for visa processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

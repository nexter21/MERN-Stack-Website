import React, { Component } from "react";
import ModalImage from "react-modal-image";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="aboutUs">
        {" "}
        <header id="page-header">
          <div class="container">
            <div class="row">
              <div class="col-md-6 m-auto text-center">
                <h1>About Us</h1>

                <p>Caravan Outdoors Pvt Ltd</p>
              </div>
            </div>
          </div>
        </header>
        <section id="about" class="py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>Who Are We ?</h1>
                <p>
                  Caravan Outdoors is a team of experienced and trained outdoor
                  experts. Many of our guides have been in the trade for more
                  than 20 years, and have helped over 3,000 tourists find their
                  dream destination! With over 50 trips available in 4 different
                  countries; India, Nepal, Tibet and Bhutan, we assure every
                  trip is successful and safe!
                </p>
                <p>
                  Registered and licensed to operate by the Government of Nepal,
                  Trekking Associations, Tourism Board and the Mountaineering
                  society; our operations are regularly monitored for safety and
                  compliance! We are a proud of member of GETA and International
                  Coalition of Tourism Partners! Our clienteles range from solo,
                  couples, family, groups and LGBT travelers.
                </p>
              </div>
              <div class="col-md-6">
                <img
                  src={require("./about.jpg")}
                  alt=""
                  class="img-fluid rounded-circle d-none d-md-block about-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="authors" class="my-5 text-center">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="info-header mb-5">
                  <h1 class="pb-3">Meet Our Team</h1>
                  <p class="lead">
                    Our Team Includes experienced Group of People
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <img
                      src={require("./img/gautam-wagle.jpg")}
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3"
                    />
                    <h3>Gautam Wagle</h3>
                    <h5 class="text-muted">Managing Director & CEO</h5>
                    <p>
                      Born in Gorkha, Mr Wagle completed has double degree in
                      Mechanical Engineering and Bachelor of Business Studies.
                    </p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#exampleModalLonga"
                    >
                      See More
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModalLonga"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              About
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            <p>
                              {" "}
                              Born in Gorkha, Mr Wagle completed has double
                              degree in Mechanical Engineering and Bachelor of
                              Business Studies. In 1996 he started as an
                              assistant manager in Viking Adventures, later he
                              was sales manager in Ganesh Himal Trekking, he has
                              also worked as an office manager in Nilgiri
                              Expeditions, and Administration Manager in Arun
                              Treks & General Manager in Himalayan Icefall
                              Trekking{" "}
                            </p>
                            <p>
                              He is also an MBS from Tribhuwan University.
                              During his working period, he got plenty of
                              experience in Trekking, Tours & other Adventure
                              field in Nepal, Tibet, Bhutan & India.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="p-4">
                        <a href="http://facebook.com">
                          <i class="fab fa-facebook" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://twitter.com">
                          <i class="fab fa-twitter" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://instagram.com">
                          <i class="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <img
                      src={require("./img/paras.jpg")}
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3"
                    />
                    <h3>Paras KC</h3>
                    <h5 class="text-muted">IT Manager</h5>
                    <p>
                      Paras KC was born in Patan of Kathmandu Valley. From an
                      very early early age he was intrested in Programming, and
                      computers in General.
                    </p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#exampleModalLongb"
                    >
                      See More
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModalLongb"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              About
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            {" "}
                            <p>
                              Paras Kc was born in Patan of Kathmandu Valley.
                              From an very early early age he was intrested in
                              Programming, and computers in General. From age 15
                              he started learning how to code, and by 18 he was
                              able to create complete websites.{" "}
                            </p>
                            <p>
                              Currently he is the IT manager at Carvan Outdoors.
                              He designs and develops intuitive websites, so
                              that users can have a great experience.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="p-4">
                        <a href="http://facebook.com">
                          <i class="fab fa-facebook" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://twitter.com">
                          <i class="fab fa-twitter" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://instagram.com">
                          <i class="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <img
                      src={require("./img/sujan-dhakal.jpg")}
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3"
                    />
                    <h3>Sujan Dhakal </h3>
                    <h5 class="text-muted">Assistant Manager</h5>
                    <p>
                      Sujan Dhakal was born in Chitwan, central part of Nepal
                      near Chitwan National Park in 1994{" "}
                    </p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#exampleModalLongc"
                    >
                      See More
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModalLongc"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              About
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            Sujan Dhakal was born in Chitwan, central part of
                            Nepal near Chitwan National Park in 1994. He
                            finished his school and intermediate level education
                            from Chitwan, and moved to Kathmandu for further
                            education and career. He did his graduation on
                            Bachelor in Travel and Tourism Studies (BTTS), from
                            Kathmandu Academy of Tourism and Hospitality. He
                            joined Caravan Outdoors in Jan 2017 now holds a key
                            responsibility with jobs pertaining as, develope new
                            travel and trekking packages, photo editing, content
                            writing, and various other social media marketing,
                            Trekking Guide and platforms. Prior to his
                            interference at Caravan Outdoors, he assimilated
                            relevant working experience as an internship from
                            various Travel and trekking Agencies and hotel
                            (Adventure third pool, Putrajaya Marriott Hotel
                            Malaysia). He looks for apt ways for the deliverance
                            of his liabilities with efficiency as he firmly
                            believes there is always room for progression. He is
                            an outrageous wanderer and takes pleasure in
                            nature’s splendor. During his leisure time, he
                            entangles himself in reading novels and travel
                            magazine, photography, traveling apart from
                            adventurous activities like trekking, rafting,
                            jungle safari, and hiking.
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="p-4">
                        <a href="http://facebook.com">
                          <i class="fab fa-facebook" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://twitter.com">
                          <i class="fab fa-twitter" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://instagram.com">
                          <i class="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <img
                      src={require("./img/prabin_thapa.JPG")}
                      alt=""
                      class="img-fluid rounded-circle w-50 mb-3"
                    />
                    <h3>Prabin Thapa Magar</h3>
                    <h5 class="text-muted">Office Manager</h5>
                    <p>
                      Prabin was born in 1997 in Gorkha district of Nepal.
                      Prabin makes sure that the day to day activity at Caravan
                      Outdoors Office is as smooth as possible.
                    </p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#exampleModalLongd"
                    >
                      See More
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModalLongd"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              About
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            <p>
                              Prabin was born in 1997 in Gorkha district of
                              Nepal. Prabin makes sure that the day to day
                              activity at Caravan Outdoors Office is as smooth
                              as possible.
                            </p>
                            <p>
                              He has the responsibility to look after
                              accounting, greeting the guests and making sure
                              everything that one needs in an office is
                              available
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="p-4">
                        <a href="http://facebook.com">
                          <i class="fab fa-facebook" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://twitter.com">
                          <i class="fab fa-twitter" />
                        </a>
                      </div>
                      <div class="p-4">
                        <a href="http://instagram.com">
                          <i class="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="document">
              <h2>Our Legal Documents</h2>
              <h5 class="text-muted">Click to Enlarge</h5>
              <br />
              <div className="row" id="documents">
                <div className="col-sm-3" id="legalDocImg">
                  <ModalImage
                    small={require("./img/leagal docs/small1.jpg")}
                    large={require("./img/leagal docs/IMG_3151.JPG")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>
                <div className="col-sm-3" id="legalDocImg">
                  <ModalImage
                    small={require("./img/leagal docs/small4.jpg")}
                    large={require("./img/leagal docs/TSPS9295.jpg")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>
                <div className="col-sm-3" id="legalDocImg">
                  <ModalImage
                    small={require("./img/leagal docs/small5.jpg")}
                    large={require("./img/leagal docs/UCAH1506.jpg")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>
                <div className="col-sm-3" id="legalDocImg">
                  <ModalImage
                    small={require("./img/leagal docs/small2.jpg")}
                    large={require("./img/leagal docs/DCCG0645.jpg")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>

                {/* <div  className="col-sm-3" id="legalDocImg">doc2</div>
                <div  className="col-sm-3" id="legalDocImg">doc3</div>
                <div  className="col-sm-3" id="legalDocImg">doc3</div> */}
              </div>
              <div className="row" id="horizontalImg">
                <div className="col-sm-4" id="legalDocImg">
                  {" "}
                  <ModalImage
                    small={require("./img/leagal docs/small8.jpg")}
                    large={require("./img/leagal docs/XFQF3508.jpg")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>
                <div className="col-sm-4" id="legalDocImg">
                  {" "}
                  <ModalImage
                    small={require("./img/leagal docs/small7.jpg")}
                    large={require("./img/leagal docs/nma.jpg")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>
                <div className="col-sm-4" id="legalDocImg">
                  {" "}
                  <ModalImage
                    small={require("./img/leagal docs/small6.jpg")}
                    large={require("./img/leagal docs/taan.jpg")}
                    alt="Hello World!"
                    className="legalDocImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

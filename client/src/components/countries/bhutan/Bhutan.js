import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bhutan extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="bhutan">
        <div className="container">
          <h1>About Bhutan</h1>
          <img
            src="https://media.gadventures.com/media-server/cache/01/db/01dbb413de3376dc53cabce25a1e446c.jpg"
            alt="bhutan"
            title="bhutan"
            id="bhutanImg"
          />
          <div className="bhutanText">
            <h2>Bhutan Overview</h2>
            <p>
              The tranquil ‘Kingdom of Bhutan’ as Bhutan is officially called is
              a South Asian country, which lies at the eastern end of the
              Himalayas and shares its borders with China in the north and with
              India from its eastern, western and southern sides. The serenity
              of Bhutan’s capital, Thimphu, which is also the largest city of
              the country, is extremely calming and will help you get a breath
              of fresh air far away from the bustling of the metropolitan cities
              around the world. Bhutan is one of the best places to visit if
              you’re looking for an unperturbed and rejuvenating holiday. Here
              are 10 reasons why Bhutan will prove to be a blissful experience.
            </p>
          </div>
          <h2>Explore Your Options</h2>
          <br />
          <div className="row" id="bhutanTreks">
            <div className="col-sm-4">
              {" "}
              <div className="card trekCard" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={require("../../../img/bhutan/BhutanShortTour–5Days.jpg")}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Bhutan Short Tour</h5>
                  <p>
                    Bhutan is popularly known as the Land of Thunder Dragon.
                    Also known as The Last Shangrila, it is a discreet nation
                    located deep inside the Himalayas of South Asia.
                  </p>
                  <div className="card-body">
                    <Link
                      to="Bhutan-Short-Tour/"
                      className="card-link btn btn-primary"
                    >
                      More Info
                    </Link>
                    <Link
                      to="Bhutan-Short-Tour/"
                      className="card-link btn btn-primary"
                    >
                      Available Dates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card trekCard" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={require("../../../img/bhutan/BhutanOverviewTour–8Days.jpg")}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Bhutan Overview Tour</h5>
                  <p>
                    Bhutan is popularly known as the Land of Thunder Dragon.
                    Also known as The Last Shangrila, it is a discreet nation
                    located deep inside the Himalayas of South Asia.
                  </p>
                  <div className="card-body">
                    <Link
                      to="Bhutan-Overview-Tour/"
                      className="card-link btn btn-primary"
                    >
                      More Info
                    </Link>
                    <Link
                      to="Bhutan-Overview-Tour/"
                      className="card-link btn btn-primary"
                    >
                      Available Dates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {" "}
              <div className="card trekCard" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={require("../../../img/trekking/TheDrukPathTrek–10Days.jpg")}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">The Druk Path Trek</h5>
                  <p>
                    Bhutan is popularly known as the Land of Thunder Dragon.
                    Also known as The Last Shangrila, it is a discreet nation
                    located deep inside the Himalayas of South Asia.
                  </p>
                  <div className="card-body">
                    <Link
                      to="The-Druk-Path-Trek/"
                      className="card-link btn btn-primary"
                    >
                      More Info
                    </Link>
                    <Link
                      to="The-Druk-Path-Trek/"
                      className="card-link btn btn-primary"
                    >
                      Available Dates
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

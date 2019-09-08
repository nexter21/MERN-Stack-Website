import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AllDestinations = ({ destinations }) => {
  let places = [];

  for (let i = 0; i < destinations.length; i++) {
    let folderName = "trekking";

    if (destinations[i][6]) {
      folderName = destinations[i][6];
    }
    let imgName = destinations[i][1].replace(/\s/g, "");
    console.log(imgName);
    places.push(
      <div className="card trekCard" style={{ width: "22rem" }}>
        <Link to={`/${destinations[i][5]}`}>
          <img
            className="card-img-top"
            src={require(`../../img/${folderName}/${imgName}.jpg`)}
            alt={destinations[i][1]}
            id="trekCardImg"
          />
        </Link>
        <div className="card-body">
          <Link to={`/${destinations[i][5]}`}>
            <h5 className="card-title">{destinations[i][1]}</h5>
          </Link>
          <p className="card-text">{destinations[i][2].substr(0, 150)}...</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <strong>
              {" "}
              Price: {destinations[i][3]} Duration: {destinations[i][4]}
            </strong>
          </li>
        </ul>
        <div className="card-body">
          <Link
            to={`/${destinations[i][5]}`}
            className="card-link btn btn-primary"
          >
            More Info
          </Link>
          <Link
            href="#"
            className="card-link btn btn-primary"
            to={`/${destinations[i][5]}#dDates`}
          >
            Available Dates
          </Link>
        </div>
      </div>
    );
  }

  return <div className="row treks">{places}</div>;
};

AllDestinations.propTypes = {
  destinations: PropTypes.array.isRequired
};

export default AllDestinations;

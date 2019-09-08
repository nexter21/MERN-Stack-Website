import React from "react";
import PropTypes from "prop-types";
import AllDestinations from "./AllDestinations";
import { Helmet } from "react-helmet";

const AllTrips = ({ imgSrc, imgAlt, heading, paragraph, destinations }) => {
  const trips = [];

  return (
    <section className="trekking">
      <Helmet>
        <title>{heading}</title>
      </Helmet>
      <div id="courseHeading">
        <img src={imgSrc} alt={imgAlt} className="img-fluid" id="blogImage" />
      </div>
      <div className="container">
        <div id="trekIntro">
          <h1 className="h1trek" style={{ marginBottom: "2rem" }}>
            <b>{heading}</b>
          </h1>
          <p>{paragraph}</p>
        </div>

        <AllDestinations destinations={destinations} />
      </div>
    </section>
  );
};

AllTrips.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  destinations: PropTypes.array.isRequired
};

export default AllTrips;

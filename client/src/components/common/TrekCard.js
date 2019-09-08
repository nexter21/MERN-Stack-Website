import React from "react";

const TrekCard = ({ imgSrc }) => {
  return (
    <div className="card trekCard" style={{ width: "22rem" }}>
      <img
        className="card-img-top"
        src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/everest-base-camp-trek-ebc-trek-12-days-tour-2-20727_1547110138.JPG"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Everest Base Camp</h5>
        <p className="card-text">
          Take this trek to experience once in a lifetime moment
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Trip Cost: $695</li>
        <li className="list-group-item">Duration: 7 Days</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link btn btn-primary">
          More Info
        </a>
        <a href="#" className="card-link btn btn-primary">
          Available Dates
        </a>
      </div>
    </div>
  );
};

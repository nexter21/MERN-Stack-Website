import React from "react";

export default function Reviews() {
  const onClick = e => {
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
  };
  return (
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
          <strong> My lucky day when I discovered Caravan Outdoors</strong>
          <br />
          For 10 years a trip to Nepal had been on the top of my bucket list and
          finally it was so far! I spent a long time researching and I am sure
          my lucky star was shining brightly when I discovered Caravan Ourdoors
          with owner Gautam Wagle. From the moment I contacted him the
          communication has been fantastic and he <span id="spanSee">
            ...
          </span>{" "}
          <span className="extra" style={{ display: "none" }} id="extra">
            went out of his way to make our tour as interesting as could be. We
            have made many changes along the way but that never faced Gautam and
            with a smile he always found a solution and his helpfulness and
            flexibility was out of this world. With guide Nava and driver
            Rammani we had the best time ever. If you are considering a trip to
            Nepal, don’t look any further because Caravan Outdoors makes it the
            BEST!!!
          </span>
          <button onClick={onClick} id="readMore" className="btn btn-secondary">
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
          We recently returned from a wonderful trip to Nepal which we planned
          with the help of Gautam Wagle of Caravan Outdoors. We had specific
          sights and cities we wanted to visit and he was extremely helpful in
          making all of our travel arrangements. When our plans changed due to
          weather problems for the second part of our trip to India,
          <span id="spanSee2">...</span>{" "}
          <span className="extra" style={{ display: "none" }} id="extra2">
            he hung in there with us as we extended our trip in Nepal and once
            again was supportive, helpful and efficient. Our trip included
            Katmandu, Bandipur, Pokhara and Chitwan. We were more than happy
            with all of our hotels, both with the accommodations and their
            locations which were central to sights and good dining. Gautam
            provided us with an air conditioned car and driver. Our driver Ram
            was excellent. Not only did he negotiate the crazy traffic and road
            conditions with ease, but also he was never late, never lost and
            always cheerful and protective. We consider ourselves very lucky to
            have put our trust in Caravan.
          </span>
          <button
            onClick={onClick}
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
          Just completed an amazing 11 day Everest Base Camp trek with Caravan.
          From my first contact with owner Gautam Wagle I was incredibly
          impressed with their service. He replied to each of my messages
          diligently and in detail, putting my mind at ease about any concerns I
          had leading up to my trek. I met Gautam and my guide Jeewon at a hotel
          in Kathmandu
          <span id="spanSee2">...</span>{" "}
          <span className="extra" style={{ display: "none" }} id="extra2">
            the day before flying to Lukla. There’s no one I would rather have
            had as my guide than Jeewon - from the beginning he always attentive
            and couldn’t do enough for me. By the end of the trek we were good
            friends and I’m extremely glad I got to share my base camp
            experience with him. Highly recommend Caravan for any of their treks
            or other trips in Nepal or elsewhere!
          </span>
          <button
            onClick={onClick}
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
        <strong>Jeanette S</strong>
        <span style={{ color: "#f2b01e" }}>
          <i className="fas fa-star" /> <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </span>
        <br />
        <p>
          <strong> Nepal and Bhutan with Caravan Out Doors</strong>
          <br />I would like to thank Gautam and Caravan Outdoors for the most
          amazing holiday. I travelled with two other people and can honestly
          say we all feel that this was a holiday of a life time.We traveled to
          many regions of Nepal with an amazing guide Nava and the best driver
          in Nepal Ram.
          <span id="spanSee2">...</span>{" "}
          <span className="extra" style={{ display: "none" }} id="extra2">
            We also went to Tibet and Bhutan. We were unable to do the trek to
            Poon Hill as one of are group suffered altitude sickness at Everest
            base camp. Gautam generously rearranged our tour, always with a
            smile and a willingness to make sure we had the best holiday . Thank
            you so much to Caravan Out Doors and especially Guatam,Nava and Ram.
            Friends for ever
          </span>
          <button
            onClick={onClick}
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
          id="custoScroll"
        >
          Trip Advisor <i className="fab fa-tripadvisor" />
        </a>
      </div>
    </div>
  );
}

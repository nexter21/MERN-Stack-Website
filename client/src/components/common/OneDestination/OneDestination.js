import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import InternalNav from "./InternalNav";
import PromoOffer from "./PromoOffer";
import TrekTable from "./TrekTable";
import ExtraInfo from "./ExtraInfo";
import Reviews from "./Reviews";
import CustomizeForm from "./CustomizeForm";
import Related from "./Related";
import Excluded from "./Excluded";
import ContactGautam from "./ContactGautam";
import DeparturDates from "./DepartureDates";
import GroupDiscount from "./GroupDiscount";
import ClientPhoto from "./ClientPhoto";
import OneReview from "./OneReview";
import FinalForm from "./FinalForm";
import Additional from "./Additional";
import Provided from "./Provided";
import Important from "./Important";
import Everest from "./Specific/Everest";
import OldDates from "./OldDates";
import DynamicHeader from "./DynamicHeader";
import QuickInquiry from "./QuickInquiry";
import NewsLetter from "./NewsLetter";
import PriceCalculator from "./PriceCalculator";
import Partners from "../../LandingPage/LandingComponents/Partners";
import TripAdvisor from "./TripAdvisor";
import { Link } from "react-router-dom";
import aboveNav from "../../layout/AboveNav";
import AboveNav from "../../layout/AboveNav";

const OneDestination = ({
  title,
  url,
  para1,
  para2,
  para3,
  itineraryes,
  includedListData,
  excludedListData,
  departureDates,
  promoOffer,
  details,
  folderName,
  relNumber,
  review,
  additional,
  gears,
  important,
  itiDays,
  everest,
  oldDate,
  match,
  backLinkFromSite,
  rating,
  metaDes
}) => {
  let starRating;
  let priceRating;
  let schemaReview;
  let metaDescription;

  if (metaDes) {
    metaDescription = metaDes;
  }

  schemaReview = (
    <div
      itemscope
      itemtype="http://schema.org/Product"
      style={{ display: "none" }}
    >
      <span itemprop="name">Kenmore White 17" Microwave</span>
      <img
        itemprop="image"
        src="kenmore-microwave-17in.jpg"
        alt='Kenmore 17" Microwave'
      />
      <div
        itemprop="aggregateRating"
        itemscope
        itemtype="http://schema.org/AggregateRating"
      >
        Rated <span itemprop="ratingValue">3.5</span>/5 based on{" "}
        <span itemprop="reviewCount">11</span> customer reviews
      </div>
      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <span itemprop="priceCurrency" content="USD">
          $
        </span>
        <span itemprop="price" content="1000.00">
          1,000.00
        </span>
        <link itemprop="availability" href="http://schema.org/InStock" />
        In stock
      </div>
      Product description:
      <span itemprop="description">
        0.7 cubic feet countertop microwave. Has six preset cooking categories
        and convenience features like Add-A-Minute and Child Lock.
      </span>
      Customer reviews:
      <div itemprop="review" itemscope itemtype="http://schema.org/Review">
        <span itemprop="name">Not a happy camper</span> - by{" "}
        <span itemprop="author">Ellie</span>,
        <meta itemprop="datePublished" content="2011-04-01" />
        April 1, 2011
        <div
          itemprop="reviewRating"
          itemscope
          itemtype="http://schema.org/Rating"
        >
          <meta itemprop="worstRating" content="1" />
          <span itemprop="ratingValue">1</span>/
          <span itemprop="bestRating">5</span>stars
        </div>
        <span itemprop="description">
          The lamp burned out and now I have to replace it.{" "}
        </span>
      </div>
      <div itemprop="review" itemscope itemtype="http://schema.org/Review">
        <span itemprop="name">Value purchase</span> - by{" "}
        <span itemprop="author">Lucas</span>,
        <meta itemprop="datePublished" content="2011-03-25" />
        March 25, 2011
        <div
          itemprop="reviewRating"
          itemscope
          itemtype="http://schema.org/Rating"
        >
          <meta itemprop="worstRating" content="1" />
          <span itemprop="ratingValue">4</span>/
          <span itemprop="bestRating">5</span>stars
        </div>
        <span itemprop="description">
          Great microwave for the price. It is small and fits in my apartment.
        </span>
      </div>
      ...
    </div>
  );

  if (rating) {
    // starRating = (
    //   <div>
    //     <div
    //       class="abc"
    //       itemprop="aggregateRating"
    //       itemscope=""
    //       itemtype="http://schema.org/AggregateRating"
    //     >
    //       Rated <span itemprop="ratingValue">5</span>/5 based on{" "}
    //       <span itemprop="reviewCount">19</span> customer reviews
    //     </div>
    //     <div class="rating">
    //       <ul>
    //         <li class="selected">★</li>
    //         <li class="selected">★</li>
    //         <li class="selected">★</li>
    //         <li class="selected">★</li>
    //         <li class="">★</li>
    //       </ul>
    //     </div>
    //   </div>
    // );

    priceRating = (
      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org/",
  "@type": "Product",
  "name": "Annapurna Base Camp Budget Trek",
  "image": "https://www.caravanoutdoors.com/static/media/caravan.86419fa2.png",
  "description": "One of the best trek you can do at an affordable price",
     "offers": {
  "@type": "Offer",
  "priceCurrency": "USD",
  "price": "569.00"
  },
    } `}
      </script>
    );

    starRating = (
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement":
        [
  {
          "@type": "ListItem",
        "position": 1,
        "item":
   {
          "@id": "https://www.caravanoutdoors.com",
        "name": "Home"
        }
      },
  {
          "@type": "ListItem",
       "position": 2,
       "item":
   {
          "@id": "https://www.caravanoutdoors.com/trekking-in-nepal",
        "name": "Trek"
      }
     }  ]
   }
   `}
      </script>
    );
  }
  let backLink;
  if (backLinkFromSite) {
    backLink = (
      <p>
        Find Similar Packages in{" "}
        <a href="https://www.alfrescoadventure.com/tilicho-base-camp-round-annapurna-trekking.html">
          Alfresco Adventures
        </a>{" "}
        and{" "}
        <a href="https://www.advadventures.com/package/annapurna-base-camp-trek.html">
          Advance Adventures
        </a>
      </p>
    );
  }
  //document.body.innerHTML = document.body.innerHTML.replace(/trek/g, "hike");
  const allTheme = ["trek", "hike"];
  let urlText = window.location.href.split("/");
  let themeName = urlText[urlText.length - 1];

  let groupD;
  if (
    themeName == "Group" ||
    themeName == "UK" ||
    themeName == "Australia" ||
    themeName == "Malaysia"
  ) {
    groupD = <NewsLetter title={title} theme={themeName} />;
    themeName = "";
  }
  if (!themeName) {
    themeName = "Expecting Discount";
  }
  let imageTitle = title.replace(/\s/g, "");

  // if(urlText)
  let itineries = [];
  let includedList = [];

  let trMs = [];

  if (itiDays) {
    console.log("Yup Iti days");
    for (let i = 1; i < itiDays.length; i++) {
      if (i == itineraryes.length - 1) {
        itineries.push(
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                <div id="lata">
                  <a
                    href={"#collapse" + [i + 1]}
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    {/* <i className="fas fa-arrow-circle-down" />{" "} */}
                    <span>
                      {" "}
                      <strong>Day {itiDays[itiDays.length - 1]}</strong> -{" "}
                      {itineraryes[i][0]}
                    </span>
                  </a>
                </div>
              </h5>
            </div>
            {/* <div id={"collapse" + [i + 1]} className="collapse">
              <div className="card-body">{itineraryes[i][1]}</div>
            </div> */}
          </div>
        );
      } else {
        itineries.push(
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                <a
                  href={"#collapse" + [i + 1]}
                  data-toggle="collapse"
                  data-parent="#accordion"
                >
                  {/* <i className="fas fa-arrow-circle-down" />{" "} */}
                  <span>
                    {" "}
                    <strong>Day {itiDays[i]}</strong> - {itineraryes[i][0]}
                  </span>
                </a>
              </h5>
            </div>
            {/* <div id={"collapse" + [i + 1]} className="collapse">
              <div className="card-body">{itineraryes[i][1]}</div>
            </div> */}
          </div>
        );
      }
    }
  } else {
    for (let i = 1; i < itineraryes.length; i++) {
      if (i == itineraryes.length - 1) {
        itineries.push(
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                <div id="lata">
                  <a
                    href={"#collapse" + [i + 1]}
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    <i className="fas fa-arrow-circle-down" />{" "}
                    <span>
                      {" "}
                      <strong>Day {i + 1}</strong> - {itineraryes[i][0]}
                    </span>
                  </a>
                </div>
              </h5>
            </div>
            <div id={"collapse" + [i + 1]} className="collapse">
              <div className="card-body">{itineraryes[i][1]}</div>
            </div>
          </div>
        );
      } else {
        itineries.push(
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">
                <a
                  href={"#collapse" + [i + 1]}
                  data-toggle="collapse"
                  data-parent="#accordion"
                >
                  <i className="fas fa-arrow-circle-down" />{" "}
                  <span>
                    {" "}
                    <strong>Day {i + 1}</strong> - {itineraryes[i][0]}
                  </span>
                </a>
              </h5>
            </div>
            <div id={"collapse" + [i + 1]} className="collapse">
              <div className="card-body">{itineraryes[i][1]}</div>
            </div>
          </div>
        );
      }
    }
  }
  for (let i = 0; i < includedListData.length; i++) {
    if (i == includedListData.length - 1) {
      includedList.push(
        <div id="Dates">
          <li className="list-group-item">
            <i className="fas fa-star" /> {includedListData[i]}
          </li>
        </div>
      );
    } else {
      includedList.push(
        <li className="list-group-item">
          <i className="fas fa-star" /> {includedListData[i]}
        </li>
      );
    }
  }
  // console.log(departureDates);
  // for (let i = 0; i < departureDates.length; i++) {
  //   trs.push(
  //     <tr>
  //       <td>
  //         <i className="fas fa-clock" /> {departureDates[i][0]}
  //       </td>
  //       <td>{departureDates[i][1]}</td>
  //       <td>{departureDates[i][2]}</td>
  //       <td>
  //         <button className="btn btn-primary">Book Now</button>
  //       </td>
  //     </tr>
  //   );
  // }
  for (let i = 0; i < departureDates.length; i++) {
    trMs.push(
      <tr>
        <td>{departureDates[i][1]}</td>
        <td>{departureDates[i][2]}</td>
        <td>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#contactModalE"
          >
            Book Now
          </button>
        </td>
      </tr>
    );
  }
  let insideItinerary;
  let insideDeparture;
  let outsideDeparture;

  // }

  if (itineraryes.length == 0) {
    insideItinerary = (
      <div className="itinerary">
        <div id="accordion">
          <h3>This is a One Day Tour</h3>
        </div>
      </div>
    );
  } else {
    insideItinerary = (
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
                    <strong>Day 1</strong> - {itineraryes[0][0]}
                  </span>
                </a>
              </h5>
            </div>

            <div id="collapse1" className="collapse show">
              <div className="card-body">{itineraryes[0][1]}</div>
            </div>
          </div>

          {itineries}
        </div>
      </div>
    );
  }

  let imgFolder = "trekking";
  console.log(folderName, "folder");

  if (folderName) {
    imgFolder = folderName;
  }
  let relCon;
  let relConM;
  let cPhoto;
  let oneRev;
  let finalForm;
  let paraText;
  let additionalServices;
  let providedGears;
  let importantInformartion;
  let everestContent;

  if (everest) {
    everestContent = <Everest />;
  }

  if (additional) {
    additionalServices = <Additional />;
  }
  if (gears) {
    providedGears = <Provided />;
  }

  if (important) {
    importantInformartion = <Important />;
  }

  if (relNumber == "rel2") {
    paraText = (
      <div className="trekPara" style={{ fontSize: "1.2rem" }}>
        <p>
          Get ready to step in <strong>"The Steps of Heaven"</strong>. Everest
          Base Camp is among the most popular and the{" "}
          <strong>Most Rewarding</strong> trek in the world. After Completing
          this trip you can tell the whole world that you've been to the base
          camp of the <strong>Highest Mountain</strong> in the world.
        </p>
        <p>
          It isn't as hard as climbing the mount everest, but it's still far
          from easy. However, it's <strong>all worth it</strong>, because the
          <strong> Pain Completely Disappears</strong> as you are rewarded with
          spectacular views and a huge sense of{" "}
          <strong>Personal Achievement</strong>. For 16 days, from the day you
          take a flight to Lukla airport, you will traverse scenery that will
          literally take your breath away.{" "}
        </p>
        <p>
          This trek will provide once in a lifetime experience to expert
          travelers. And even if this is your first trek:{" "}
          <strong>Don't Worry</strong> about things like Altitude Mountain
          Sickness, we have a team of{" "}
          <strong>Expert Guides and Trekkers</strong> that will take great care
          of you, and make sure you get the most out of your trek
        </p>
      </div>
    );
  } else if (relNumber == "rel1") {
    paraText = (
      <div className="trekPara" style={{ fontSize: "1.2rem" }} id="trekPara">
        <p>
          Get ready to step in <strong>"The Steps of Heaven"</strong> with this
          relatively cheap, budget terk. Everest Base Camp is among the most
          popular and the <strong>Most Rewarding</strong> trek in the world.
          After Completing this trip you can tell the whole world that you've
          been to the base camp of the <strong>Highest Mountain</strong> in the
          world. And as it is a Budget Trek, it wont break your bank
        </p>
        <p>
          It isn't as hard as climbing the mount everest, but it's still far
          from easy. However, it's <strong>all worth it</strong>, because the
          <strong> Pain Completely Disappears</strong> as you are rewarded with
          spectacular views and a huge sense of{" "}
          <strong>Personal Achievement</strong>. For 14 days, from the day you
          take a flight to Lukla airport, you will traverse scenery that will
          literally take your breath away.{" "}
        </p>
        <p>
          This trek will provide once in a lifetime experience to expert
          travelers at a very cheap rate. And even if this is your first trek:{" "}
          <strong>Don't Worry</strong> about things like Altitude Mountain
          Sickness, we have a team of{" "}
          <strong>Expert Guides and Trekkers</strong> that will take great care
          of you, and make sure you get the most out of your trek
        </p>
      </div>
    );
  } else if (relNumber == "rel3") {
    paraText = (
      <div className="trekPara" style={{ fontSize: "1.2rem" }}>
        <p>
          Get ready to step in <strong>"The Steps of Heaven" </strong>
          with this relatively short trek. Everest Base Camp is among the most
          popular and the <strong>Most Rewarding</strong> trek in the world.
          After Completing this trip you can tell the whole world that you've
          been to the base camp of the <strong>Highest Mountain</strong> in the
          world.
        </p>
        <p>
          It isn't as hard as climbing the mount everest, but it's still far
          from easy. However, it's <strong>all worth it</strong>, because the
          <strong> Pain Completely Disappears</strong> as you are rewarded with
          spectacular views and a huge sense of{" "}
          <strong>Personal Achievement</strong>. For 11 days, from the day you
          take a flight to Lukla airport, you will traverse scenery that will
          literally take your breath away.{" "}
        </p>
        <p>
          This trek will provide once in a lifetime experience to expert
          travelers. And even if this is your first trek:{" "}
          <strong>Don't Worry</strong> about things like Altitude Mountain
          Sickness, we have a team of{" "}
          <strong>Expert Guides and Trekkers</strong> that will take great care
          of you, and make sure you get the most out of your trek. This the best
          price you can get for a short everest trek
        </p>
      </div>
    );
  } else if (relNumber == "rel4") {
    paraText = (
      <div className="trekPara" style={{ fontSize: "1.2rem" }}>
        <p>
          Get ready to step in <strong>"The Steps of Heaven"</strong>. Everest
          Base Camp is among the most popular and the{" "}
          <strong>Most Rewarding</strong> trek in the world. After Completing
          this trip you can tell the whole world that you've been to the base
          camp of the <strong>Highest Mountain</strong> in the world.
        </p>
        <p>
          It isn't as hard as climbing the mount everest, but it's still far
          from easy. However, it's <strong>all worth it</strong>, because the
          <strong> Pain Completely Disappears</strong> as you are rewarded with
          spectacular views and a huge sense of{" "}
          <strong>Personal Achievement</strong>. For 10 days, from the day you
          take a flight to Lukla airport, you will traverse scenery that will
          literally take your breath away.{" "}
        </p>
        <p>
          This trek will provide once in a lifetime experience to expert
          travelers. And even if this is your first trek:{" "}
          <strong>Don't Worry</strong> about things like Altitude Mountain
          Sickness, we have a team of{" "}
          <strong>Expert Guides and Trekkers</strong> that will take great care
          of you, and make sure you get the most out of your trek
        </p>
      </div>
    );
  } else {
    paraText = (
      <div className="trekPara">
        <p>{para1}</p>
        <p>{para2}</p>
        <p id="lastPara">{para3}</p>
      </div>
    );
  }
  if (relNumber) {
    relCon = <Related number={relNumber} />;
    cPhoto = <ClientPhoto />;

    finalForm = <FinalForm />;
  }
  if (review) {
    oneRev = <OneReview review={review} folderName={folderName} />;
  } else {
    oneRev = (
      <OneReview
        review={[
          "main-review",
          "Wonderful holiday with many great memories with Caravan",
          "Desmund",
          "https://www.tripadvisor.com/ShowUserReviews-g293890-d10758852-r549661327-Caravan_Outdoors-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
        ]}
      />
    );
  }
  console.log(promoOffer);

  if (!oldDate) {
    insideDeparture = (
      <DeparturDates dates={departureDates} promoOffers={promoOffer} />
    );
  } else {
    insideDeparture = (
      <OldDates dates={departureDates} promoOffers={promoOffer} />
    );
  }

  let folderLink = "";

  if (folderName == "hiking") {
    folderLink = "/hiking";
  } else if (folderName == "climbs") {
    folderLink = "/climbing";
  } else if (folderName == "expedition") {
    folderLink = "/expedition";
  } else if (folderName == "heli") {
    folderLink = "/heli-tours";
  } else if (folderName == "tour") {
    folderLink = "/tours-and-hiking";
  } else {
    folderLink = "/trekking-in-nepal";
    folderName = "Trekking";
  }

  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <section className="trek" id="secForBig">
        <Helmet>
          <title>
            {title} at {promoOffer[1]} Cost
          </title>
          {starRating}
          <script type="text/javascript" data-name="twake">
            {`
            var Tawk_API = Tawk_API || {},
              Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script"),
              s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/5bb18a7b8a438d2b0cdfe013/default";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
    
        `}
          </script>
          <meta name="description" content={metaDescription} />
          {priceRating}
        </Helmet>
        <div className="container" id="OneDestination">
          {schemaReview}
          <div className="oneDBig">
            {/* <DynamicHeader
              title={title}
              para={para1}
              themeName={themeName}
              allTheme={allTheme}
            /> */}

            {starRating}

            <div className="row">
              <div className="col-lg-8">
                <ul id="breadcrumb">
                  <li>
                    <Link to="/">
                      <i class="fa fa-home" />
                    </Link>
                  </li>
                  <li>
                    <Link to={folderLink}>{folderName}</Link>
                  </li>
                  <li>
                    <a href="#">{title}</a>
                  </li>
                </ul>
                <h1 className="trekh1"> {title}</h1>
                <figure>
                  <img
                    src={require(`../../../img/${imgFolder}/${imageTitle}.jpg`)}
                    alt={title}
                    id="trekImage"
                    title={title}
                  />
                  <figcaption>{title}</figcaption>
                </figure>
                <AboveNav />
                <InternalNav />
                <div className="trekOverview" id="trekOverview">
                  <h2 style={{ color: "#007bff" }}>Overview</h2>

                  {paraText}

                  {oneRev}
                  <div className="trekIti" id="trekIti">
                    <h2 style={{ color: "#ffc107", marginBottom: "1.5rem" }}>
                      Itinerary
                    </h2>
                    {insideItinerary}
                  </div>

                  <div
                    className="whatIncluded"
                    style={{ fontSize: "1rem" }}
                    id="whatIncluded"
                  >
                    <h2 style={{ color: "#28a745" }}>The Cost Includes</h2>

                    <div className="includedUl">
                      <ul className="list-group">{includedList}</ul>
                    </div>
                  </div>
                  <Excluded list={excludedListData} />

                  {/* <DeparturDates
                    dates={departureDates}
                    promoOffers={promoOffer}
                  /> */}
                  {insideDeparture}

                  {finalForm}
                  <div className="additional">
                    <h2>Additional information</h2>
                    <p>
                      The above information is a guide and standard template of
                      what we provide. Our trips
                      <strong> Can Be Customized</strong> at your request to
                      accommodate your specific requirements.
                    </p>
                  </div>
                  {backLink}
                </div>
              </div>

              <div className="col-sm-4" style={{ marginTop: "0rem" }}>
                <TripAdvisor />
                <PromoOffer promoOffers={promoOffer} folderName={folderName} />
                <TrekTable tableData={details} />
                {/* 
                {groupD} */}
                {/* <PriceCalculator promo={promoOffer} /> */}
                <ExtraInfo />
                <QuickInquiry />
                {additionalServices}
                {providedGears}
                {importantInformartion}
                <Reviews />
                <NewsLetter title={title} theme={themeName} />
                <CustomizeForm heading={title} />
                {relCon}
              </div>
            </div>
            {everestContent}
            <div style={{ borderTop: "1px solid black" }}>
              <Partners />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="trek" id="secForSmall">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={para1.substr(0, 160)} />

          <script type="text/javascript" data-name="twake">
            {`
            var Tawk_API = Tawk_API || {},
              Tawk_LoadStart = new Date();
      (function() {
        var s1 = document.createElement("script"),
              s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/5bb18a7b8a438d2b0cdfe013/default";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
    
        `}
          </script>
        </Helmet>
        <div className="container" id="OneDestination">
          <div className="oneDMobile">
            <h1 className="trekh1">{title}</h1>
            <ul id="breadcrumb">
              <li>
                <Link to="/">
                  <i class="fa fa-home" />
                </Link>
              </li>
              <li>
                <Link to={folderLink}>{folderName}</Link>
              </li>
              <li>
                <a href="#">{title}</a>
              </li>
            </ul>
            <div className="row">
              <div className="col-lg-8 col-sm-12">
                <img
                  src={require(`../../../img/${imgFolder}/${imageTitle}.jpg`)}
                  alt={title}
                  id="trekImage"
                  title={title}
                />
                <AboveNav />
                <InternalNav />
                <PromoOffer promoOffers={promoOffer} />
                <div className="trekOverview" id="trekOverview">
                  <h2 style={{ color: "#007bff" }}>Overview</h2>

                  {paraText}

                  {oneRev}
                  <TrekTable tableData={details} />
                  <QuickInquiry />
                  <div className="trekIti" id="trekIti">
                    <h2
                      style={{
                        color: "#ffc107",
                        marginBottom: "1.5rem",
                        marginTop: "2rem"
                      }}
                    >
                      Itinerary
                    </h2>
                    {insideItinerary}
                  </div>

                  {groupD}
                  <div
                    className="whatIncluded"
                    style={{ fontSize: "1rem" }}
                    id="whatIncluded"
                  >
                    <h2 style={{ color: "#28a745" }}>The Cost Includes</h2>

                    <div className="includedUl">
                      <ul className="list-group">{includedList}</ul>
                    </div>
                  </div>
                  <Excluded list={excludedListData} />

                  {/* <DeparturDates
                    dates={departureDates}
                    promoOffers={promoOffer}
                  /> */}
                  {insideDeparture}

                  {/* {finalForm} */}
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
                <ExtraInfo />
                <NewsLetter title={title} theme={themeName} />
                <Reviews />
                <CustomizeForm heading={title} />
                {relCon}
              </div>
            </div>
            <Partners />
            {everestContent}
          </div>
        </div>
      </section>
    );
  }
};

OneDestination.propTypes = {
  destinations: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  para1: PropTypes.string.isRequired,
  para2: PropTypes.string.isRequired,
  para3: PropTypes.string.isRequired,
  itineraryes: PropTypes.array.isRequired
};

export default OneDestination;

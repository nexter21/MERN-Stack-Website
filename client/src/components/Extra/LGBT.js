import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class LGBT extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="lgbt">
        <Helmet>
          {" "}
          <title>LGBT Travel</title>
        </Helmet>
        <div className="container">
          <h2>LGBT Travel</h2>
          <img src={require("../../img/lgbt.jpg")} alt="" id="lgbtImg" />

          <h3>LGBT Tourism in Nepal</h3>
          <p>
            Caravan Outdoors supports the LGBT rights and LGBT tourism. We
            understand the value of gender equality and choice of sexual
            orientation, therefore, we help you come out and enjoy your life
            through holidaying. We cater every individual without any judgement
            or biases, and moreover, we help organize a safe and pleasurable
            trip.
          </p>
          <p>
            {" "}
            <strong>
              Tourism should be planned and practiced as a privileged means of
              individual and collective fulfillment; when practiced with a
              sufficiently open mind. It is an irreplaceable factor of
              self-education, mutual tolerance and for learning about the
              legitimate differences between people, cultures and their
              diversity.
            </strong>
          </p>
          <p>
            LGBT rights were legitimized by the state of Nepal in 2007.
            Sanctioned and protected by the law, you can freely enjoy most of
            the LGBT rights in Nepal than any other countries around the world.
            Nepal Tourism Board has already green-flagged the program to
            encourage LGBT tourism; therefore, Nepal can be a desirable
            destination for the global LGBT tourists.
          </p>

          <h5>Advantages of LGBT Holidaying in Nepal</h5>
          <ul className="list-group">
            <li className="list-group-item">
              No discrimination or segregation based on your sexual orientation
              and identity.
            </li>
            <li className="list-group-item">
              Businesses, Hotels and Agencies cater LGBT tourists equally.
            </li>
            <li className="list-group-item">
              The employees at hospitality industry are more sensitive towards
              LGBT tourists’ needs.
            </li>
            <li className="list-group-item">
              Indulge in honeymooning, vacation and tours without the fear of
              any repercussions.
            </li>
            <li className="list-group-item">
              Refer and promote as the safe and desirable travel destination.
            </li>
          </ul>
          <h5>
            At <span style={{ color: "#993300" }}>Caravan Outdoors</span>, We
            Care,
          </h5>
          <ul className="list-group">
            <li className="list-group-item">
              To provide finest holiday packages to a single, couple or group
              LGBT tourists.
            </li>
            <li className="list-group-item">
              To organize perfect honeymoon trips.
            </li>
            <li className="list-group-item">
              To train our staffs to understand and comprehend the sensibility
              of your choices and privacy.
            </li>
            <li className="list-group-item">
              To facilitate LGBT friendly travel destinations and travel
              packages.
            </li>
            <li className="list-group-item">
              To promote and facilitate LGBT tourism needs in the entire
              Nepalese tourism sector.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

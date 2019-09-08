import React, { Component } from "react";

export default class ContactGautam extends Component {
  componentDidMount() {}
  render() {
    return (
      <section className="gautamWagle">
        <div className="card">
          <h2>Have Questions?</h2>
          <h3>Contact Gautam Wagle</h3>
          <h4>Outdoors Expert</h4>
          <h5 style={{ color: "#000" }}>
            <strong>
              {" "}
              <a href="tel:+9779851049483">+9779851049483</a>
            </strong>
          </h5>
          <h2>
            <a
              href="skype:gautam.wagle?call"
              style={{ fontSize: "3rem", color: "#00aff0" }}
            >
              <i class="fab fa-skype" />
            </a>
            <a
              href="whatsapp://send?text=hellosir&phone=+9779851049483&abid=+9779851049483"
              style={{ fontSize: "3rem", color: "#25D366" }}
            >
              <i class="fab fa-whatsapp-square" />
            </a>
            <a
              href="viber://chat?number=+9779851049483"
              style={{ fontSize: "3rem", color: "#675ca8" }}
            >
              <i class="fab fa-viber" />
            </a>
          </h2>
          <h3 style={{ color: "#000" }}>Click To Call</h3>
        </div>
      </section>
    );
  }
}

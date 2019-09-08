import React, { Component } from "react";

export default class Icons extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <section className="icons">
        <div className="whats">
          <a
            href="whatsapp://send?text=Hello&phone=+9779851049483&abid=+9779851049483"
            style={{ color: "#25D366" }}
            className="whatsApp"
          >
            {/* <i class="fab fa-whatsapp-square" /> */}

            <span class="fa-stack" style={{ verticalAlign: "top" }}>
              <i class="fas fa-circle fa-stack-2x" />
              <i
                class="fab fa-whatsapp-square fa-stack-1x fa-inverse"
                style={{ fontSize: "3rem" }}
              />
            </span>
          </a>
        </div>
        <div className="skype">
          <a
            href="skype:gautam.wagle?call"
            style={{ fontSize: "2.3rem", color: "#00aff0" }}
          >
            <span class="fa-stack" style={{ verticalAlign: "top" }}>
              <i class="fas fa-circle fa-stack-2x" />
              <i
                class="fab fab fa-skype fa-stack-1x fa-inverse"
                style={{ fontSize: "3rem" }}
              />
            </span>
          </a>
        </div>
      </section>
    );
  }
}

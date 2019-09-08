import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Conversion extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
  }
  render() {
    return (
      <section className="thankYou">
        <Helmet>
          <script>
            {` gtag('event', 'conversion', {'send_to': 'AW-874920825/X-BnCJGvnJYBEPn2mKED'}); `}
          </script>
        </Helmet>
        <div id="thankP">
          <p>Thank You for contacting us, we'll get back to you very soon</p>
          <p>
            <i class="fas fa-smile" />
            <i class="fas fa-smile" />
            <i class="fas fa-smile" />
            <i class="fas fa-smile" />
          </p>
        </div>
      </section>
    );
  }
}

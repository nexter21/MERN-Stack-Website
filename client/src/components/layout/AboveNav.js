import React, { Component } from "react";

export default class AboveNav extends Component {
  render() {
    return (
      <section className="creditCards bg-light ">
        <span>
          <i class="fab fa-cc-mastercard" />
          <i class="fab fa-cc-visa" />
          <i class="fab fa-cc-discover" />
          <i class="fab fa-cc-amex" />
          <i class="fab fa-cc-jcb" />
        </span>
      </section>
    );
  }
}

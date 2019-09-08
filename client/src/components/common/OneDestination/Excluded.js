import React from "react";

export default function Excluded({ list }) {
  let excludes = [];
  for (let i = 0; i < list.length; i++) {
    if (i == list.length - 1) {
      excludes.push(
        <li className="list-group-item" id="dDates">
          <i className="fas fa-star" />
          {list[i]}
        </li>
      );
    } else {
      excludes.push(
        <li className="list-group-item">
          <i className="fas fa-star" />
          {list[i]}
        </li>
      );
    }
  }
  return (
    <section className="excludes">
      <h2 style={{ color: "#dc3545" }}>The Cost Excludes</h2>

      <div className="excludedUl">
        <ul className="list-group">{excludes}</ul>
      </div>
    </section>
  );
}

import React from "react";

export default function TrekTable({ tableData }) {
  return (
    <table className="trekTable">
      <h3 style={{ color: "black", marginBottom: "1rem" }}>
        <b>Details</b>
      </h3>

      <tr>
        <td>
          <i className="fas fa-clock" /> Trip Duration
        </td>
        <td>{tableData[0]}</td>
      </tr>

      <tr>
        <td>
          <i className="fas fa-mountain" /> Max Altitude
        </td>
        <td>{tableData[1]}</td>
      </tr>

      <tr>
        <td>
          <i className="fas fa-utensils" /> Meals
        </td>
        <td>{tableData[2]}</td>
      </tr>

      <tr>
        <td>
          <i className="fas fa-bus-alt" /> Vechicles
        </td>
        <td>{tableData[3]}</td>
      </tr>

      <tr>
        <td>
          <i className="fas fa-calendar-alt" /> Best Months
        </td>
        <td>{tableData[4]}</td>
      </tr>

      <tr id="itiCusto">
        <td>
          <i className="fas fa-fist-raised" /> Difficulty
        </td>
        <td>{tableData[5]}</td>
      </tr>

      <tr id="itiAnc">
        <td>
          <i className="fas fa-users" /> No of Travelers
        </td>
        <td>{tableData[6]}</td>
      </tr>
    </table>
  );
}

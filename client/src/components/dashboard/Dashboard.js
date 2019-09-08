import React, { Component } from "react";
import { Helmet } from "react-helmet";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <h1>Welcome to Dashboard</h1>
      </div>
    );
  }
}
export default Dashboard;

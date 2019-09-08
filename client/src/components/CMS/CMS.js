import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getClients,
  getHomeUsers,
  getPromoClients
} from "../../actions/clientActions";

class CMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      homeUsers: [],
      promoClients: []
    };
  }
  componentDidMount() {
    this.props.getClients();
    this.props.getHomeUsers();
    this.props.getPromoClients();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      clients: nextProps.client.clients,
      homeUsers: nextProps.client.homeUsers,
      promoClients: nextProps.client.promoClients
    });
  }
  createTable() {
    const table = [];

    const clients = this.state.clients;

    for (let i = 0; i < clients.length; i++) {
      table.push(
        <tr>
          <td>{i + 1}</td>
          <td>{clients[i].days}</td>
          <td>{clients[i].visitDate}</td>
          <td>{clients[i].budget}</td>
          <td>{clients[i].name}</td>
          <td>{clients[i].email}</td>
          <td>{clients[i].phone}</td>
          <td>{clients[i].message}</td>
          <td>{clients[i].heading}</td>
        </tr>
      );
    }
    return table;
  }

  homeUsers() {
    const hUsers = [];

    const homeUsers = this.state.homeUsers;

    for (let i = 0; i < homeUsers.length; i++) {
      hUsers.push(
        <tr>
          <td>{i + 1}</td>
          <td>{homeUsers[i].name}</td>
          <td>{homeUsers[i].email}</td>
          <td>{homeUsers[i].country}</td>
          <td>{homeUsers[i].message}</td>
        </tr>
      );
    }
    return hUsers;
  }

  promoClients() {
    const PUsers = [];

    const promoUsers = this.state.promoClients;
    console.log(promoUsers);
    for (let i = 0; i < promoUsers.length; i++) {
      PUsers.push(
        <tr>
          <td>{i + 1}</td>
          <td>{promoUsers[i].name}</td>
          <td>{promoUsers[i].email}</td>
          <td>{promoUsers[i].phone}</td>
          <td>{promoUsers[i].departure}</td>
          <td>{promoUsers[i].country}</td>
          <td>{promoUsers[i].destination}</td>
          <td>{promoUsers[i].price}</td>
          <td>{promoUsers[i].packageDate}</td>
        </tr>
      );
    }
    return PUsers;
  }
  render() {
    return (
      <section className="cmsSection">
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              <th>No Of Days</th>
              <th>Visit Date</th>
              <th>Budget</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Heading</th>
            </tr>
            {this.createTable()}
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Message</th>
            </tr>
            {this.homeUsers()}
          </tbody>
        </table>

        <br />
        <h3>Promo Clients</h3>
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Departure</th>
              <th>Country</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Package Date</th>
            </tr>
            {this.promoClients()}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  client: state.client
});

export default connect(
  mapStateToProps,
  { getClients, getHomeUsers, getPromoClients }
)(CMS);

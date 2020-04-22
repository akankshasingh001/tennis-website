import React, { Component } from 'react';
import { connect } from 'react-redux';
import leagueDetails from '../../actions/leagueDetails';

class LeagueRegistrationDashboard extends Component {
  componentDidMount() {
    this.props.leagueDetails();
  }
  renderList() {
    const details = this.props.league.league ? this.props.league.league : [];
    return details.map(detail => {
      return (
        <tbody key={detail._id}>
          <tr>
            <td>
              <i className="leaf icon green" />
            </td>
            <td>{detail.leagueName}</td>
            <td>
              <i className="clock outline icon blue" />
            </td>
            <td>{detail.deadline}</td>
            <td>{detail.season}</td>
            <td>{detail.matches}</td>
            <td>{detail.price}</td>
            <td>
              <button className="ui button blue">Register</button>
            </td>
          </tr>
        </tbody>
      );
    });
  }
  render() {
    return (
      <div className="ui container">
        <h2>Tennis League Calendar</h2>
        <table className="ui single line blue table">
          <thead>
            <tr>
              <th></th>
              <th>League</th>
              <th>Time</th>
              <th>DeadLine</th>
              <th>Season</th>
              <th>Matches</th>
              <th>Price/Person</th>
              <th></th>
            </tr>
          </thead>
          {this.renderList()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  league: state.league
});

export default connect(
  mapStateToProps,
  { leagueDetails }
)(LeagueRegistrationDashboard);

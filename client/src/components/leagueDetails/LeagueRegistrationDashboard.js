import React, { Component } from 'react';

class LeagueRegistrationDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <h2>Tennis League Calendar</h2>
        <table class="ui single line blue table">
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
          <tbody>
            <tr>
              <td>
                <i className="leaf icon green" />
              </td>
              <td>Spring Men's Flex Singles</td>
              <td>
                <i className="clock outline icon blue" />
              </td>
              <td>Apr 30</td>
              <td>May 09 - Jun 21</td>
              <td>5</td>
              <td>$30.00</td>
              <td>
                <button className="ui button blue">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeagueRegistrationDashboard;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterCard extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">Time left to Join</div>
        </div>
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>
                  <h4 className="ui sub header">
                    <i className="leaf icon green" />
                    Singles
                  </h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h4 className="ui sub header">8 Days</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="ui sub header">
                    <i className="leaf icon green" />
                    Doubles
                  </h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h4 className="ui sub header">16 Days</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="ui sub header">
                    <i className="snowflake outline icon blue" />
                    Mixed
                  </h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h4 className="ui sub header">15 Days</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="extra content">
          <Link to="/leagueRegister" className="ui button primary">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default RegisterCard;

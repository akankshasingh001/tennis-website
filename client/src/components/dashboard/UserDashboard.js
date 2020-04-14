import React, { Component } from 'react';

class UserDashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui four column grid">
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img
                  src="https://img.favpng.com/13/22/9/tennis-cartoon-play-stock-illustration-png-favpng-H5T2rJXTeJGvx8Gt8fcQt5LfB.jpg"
                  alt="img"
                />
              </div>
              <div className="content">
                <a className="header">Akanksha Singh</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;

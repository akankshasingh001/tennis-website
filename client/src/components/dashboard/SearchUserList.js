import React, { Component } from 'react';

class SearchUserList extends Component {
  render() {
    return (
      <div className="ui container">
        <table class="ui single line table blue">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{this.props.searchUserList}</tbody>
        </table>
      </div>
    );
  }
}

export default SearchUserList;

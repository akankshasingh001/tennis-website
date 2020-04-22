import React, { Component } from 'react';

class SearchUserList extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui clearing segment">
          <h3 class="ui left floated header">Name</h3>
          <h3 class="ui right floated header">Location</h3>
        </div>

        <div class="item">{this.props.searchUserList}</div>
      </div>
    );
  }
}

export default SearchUserList;

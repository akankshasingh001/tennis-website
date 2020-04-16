import React from 'react';
import { connect } from 'react-redux';
import searchUser from '../../actions/searchUser';

const SearchUser = () => {
  return (
    <div className="ui container">
      <form className="ui form">
        <h4 className="ui dividing header">Search Player</h4>
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input type="text" placeholder="First Name" name="fname" />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" name="lname" />
          </div>
        </div>
        <input type="submit" className="ui button primary" value="Search" />
      </form>
    </div>
  );
};

export default connect(
  null,
  { searchUser }
)(SearchUser);

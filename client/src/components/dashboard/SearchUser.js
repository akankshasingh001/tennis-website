import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import searchUser from '../../actions/searchUser';

const SearchUser = ({ searchUser }) => {
  const initialValue = { fname: '', lname: '' };

  const [formData, setFormData] = useState(initialValue);

  const onInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    searchUser(formData);
  };

  useEffect(() => {
    searchUser();
  }, [searchUser]);

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={onFormSubmit}>
        <h4 className="ui dividing header">Search Player</h4>
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={onInputChange}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={onInputChange}
            />
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

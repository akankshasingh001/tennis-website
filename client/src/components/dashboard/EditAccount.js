import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/editProfile';
import { editUserAccount } from '../../actions/editProfile';

const EditAccount = ({
  getUserProfile,
  editUserAccount,
  profile: { user }
}) => {
  const { firstName, lastName, city, zipcode } = user;
  const [formData, setFormData] = useState({
    fName: firstName,
    lName: lastName,
    cityform: city,
    zipcodeform: zipcode,
    password: '',
    confirmpwd: ''
  });
  const {
    fName,
    lName,
    cityform,
    zipcodeform,
    password,
    confirmpwd
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const user = {};
    user.firstName = formData.fName;
    user.lastName = formData.lName;
    user.city = formData.cityform;
    user.zipcode = formData.zipcodeform;
    user.password = formData.password;
    editUserAccount(user);
  };

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);
  return (
    <Fragment>
      <div className="ui container">
        <form className="ui form" onSubmit={e => onSubmit(e)}>
          <h1 className="ui dividing header">Edit Account</h1>
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="fName"
                value={fName}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lName"
                value={lName}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                name="cityform"
                value={cityform}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>Zip Code</label>
              <input
                type="text"
                placeholder="Zip Code"
                name="zipcodeform"
                value={zipcodeform}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Password</label>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input
                type="text"
                placeholder="Confirm Password"
                name="confirmPwd"
                value={confirmpwd}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <input
            type="submit"
            className="ui button primary"
            value="Update Account"
          />
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getUserProfile, editUserAccount }
)(EditAccount);

import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/register';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    city: '',
    zipcode: '',
    password: '',
    confirmPwd: ''
  });
  const {
    firstName,
    lastName,
    email,
    gender,
    city,
    zipcode,
    password,
    confirmPwd
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPwd) {
      alert('password must match');
    } else {
      register({ firstName, lastName, email, gender, city, zipcode, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="ui container">
        <h1>Sign Up</h1>
        <p>
          <i className="user icon"></i> Create Your Account
        </p>
        <form className="ui form" onSubmit={e => onSubmit(e)}>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>Gender</label>
              <select
                className="ui fluid dropdown"
                name="gender"
                value={gender}
                onChange={e => onChange(e)}
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>Zip Code</label>
              <input
                type="text"
                placeholder="Zip Code"
                name="zipcode"
                value={zipcode}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                name="confirmPwd"
                value={confirmPwd}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <input
            type="submit"
            className="ui button primary"
            value="Register"
            tabIndex="0"
          />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Login In</Link>
        </p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  { register }
)(Register);

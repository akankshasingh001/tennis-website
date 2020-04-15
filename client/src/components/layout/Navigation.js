import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/login';

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/searchPlayer">
          <i className="search icon" />
          <span>Search Player</span>
        </Link>
      </li>
      <li>
        <Link to="/editDetails">My Account</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="user icon" />
          <span>DashBoard</span>
        </Link>
      </li>
      <li>
        <Link onClick={logout} to="/">
          <i className="sign out alternate icon" /> <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">
          <span>Login</span>
          <i className=" sign in alternate icon" />
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="iconify" data-icon="mdi-tennis" />
          Tennis Junction
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);

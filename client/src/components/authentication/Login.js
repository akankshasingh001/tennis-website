import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/login';

class Login extends Component {
  render() {
    return <div>Login</div>;
  }
}

export default connect(
  null,
  { login }
)(Login);

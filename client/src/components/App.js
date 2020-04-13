import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './layout/Navigation';
import Landing from './layout/Landing';
import Routes from './routing/Routes';

import store from '../store';
import setAuthToken from '../utils/setAuthToken';
import loadUserAfterLogin from '../actions/afterLogin';

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUserAfterLogin());
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Landing}></Route>
              <Route component={Routes} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

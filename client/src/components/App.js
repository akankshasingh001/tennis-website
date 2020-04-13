import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigation from './layout/Navigation';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
        </div>
      </Provider>
    );
  }
}

export default App;

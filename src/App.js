import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

export default App;

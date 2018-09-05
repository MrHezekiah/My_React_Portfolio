import React, { Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import About from './views/About'
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Projects from './views/Projects';
import NotFound from './views/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <main>
            <switch>
              <Route exact path="/" component={Home}/>
              <Route exact path ="/projects" component={Projects}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route component={NotFound}/>
            </switch>
          </main>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

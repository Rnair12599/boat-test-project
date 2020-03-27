import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* guideqr.com is default domain url */}
            {/* guideqr.com/<COMPANY>/<PRODUCT OR MENU ITEM> */}
            <Route
              exact path="/"
              render={props => <LandingPage {...props} />}
            />
            <Route
              path="/about"
              render={props => <LandingPage {...props} />}
            />
            <Route
              path="/packages"
              render={props => <LandingPage {...props} />}
            />
            <Route
              path="/contact"
              render={props => <LandingPage {...props} />}
            />
            <Route
              path="/tours"
              render={props => <LandingPage {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

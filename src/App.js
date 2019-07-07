import withRoot from "./withRoot";
// --- Post bootstrap -----
// import NgfValues from "./views/NgfValues";
// import NgfCategories from "./views/NgfCategories.js";
// import NgfHowItWorks from "./views/NgfHowItWorks.js";
// import NgfCTA from "./views/NgfCTA";
// import NgfQuestions from "./views/NgfQuestions";
import React, { Component } from "react";
import AppAppBar from "./views/AppAppBar";
import NgfHero from "./views/NgfHero";
import NgfCesium from "./views/NgfCesium";
import NgfLocation from "./views/NgfLocation";
import NgfFooter from "./views/NgfFooter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

class App extends Component {
  state = {
    mainTitle: "Find Your Market",
    accountTitle: "Choose Your Account",
    locationTitle: "Pick Your Location"
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AppAppBar mainTitle={this.state.mainTitle} />
                  <NgfCesium />
                  <NgfFooter />
                </React.Fragment>
              )}
            />
            <Route
              path="/AccountType"
              render={props => (
                <React.Fragment>
                  <AppAppBar mainTitle={this.state.accountTitle} />
                  <NgfHero />
                  <NgfFooter />
                </React.Fragment>
              )}
            />
            <Route
              path="/Location"
              render={props => (
                <React.Fragment>
                  <AppAppBar mainTitle={this.state.locationTitle} />
                  <NgfLocation />
                  <NgfFooter />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default hot(withRoot(App));

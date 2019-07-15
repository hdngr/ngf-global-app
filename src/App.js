import withRoot from "./withRoot";
// --- Post bootstrap -----
import React, { Component } from "react";
import AppAppBar from "./views/AppAppBar";
import NgfAccountType from "./views/NgfAccountType";
import NgfFindMarket from "./views/NgfFindMarket";
import NgfLogin from "./views/NgfLogin";
import NgfLocation from "./views/NgfLocation";
import NgfMarketSelection from "./views/NgfMarketPlace/NgfMarketSelection";
import NgfFooter from "./views/NgfFooter";
import NgfHeader from "./views/NgfMarketPlace/NgfListingHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

class App extends Component {
  state = {
    mainTitle: "Find Your Market",
    accountTitle: "Choose Your Account",
    locationTitle: "Pick Your Location",
    marketTitle: "NGF-Global Marketplace"
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
                  <NgfFindMarket />
                  <NgfFooter />
                </React.Fragment>
              )}
            />
            <Route
              path="/Login"
              render={props => (
                <React.Fragment>
                  <AppAppBar mainTitle={this.state.mainTitle} />
                  <NgfLogin />
                  <NgfFooter />
                </React.Fragment>
              )}
            />
            <Route
              path="/AccountType"
              render={props => (
                <React.Fragment>
                  <AppAppBar mainTitle={this.state.accountTitle} />
                  <NgfAccountType />
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
            <Route
              path="/Market"
              render={props => (
                <React.Fragment>
                  <AppAppBar mainTitle={this.state.marketTitle} />
                  <NgfHeader />
                  <NgfMarketSelection />
                  {/* <NgfFooter /> */}
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

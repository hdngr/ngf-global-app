import withRoot from "./withRoot";
// --- Post bootstrap -----
import React from "react";
import AppAppBar from "./views/AppAppBar";
import NgfHero from "./views/NgfHero";
import { hot } from "react-hot-loader/root";

// import NgfValues from "./views/NgfValues";
// import NgfCategories from "./views/NgfCategories.js";
// import NgfHowItWorks from "./views/NgfHowItWorks.js";
// import NgfCTA from "./views/NgfCTA";
// import NgfQuestions from "./views/NgfQuestions";
import NgfFooter from "./views/NgfFooter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NgfCesium from "./views/NgfCesium";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route
            exact
            path="https://ngf-global.herokuapp.com/"
            render={props => (
              <React.Fragment>
                <AppAppBar />
                <NgfHero />
                <NgfFooter />
              </React.Fragment>
            )}
          />
          <Route
            path="/NgfEarth"
            render={props => (
              <React.Fragment>
                <AppAppBar />
                <NgfCesium />
                <NgfFooter />
              </React.Fragment>
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default hot(withRoot(App));

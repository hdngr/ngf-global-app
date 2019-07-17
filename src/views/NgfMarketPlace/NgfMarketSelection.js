import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import backgroundImage from "../../images/ngf_background.png";
import NgfDrawer from "./NgfDrawer";
import NgfListings from "./NgfSearchResult";
import NgfSearchResult from "./NgfSearchResult";
import NgfHeader from "../NgfMarketPlace/NgfListingHeader";
import { render } from "react-dom";
const drawerWidth = 240;
class NgfMarketSelection extends Component {
  state = {
    resultTitle: "Commodity",
    results: 0,
    curpage: 0,
    numpages: 0
  };

  render() {
    //const { classes } = this.props;
    return (
      <div>
        <NgfDrawer />
        <NgfSearchResult props={this.state} />
      </div>
    );
  }
}
const styles = theme => ({
  background: {
    marginLeft: drawerWidth,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "cover",
    height: "100vh"
  },
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden"
  }
});

NgfMarketSelection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfMarketSelection);

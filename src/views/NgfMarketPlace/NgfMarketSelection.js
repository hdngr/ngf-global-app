import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import backgroundImage from "../../images/ngf_background.png";
import NgfDrawer from "./NgfDrawer";
import NgfSearchResult from "./NgfSearchResult";
import NgfAppBar from "./NgfAppBar";
import NgfSearchBar from "./NgfSearchBar";
import NgfGMaps from "./NgfGMaps";
import Grid from "@material-ui/core/Grid";
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
        <NgfAppBar />
        <NgfSearchBar />
        <Grid sm container direction="row">
          <Grid sm item>
            <NgfGMaps style={{ flex: 1, flexWrap: "wrap" }} />
          </Grid>
          <Grid sm item>
            <NgfSearchResult
              style={{ flex: 1, flexWrap: "wrap" }}
              props={this.state}
            />
          </Grid>
        </Grid>
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

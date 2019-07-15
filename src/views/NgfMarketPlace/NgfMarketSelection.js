import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import backgroundImage from "../../images/ngf_background.png";
import NgfHeroLayout from "../NgfHeroLayout";
import NgfDrawer from "./NgfDrawer";
import NgfListings from "../NgfListings";
import NgfListingLayout from "./NgfListingLayout";
import NgfHeader from "../NgfMarketPlace/NgfListingHeader";
const drawerWidth = 240;
function NgfMarketSelection(props) {
  const { classes } = props;

  return (
    <div>
      <NgfDrawer />
      {/* <NgfListingLayout /> */}
      {/* <NgfListings /> */}
    </div>
  );
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

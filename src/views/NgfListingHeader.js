import React from "react";
import { withStyles } from "@material-ui/core/withStyles";
import Paper from "@material-ui/core/Paper"
function NgfListingHeader(props) {
  const { classes } = props;
  return (
  <div>
      <Paper className={classes.Background}>

      </Paper>
  </div>
  );
}

const styles = theme => ({
  root: {
      flexGrow: 1
  },
  Background: {
    marginLeft: drawerWidth,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "cover",
    width: "100%"
    hieght: "200px"
  }
});

export default withStyles(styles)(NgfListingHeader);

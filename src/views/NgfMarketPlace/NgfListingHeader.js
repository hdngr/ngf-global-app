import React from "react";
import backgroundImage from "../../images/ngf_header.png";
import headerLogo from "../../images/ngflogoImage3.png";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function NgfListingHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.headerbackground}>
        <Grid
          container
          style={{
            direction: "row",
            justify: "center",
            alignItems: "center",
            width: "100vw",
            height: "250px"
          }}
          spacing={2}
        >
          <Grid item xs>
            <img
              style={{
                height: "100px",
                width: "100px",
                marginLeft: "125px"
              }}
              src={headerLogo}
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = theme => ({
  root: {
    flex: 1
  },
  paper1: {
    flex: 1,
    padding: theme.spacing(10),
    textAlign: "center",
    backgroundImage: `url(${headerLogo})`,
    backgroundColor: "transparent",
    backgroundPosition: "cover",
    color: theme.palette.text.secondary
  },
  paper: {
    flex: 1,
    padding: theme.spacing(10),
    textAlign: "center",
    //backgroundColor: "transparent",
    color: theme.palette.text.secondary
  },
  headerbackground: {
    //  marginLeft: drawerWidth,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9",
    backgroundPosition: "center",
    width: "100vw",
    height: "250px",
    marginTop: 8,
    zIndex: 1
  }
});

export default withStyles(styles)(NgfListingHeader);

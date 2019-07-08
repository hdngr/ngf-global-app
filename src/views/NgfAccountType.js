import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { Link } from "react-router-dom";
import NgfHeroLayout from "./NgfHeroLayout";
import ngflogoImage from "../images/ngflogoImage3.png";
import backgroundImage from "../images/ngf_background_no_logo.png";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "cover"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 10
    }
  },
  more: {
    marginTop: theme.spacing.unit * 2
  }
});

function NgfAccountType(props) {
  const { classes } = props;

  return (
    <NgfHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <img
        style={{
          display: "inline",
          height: "300px",
          width: "300px",
          marginTop: "100px"
        }}
        src={ngflogoImage}
        alt=""
      />
      <Typography
        style={{ marginTop: "50px" }}
        color="inherit"
        align="center"
        variant="h2"
      >
        NGF Global
      </Typography>
      <Typography color="inherit" align="center" variant="h5" marked="center">
        Future Farming Solutions
      </Typography>

      {/* <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Revolutionizing the Buyer, Seller and lender experience across the
        Agriculture Industry
      </Typography> */}
      <Grid
        container
        className={classes.root}
        spacing={12}
        style={{ marginTop: "50px" }}
      >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component={linkProps => (
                  <Link {...linkProps} to="/Location" variant="button" />
                )}
              >
                Buyer
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component={linkProps => (
                  <Link {...linkProps} to="/Location" variant="button" />
                )}
              >
                Seller
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component={linkProps => (
                  <Link {...linkProps} to="/Location" variant="button" />
                )}
              >
                Vendor
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*  Back Button */}
      <Button
        style={{ marginTop: "10px" }}
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => <Link {...linkProps} to="/" variant="button" />}
      >
        Back
      </Button>
      <Typography
        style={{ marginTop: "50px" }}
        variant="body2"
        color="inherit"
        className={classes.more}
      >
        Discover the experience
      </Typography>
    </NgfHeroLayout>
  );
}

NgfAccountType.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfAccountType);

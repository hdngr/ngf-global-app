import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { Link } from "react-router-dom";
import NgfHeroLayout from "./NgfHeroLayout";
import ngflogoImage from "../images/ngflogoImage3.png";

const backgroundImage = "https://arvibe.xyz/testphotos/ngf-bkg.png";

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
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

function NgfHero(props) {
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
      <span style={{ marginTop: "50px" }}>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} to="/NgfEarth" variant="button" />
          )}
        >
          Buyer
        </Button>{" "}
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} to="/BlankTemplate" variant="button" />
          )}
        >
          Seller
        </Button>
      </span>
      <Button
        style={{ marginTop: "5px" }}
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        // component={linkProps => (
        //   <Link
        //     {...linkProps}
        //     href="/premium-themes/onepirate/sign-up"
        //     variant="button"
        //   />
        // )}
      >
        Vendor
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

NgfHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfHero);

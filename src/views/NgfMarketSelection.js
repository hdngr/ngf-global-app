import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import backgroundImage from "../images/ngf_background.png";
import NgfHeroLayout from "./NgfHeroLayout";

const styles = theme => ({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "cover"
  },

  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

class NgfMarketSelection extends Component {
  images = [
    {
      url:
        "https://images.unsplash.com/photo-1519181236443-b175d4c3ca1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Hemp",
      width: "40%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1535048637252-3a8c40fa2172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Tillage",
      width: "20%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1431222606267-e445510bc100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Pasture",
      width: "40%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Farmer To Farmer Lease",
      width: "38%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1464972377689-e7674c48d806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Crops",
      width: "38%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1533241242276-46a506b40d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Machinery Rental",
      width: "24%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Commodities",
      width: "40%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1556928045-16f7f50be0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "CBD",
      width: "20%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      title: "Loans",
      width: "40%"
    }
  ];
  render() {
    const { classes } = this.props;
    return (
      <NgfHeroLayout
        backgroundClassName={classes.background}
        component="section"
        width="large"
      >
        <img style={{ display: "none" }} src={backgroundImage} alt="" />
        <LayoutBody>
          <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h2"
          >
            Find The Market For You
          </Typography>
          <div className={classes.images}>
            {this.images.map(image => (
              <ButtonBase
                key={image.title}
                className={classes.imageWrapper}
                style={{
                  width: image.width
                }}
              >
                <div
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`
                  }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <div className={classes.imageMarked} />
                  </Typography>
                </div>
              </ButtonBase>
            ))}
          </div>
        </LayoutBody>
      </NgfHeroLayout>
    );
  }
}

NgfMarketSelection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfMarketSelection);

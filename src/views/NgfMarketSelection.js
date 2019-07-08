import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import backgroundImage from "../images/ngf_background.png";
import NgfHeroLayout from "./NgfHeroLayout";
import Grid from "@material-ui/core/Grid";
import Button from "../components/Button";

class NgfMarketSelection extends Component {
  render() {
    const { classes } = this.props;
    return (
      <NgfHeroLayout backgroundClassName={classes.background}>
        <LayoutBody className={classes.layoutBody} width="large">
          <img
            src="/static/themes/onepirate/productCurvyLines.png"
            className={classes.curvyLines}
            alt="curvy lines"
          />
          <Typography
            variant="h4"
            marked="center"
            className={classes.title}
            component="h2"
          >
            Commodities G:
          </Typography>
          <div>
            <Grid container spacing={40}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  {/* <div className={classes.number}>1.</div> */}
                  {/* <img
                    src={productHowItWorks3}
                    alt="suitcase"
                    className={classes.image}
                  /> */}
                  <Typography variant="h4" align="center">
                    Commodities Handled:
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  {/* <div className={classes.number}>2.</div> */}
                  {/* <img
                    src={productHowItWorks2}
                    alt="graph"
                    className={classes.image}
                  /> */}
                  <Typography variant="h4" align="center">
                    Type Land:
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  {/* <div className={classes.number}>
                    3.
                  </div> */}
                  {/* <img
                    src={productHowItWorks1}
                    alt="clock"
                    className={classes.image}
                  /> */}
                  <Typography variant="h4" align="center">
                    Type Equipment:
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            //   component={linkProps => (
            //     <Link
            //       {...linkProps}
            //       href="/premium-themes/onepirate/sign-up"
            //       variant="button"
            //     />
            //   )}
          >
            Get started
          </Button>
        </LayoutBody>
      </NgfHeroLayout>
    );
  }
}

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "cover"
  },
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden"
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit * 5}px`
  },
  title: {
    marginBottom: theme.spacing.unit * 14
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing.unit * 8
  }
});

NgfMarketSelection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfMarketSelection);

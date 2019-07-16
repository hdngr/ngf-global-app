import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import theme from "../theme";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit * 5}px`
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function NgfValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="27.998 26.999 144.003 146.002"
                viewBox="27.998 26.999 144.003 146.002"
                height="75"
                width="75"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="img"
              >
                <g>
                  <path
                    d="M127.524 78.807l-1.941-29.614-65.459 65.834c-7.979 8.025-7.674 21.464.679 29.864s21.716 8.708 29.695.683l64.253-65.146-27.227-1.621z"
                    fill="#FFE878"
                    data-color="1"
                  />
                  <path
                    d="M170.807 64.809a4.06 4.06 0 0 0-5.767 0l-4.606 4.632c-.075.065-.17.089-.241.161l-4.83 4.857-21.173-2.456 26.306-26.456c1.593-1.602 1.593-4.198 0-5.8s-4.174-1.602-5.767 0l-26.304 26.455-2.694-23.478 3.868-3.89 4.806-4.833c1.593-1.602 1.593-4.198 0-5.8s-4.174-1.602-5.767 0l-4.806 4.833-74.975 75.403c-4.954 4.983-7.334 11.92-6.703 19.535.526 6.337 3.112 12.481 7.339 17.61l-20.3 20.416a4.117 4.117 0 0 0 0 5.8 4.055 4.055 0 0 0 5.766 0l20.453-20.57c4.811 3.613 10.394 5.834 16.143 6.317.802.067 1.594.101 2.379.101 6.498 0 12.364-2.302 16.765-6.586.102-.084.227-.12.322-.215l79.781-80.236a4.112 4.112 0 0 0 .005-5.8zm-69.784 40.552l21.171 2.458-18.446 18.551-21.173-2.456 18.448-18.553zm-24.214 12.752l-2.694-23.477 18.447-18.552 2.694 23.477-18.447 18.552zm71.194-36.25l-18.447 18.553-21.171-2.458 18.446-18.551 21.172 2.456zm-26.938-8.258l-18.448 18.553-2.694-23.477 18.448-18.553 2.694 23.477zm-66.439 40.631l12.128-12.197 2.694 23.477-14.145 14.226c-6.451-8.306-6.933-19.214-.677-25.506zm6.631 31.118l13.957-14.037 21.173 2.456-11.167 11.231c-5.91 5.94-15.912 5.842-23.963.35z"
                    fill="#A68546"
                    data-color="2"
                  />
                </g>
              </svg>
              <Typography variant="h6" className={classes.title}>
                commodities
              </Typography>
              <Typography variant="h6">
                {"Specialty Crops / Hemp / Cannabis"}
              </Typography>
              <Typography
                variant="h5"
                style={{ marginTop: theme.spacing.unit * 2 }}
              >
                {"The quality you are looking for straight off the farm."}
                {
                  "Display your harvest on the NGF Market and upload your data to validate the higher quality."
                }
                {
                  "Search for the commodity by the grade of quality ensuring you get the best product possible."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="27.998 26.999 144.003 146.002"
                viewBox="27.998 26.999 144.003 146.002"
                height="75"
                width="75"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="img"
              >
                <g>
                  <path
                    d="M127.524 78.807l-1.941-29.614-65.459 65.834c-7.979 8.025-7.674 21.464.679 29.864s21.716 8.708 29.695.683l64.253-65.146-27.227-1.621z"
                    fill="#FFE878"
                    data-color="1"
                  />
                  <path
                    d="M170.807 64.809a4.06 4.06 0 0 0-5.767 0l-4.606 4.632c-.075.065-.17.089-.241.161l-4.83 4.857-21.173-2.456 26.306-26.456c1.593-1.602 1.593-4.198 0-5.8s-4.174-1.602-5.767 0l-26.304 26.455-2.694-23.478 3.868-3.89 4.806-4.833c1.593-1.602 1.593-4.198 0-5.8s-4.174-1.602-5.767 0l-4.806 4.833-74.975 75.403c-4.954 4.983-7.334 11.92-6.703 19.535.526 6.337 3.112 12.481 7.339 17.61l-20.3 20.416a4.117 4.117 0 0 0 0 5.8 4.055 4.055 0 0 0 5.766 0l20.453-20.57c4.811 3.613 10.394 5.834 16.143 6.317.802.067 1.594.101 2.379.101 6.498 0 12.364-2.302 16.765-6.586.102-.084.227-.12.322-.215l79.781-80.236a4.112 4.112 0 0 0 .005-5.8zm-69.784 40.552l21.171 2.458-18.446 18.551-21.173-2.456 18.448-18.553zm-24.214 12.752l-2.694-23.477 18.447-18.552 2.694 23.477-18.447 18.552zm71.194-36.25l-18.447 18.553-21.171-2.458 18.446-18.551 21.172 2.456zm-26.938-8.258l-18.448 18.553-2.694-23.477 18.448-18.553 2.694 23.477zm-66.439 40.631l12.128-12.197 2.694 23.477-14.145 14.226c-6.451-8.306-6.933-19.214-.677-25.506zm6.631 31.118l13.957-14.037 21.173 2.456-11.167 11.231c-5.91 5.94-15.912 5.842-23.963.35z"
                    fill="#A68546"
                    data-color="2"
                  />
                </g>
              </svg>
              <Typography variant="h6" className={classes.title}>
                Land
              </Typography>
              <Typography variant="h6">{"Tillage / Pasture"}</Typography>
              <Typography
                variant="h5"
                style={{ marginTop: theme.spacing.unit * 2 }}
              >
                {
                  "Farmland for sale and lease simplified with transactions made directly through NGF Global."
                }
                {
                  "Extend your operations for farming or grazing for livestock. Backed by data to display the qualities you need."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="27.998 26.999 144.003 146.002"
                viewBox="27.998 26.999 144.003 146.002"
                height="75"
                width="75"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="img"
              >
                <g>
                  <path
                    d="M127.524 78.807l-1.941-29.614-65.459 65.834c-7.979 8.025-7.674 21.464.679 29.864s21.716 8.708 29.695.683l64.253-65.146-27.227-1.621z"
                    fill="#FFE878"
                    data-color="1"
                  />
                  <path
                    d="M170.807 64.809a4.06 4.06 0 0 0-5.767 0l-4.606 4.632c-.075.065-.17.089-.241.161l-4.83 4.857-21.173-2.456 26.306-26.456c1.593-1.602 1.593-4.198 0-5.8s-4.174-1.602-5.767 0l-26.304 26.455-2.694-23.478 3.868-3.89 4.806-4.833c1.593-1.602 1.593-4.198 0-5.8s-4.174-1.602-5.767 0l-4.806 4.833-74.975 75.403c-4.954 4.983-7.334 11.92-6.703 19.535.526 6.337 3.112 12.481 7.339 17.61l-20.3 20.416a4.117 4.117 0 0 0 0 5.8 4.055 4.055 0 0 0 5.766 0l20.453-20.57c4.811 3.613 10.394 5.834 16.143 6.317.802.067 1.594.101 2.379.101 6.498 0 12.364-2.302 16.765-6.586.102-.084.227-.12.322-.215l79.781-80.236a4.112 4.112 0 0 0 .005-5.8zm-69.784 40.552l21.171 2.458-18.446 18.551-21.173-2.456 18.448-18.553zm-24.214 12.752l-2.694-23.477 18.447-18.552 2.694 23.477-18.447 18.552zm71.194-36.25l-18.447 18.553-21.171-2.458 18.446-18.551 21.172 2.456zm-26.938-8.258l-18.448 18.553-2.694-23.477 18.448-18.553 2.694 23.477zm-66.439 40.631l12.128-12.197 2.694 23.477-14.145 14.226c-6.451-8.306-6.933-19.214-.677-25.506zm6.631 31.118l13.957-14.037 21.173 2.456-11.167 11.231c-5.91 5.94-15.912 5.842-23.963.35z"
                    fill="#A68546"
                    data-color="2"
                  />
                </g>
              </svg>
              <Typography variant="h6" className={classes.title}>
                Machinery
              </Typography>
              <Typography variant="h6">{"Farmer to Farmer Lease"}</Typography>
              <Typography
                variant="h5"
                style={{ marginTop: theme.spacing.unit * 2 }}
              >
                {
                  "Growing increasingly popular! You spend a lot of money on your equipment to only be used part of the time."
                }
                {
                  "Now lease your equipment through NGF market and generate revenue on unused equipment instead of collecting dust."
                }
                {
                  "With this service, we ensure all details are simple, seamless and handled in a timely manner."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

NgfValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfValues);

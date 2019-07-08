import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.sub
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 7.5,
    marginBottom: theme.spacing.unit * 7.5,
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150
  }
});

function NgfFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container className={classes.root} spacing={12}>
          <Grid item sm={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Typography
                  variant="h5"
                  marked="left"
                  style={{ color: "white" }}
                >
                  © 2018 NGF-Global
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

NgfFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default compose(
//   pure,
//   withStyles(styles)
// )(NgfFooter);

export default withStyles(styles)(NgfFooter);

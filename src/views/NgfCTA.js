import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar.js";
import LayoutBody from "../components/LayoutBody";
import Button from "../components/Button";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: 0,
    display: "flex"
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.warning.main,
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`
  },
  cardContent: {
    maxWidth: 400
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  },
  button: {
    width: "100%"
  },
  imagesWrapper: {
    position: "relative"
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
    background: "url(/static/onepirate/productCTAImageDots.png)"
  },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600
  }
});

class NgaCTA extends React.Component {
  state = {
    open: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <LayoutBody className={classes.root} component="section" width="large">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form
                onSubmit={this.handleSubmit}
                className={classes.cardContent}
              >
                <Typography variant="h2" component="h2" gutterBottom>
                  Receive Updates
                </Typography>
                <Typography variant="h5">
                  Know what commodities, land and machinery are available to
                  you.
                </Typography>
                <TextField
                  noBorder
                  className={classes.textField}
                  placeholder="Your email"
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  Keep me updated
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown>
              <div className={classes.imageDots} />
              <img
                src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="call to action"
                className={classes.image}
              />
            </Hidden>
          </Grid>
        </Grid>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          message="We will send you our best offers, once a week."
        />
      </LayoutBody>
    );
  }
}

NgaCTA.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgaCTA);

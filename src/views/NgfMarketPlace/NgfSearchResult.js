import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import WheatImage from "../../images/wheat.png";
import CommoditiesImage from "../../images/commodities.png";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
function NgfSearchResult(props) {
  const classes = useStyles();
  const state = props;
  console.log(state);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          align="center"
          justify="center"
          className={classes.gridBorder}
        >
          <Grid item>
            <Typography variant="h3" gutterBottom>
              Wheat
            </Typography>
            <ButtonBase>
              <img className={classes.img} alt="commodities" src={WheatImage} />
            </ButtonBase>
            <Typography variant="h6" color="textSecondary">
              User ID: CY02021900001S
            </Typography>
          </Grid>
          <Grid item sm container>
            <Grid item xs container align="left" direction="column" spacing={2}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h3"
                  style={{ cursor: "pointer" }}
                >
                  {state.props.resultTitle} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Fed./State Grade: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  All Natural: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Organic Certs: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Crop Input Proof: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Non-GMO: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Seed Test: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Cert. Weed Free: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Soil Samples: {"Yes"} <br />
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography textAlign="center" variant="subtitle1">
                Quantity: <br />
                7,000 Bushels
              </Typography>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                View Map
              </Button>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Finance
              </Button>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Login
              </Button>
              <br />
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid
          container
          align="center"
          justify="center"
          className={classes.gridBorder}
        >
          <Grid item>
            <Typography variant="h3" gutterBottom>
              Beans
            </Typography>
            <ButtonBase>
              <img
                className={classes.img}
                alt="commodities"
                src={CommoditiesImage}
              />
            </ButtonBase>
            <Typography variant="h6" color="textSecondary">
              User ID: CY02021900001S
            </Typography>
          </Grid>
          <Grid item sm container>
            <Grid item xs container align="left" direction="column" spacing={2}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h3"
                  style={{ cursor: "pointer" }}
                >
                  {state.props.resultTitle} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Fed./State Grade: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  All Natural: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Organic Certs: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Crop Input Proof: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Non-GMO: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Seed Test: {"Yes"} <br />
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography variant="subtitle1">
                  Cert. Weed Free: {"Yes"} <br />
                </Typography>
              </Grid>
              {/* <Grid item container direction="row"> */}
              <Grid item container direction="row">
                <Typography
                  style={{ backgroundColor: "Red" }}
                  variant="subtitle1"
                >
                  Soil Samples:
                </Typography>
                <Grid sm item>
                  <Typography
                    style={{ backgroundColor: "yellow" }}
                    align="center"
                    variant="subtitle1"
                  >
                    {"Yes"}
                  </Typography>
                </Grid>
              </Grid>
              {/* </Grid> */}
            </Grid>
            <Grid>
              <Typography textAlign="center" variant="subtitle1">
                Quantity: <br />
                10,000 Bushels
              </Typography>
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                View Map
              </Button>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Finance
              </Button>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Login
              </Button>
              <br />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 20,
    margin: "auto",
    maxWidth: 900,
    backgroundColor: theme.palette.secondary.dark
  },
  button: {
    marginBottom: 15,
    color: theme.palette.secondary.main
  },
  image: {
    width: 200,
    height: 200,
    padding: "none"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px"
  },
  gridBorder: {
    backgroundColor: "#fefefe",
    borderWidth: 1,
    borderColor: "#1e1e1e",
    borderStyle: "solid",
    borderRadius: "10px"
  },
  leftgridBorder: {
    borderWidth: 1,
    borderColor: "#1e1e1e",
    borderStyle: "solid",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px"
  }
}));

NgfSearchResult.propTypes = {
  state: PropTypes.object.isRequired
};

export default NgfSearchResult;

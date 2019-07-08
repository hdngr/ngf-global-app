import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { Link } from "react-router-dom";
import NgfHeroLayout from "./NgfHeroLayout";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Cesium from "cesium";
import backgroundImage from "../images/ngf_background.png";
import { Grid } from "@material-ui/core";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhODBjOTFlNi04MmQ3LTQwNWUtOGUxMy05N2ZjOTQ2OWJiNWMiLCJpZCI6MTI5NjksInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1NjIyNTExNTF9.sp6bn2eKUSCKK1yXjlnqqzI0XL0YRgyM5sqb9T4Qnp0";

var bboxDegrees = null;
var bboxName = null;

var viewer = null;
class NgfHero extends Component {
  componentDidMount = () => {
    function OpenStreetMapNominatimGeocoder() {}

    OpenStreetMapNominatimGeocoder.prototype.geocode = function(input) {
      var endpoint = "https://nominatim.openstreetmap.org/search";
      var resource = new Cesium.Resource({
        url: endpoint,
        queryParameters: {
          format: "json",
          q: input
        }
      });
      bboxDegrees
        ? viewer.entities.add({
            name: "location picked!",
            description: bboxName,
            rectangle: {
              coordinates: Cesium.Rectangle.fromDegrees(
                bboxDegrees[2],
                bboxDegrees[0],
                bboxDegrees[3],
                bboxDegrees[1]
              ),
              material: Cesium.Color.GREEN.withAlpha(0.5)
            }
          })
        : console.log("degrees not set!");

      return resource.fetchJson().then(function(results) {
        return results.map(function(resultObject) {
          bboxDegrees = resultObject.boundingbox;
          bboxName = resultObject.display_name;
          return {
            displayName: resultObject.display_name,
            destination: Cesium.Rectangle.fromDegrees(
              bboxDegrees[2],
              bboxDegrees[0],
              bboxDegrees[3],
              bboxDegrees[1]
            )
          };
        });
      });
    };

    viewer = new Cesium.Viewer("cesiumContainer", {
      skyBox: false,
      skyAtmosphere: false,
      baseLayerPicker: false,
      homeButton: false,
      sceneModePicker: false,
      navigationHelpButton: false,
      animation: false,
      creditsDisplay: false,
      timeline: false,
      scene3DOnly: true,
      geocoder: new OpenStreetMapNominatimGeocoder(),

      contextOptions: {
        webgl: {
          alpha: true
        }
      }
    });

    //Set the background of the scene to transparent
    viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;

    //HDR needs to be disable for transparent backgrounds
    viewer.scene.highDynamicRange = false;

    viewer.imageryLayers.addImageryProvider(
      new Cesium.IonImageryProvider({ assetId: 3 })
    );

    // viewer.entities.add({
    //   position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
    //   billboard: {
    //     image: ngflogo_marker
    //   }
    // });
  };

  render() {
    const { classes } = this.props;
    return (
      <NgfHeroLayout backgroundClassName={classes.background}>
        <img style={{ display: "none" }} src={backgroundImage} alt="" />
        <div
          id="cesiumContainer"
          style={{
            display: "inline",
            height: "500px",
            width: "500px",
            marginTop: "100px"
          }}
        />

        <Paper className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="Enter your location"
            inputProps={{ "aria-label": "Search Map" }}
          />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Typography
          style={{ marginTop: "0px" }}
          variant="body2"
          color="inherit"
          className={classes.more}
        >
          Example: 199 Collinwood Dr. Raeford, NC, 28376
        </Typography>
        <Grid container className={classes.root} spacing={12}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  component={linkProps => (
                    <Link {...linkProps} to="/AccountType" variant="button" />
                  )}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  component={linkProps => (
                    <Link
                      {...linkProps}
                      to="/MarketSelection"
                      variant="button"
                    />
                  )}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginTop: 50
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

NgfHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfHero);

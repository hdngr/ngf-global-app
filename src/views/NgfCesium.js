import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { Link } from "react-router-dom";
import NgfHeroLayout from "./NgfHeroLayout";
//import ngflogoImage from "../images/ngflogoImage3.png";
import ngflogo_marker from "../images/ngflogo_marker.png";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Cesium from "cesium";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhODBjOTFlNi04MmQ3LTQwNWUtOGUxMy05N2ZjOTQ2OWJiNWMiLCJpZCI6MTI5NjksInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1NjIyNTExNTF9.sp6bn2eKUSCKK1yXjlnqqzI0XL0YRgyM5sqb9T4Qnp0";

const backgroundImage = "https://arvibe.xyz/testphotos/ngf-bkg.png";

function NgfHero(props) {
  const { classes } = props;

  //const [count, setCount] = useState(0);

  useEffect(() => {
    //Create the Cesium viewer
    const viewer = new Cesium.Viewer("cesiumContainer", {
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

    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
      billboard: {
        image: ngflogo_marker
      }
    });
  });

  return (
    <NgfHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      {/* <img
        style={{
          display: "inline",
          height: "300px",
          width: "300px",
          marginTop: "100px"
        }}
        src={ngflogoImage}
        alt=""
    /> */}
      <div
        id="cesiumContainer"
        style={{
          position: "absolute",
          bottom: "200px",
          height: "500px",
          width: "500px"
        }}
      />

      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for commodity"
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
        Example: Cannabis
      </Typography>
      <span style={{ marginBottom: "75px" }}>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} to="/" variant="button" />
          )}
        >
          Back
        </Button>{" "}
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
        >
          Next
        </Button>
      </span>
    </NgfHeroLayout>
  );
}

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
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginTop: 700
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

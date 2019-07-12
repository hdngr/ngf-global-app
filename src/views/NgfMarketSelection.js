import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, useTheme } from "@material-ui/core/styles";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import backgroundImage from "../images/ngf_background.png";
import NgfHeroLayout from "./NgfHeroLayout";
import Grid from "@material-ui/core/Grid";
import Button from "../components/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function NgfMarketSelection(props) {
  const { classes } = props;
  const theme = useTheme();

  function getStyles(name: string, type: string[], theme: Theme) {
    return {
      fontWeight:
        type.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  const [commodityType, setCommodityType] = useState([]);
  const [landType, setLandType] = useState([]);
  const [equipmentType, setEquipmentType] = useState([]);

  function handleChange1(event: React.ChangeEvent<{ value: unknown }>) {
    setCommodityType(event.target.value);
  }
  function handleChange2(event: React.ChangeEvent<{ value: unknown }>) {
    setLandType(event.target.value);
  }
  function handleChange3(event: React.ChangeEvent<{ value: unknown }>) {
    setEquipmentType(event.target.value);
  }

  const names = ["Organic", "Conventional", "What else to add in list?"];
  const equipment = [
    "Tractors",
    "Combines",
    "Headers",
    "Harvest Equipment",
    "Chemical Applicators",
    "Tillage",
    "Planting & Seeding",
    "Hay & Forage",
    "Ag Trailers",
    "Outdoor Power",
    "Other Equipment"
  ];
  return (
    <NgfHeroLayout backgroundClassName={classes.background}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        {/* <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Commodities:
        </Typography> */}

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
                <div className={classes.root2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">
                      Choose
                    </InputLabel>
                    <Select
                      multiple
                      value={commodityType}
                      onChange={handleChange1}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, commodityType, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
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
                <div className={classes.root2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">
                      Choose
                    </InputLabel>
                    <Select
                      multiple
                      value={landType}
                      onChange={handleChange2}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, landType, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
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
                <div className={classes.root2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">
                      Choose
                    </InputLabel>
                    <Select
                      multiple
                      value={equipmentType}
                      onChange={handleChange3}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={selected => (
                        <div className={classes.chips}>
                          {selected.map(value => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {equipment.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, equipmentType, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.button}
                  component={linkProps => (
                    <Link {...linkProps} to="/Location" variant="button" />
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
                    <Link {...linkProps} to="/" variant="button" />
                  )}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LayoutBody>
    </NgfHeroLayout>
  );
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
  },
  root2: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
});

NgfMarketSelection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NgfMarketSelection);

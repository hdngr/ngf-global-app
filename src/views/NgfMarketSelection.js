import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import backgroundImage from "../images/ngf_background.png";
import NgfHeroLayout from "./NgfHeroLayout";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { Checkbox } from "@material-ui/core";
const drawerWidth = 240;
const treeMargin = 10;
function NgfMarketSelection(props) {
  const { classes } = props;

  //Categories for the drop down menu
  const categories = ["Commodities", "Land Types", "Machinery"];
  //Commodities category
  const commodities = ["Pulses", "Oil Seeds", "Hemp"];
  //Commodites subcategories
  const pulses = ["Peas", "Lentils", "Beans", "Chickpeas"];
  const peas = ["yellow", "green"];
  const lentils = [
    "Green",
    "Red",
    "Crimson",
    "Laird",
    "Eston",
    "Impata",
    "French Green",
    "Small Brown"
  ];
  const oilseeds = [
    "Flax",
    "Canola",
    "Rapeseed",
    "Safflower",
    "Sunflower",
    "Mustard"
  ];
  const flax = ["Brown", "Gold"];
  const canola = ["Winter", "Spring"];
  const mustard = ["Brown", "Yellow"];
  const hemp = ["Hay", "CBD", "Biomass", "Isolate", "Crude", "Seed", "Clone"];
  //Land category
  const land = ["Tillage Land", "Pasture Land", "Mixed land"];
  //Land subcategories
  //const landTypes = ["For Sale", "For Lease", "Organic"];
  //Machinery category
  const machinery = [
    "Agriculture",
    "Construction",
    "Trucks & Trailers",
    "Attachments"
  ];
  //Machhinery subcategories
  const agriculture = [
    "Tractors",
    "Combines",
    "Headers",
    "Harvesting",
    "Hay & Forage",
    "Chemical Applicators",
    "Tillage",
    "Seeding & Planting",
    "Trailers"
  ];
  const construction = [
    "Skid Steers",
    "Excavator",
    "Forklifts",
    "Backhoes",
    "Accessories"
  ];
  const tnt = [
    "Trucks",
    "Flatbed",
    "Drop Deck",
    "Liquid Tanker",
    "Grain Trailer",
    "Live Bottom",
    "Reefer",
    "Dry Van",
    "Belly Dump"
  ];

  //Uses useState hook for the expansion of the different categories
  const [expanded, setExpanded] = React.useState({
    Commodities: false,
    LandTypes: false,
    Machinery: false,
    Pulses: false,
    OilSeeds: false,
    Hemp: false,
    Peas: false,
    Lentils: false,
    Flax: false,
    Canola: false,
    Mustard: false,
    Agriculture: false,
    Construction: false,
    TrucksTrailers: false
  });
  //Create an array of the object's to iterate
  const expanse = [
    expanded.Commodities,
    expanded.LandTypes,
    expanded.Machinery,
    expanded.Pulses,
    expanded.OilSeeds,
    expanded.Hemp,
    expanded.Peas,
    expanded.Lentils,
    expanded.Flax,
    expanded.Canola,
    expanded.Mustard,
    expanded.Agriculture,
    expanded.Construction,
    expanded.TrucksTrailers
  ];
  const commodMarker = 3;
  const peasMarker = 6;
  const lentilMarker = 7;
  const flaxMarker = 8;
  const agMarker = 11;

  //Hanles which category is clicked and expanse that category
  const handleExpandClick = (text, key) => e => {
    var ntext = text.replace(" ", "");
    var rtext = ntext.replace("&", "");
    console.log("key: " + key);
    setExpanded({
      ...expanded,
      [rtext.replace(" ", "")]: expanse[key] ? false : true
    });
  };

  return (
    <NgfHeroLayout backgroundClassName={classes.background}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          {categories.map((
            text,
            listkey //Categories mapped
          ) => (
            <div>
              {/* When clicked it will handle expanding the list */}
              <ListItem button onClick={handleExpandClick(text, listkey)}>
                <ListItemText primary={text} />
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanse[listkey]
                  })}
                  value={text}
                  onClick={handleExpandClick(text, listkey)} //When clicked it will handle expanding the list
                  aria-expanded={expanse[listkey]}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />{" "}
                  {/*Expand icon is located on the right of the category buttons*/}
                </IconButton>
              </ListItem>
              <Divider />
              <Collapse in={expanse[listkey]} timeout="auto" unmountOnExit>
                <List>
                  {listkey === 0
                    ? commodities.map((text, commodkey) => (
                        <div>
                          <ListItem>
                            {/*List for commodities checkboxs i.e. Pulses, Oil Seed, Hemp*/}
                            <Checkbox
                              onChange={handleExpandClick(
                                text,
                                commodkey + commodMarker //Constant commodMarker = 3
                              )}
                            />
                            {text}
                          </ListItem>
                          <Collapse
                            in={expanse[commodkey + commodMarker]}
                            timeout="auto"
                            unmountOnExit
                          >
                            {text === "Pulses"
                              ? pulses.map((text, pulsekey) => (
                                  <div>
                                    <ListItem>
                                      {/*Sub-category for pulses i.e. pease, lentil, beans */}
                                      <Checkbox
                                        style={{ marginLeft: treeMargin }}
                                        onChange={handleExpandClick(
                                          text,
                                          pulsekey + peasMarker //Constant peasMarker = 6
                                        )}
                                      />
                                      {text}
                                    </ListItem>
                                    <Collapse
                                      in={expanse[pulsekey + peasMarker]}
                                      timeout="auto"
                                      unmountOnExit
                                    >
                                      {text === "Lentils"
                                        ? lentils.map((text, lentilkey) => (
                                            <div>
                                              <ListItem>
                                                {/*Sub-category for pulses i.e. pease, lentil, beans */}
                                                <Checkbox
                                                  style={{
                                                    marginLeft: treeMargin * 4
                                                  }}
                                                  onChange={handleExpandClick(
                                                    text,
                                                    lentilkey + lentilMarker + 1
                                                  )}
                                                />
                                                {text}
                                              </ListItem>
                                              <Collapse
                                                in={
                                                  expanse[
                                                    lentilkey + lentilMarker + 1
                                                  ]
                                                }
                                                timeout="auto"
                                                unmountOnExit
                                              />
                                            </div>
                                          ))
                                        : null}
                                      {text === "Peas"
                                        ? peas.map((text, peaskey) => (
                                            <div>
                                              <ListItem>
                                                {/*Sub-category for pulses i.e. pease, lentil, beans */}
                                                <Checkbox
                                                  style={{
                                                    marginLeft: treeMargin * 4
                                                  }}
                                                  onChange={handleExpandClick(
                                                    text,
                                                    peaskey + peasMarker + 1
                                                  )}
                                                />
                                                {text}
                                              </ListItem>
                                              <Collapse
                                                in={
                                                  expanse[
                                                    peaskey + peasMarker + 1
                                                  ]
                                                }
                                                timeout="auto"
                                                unmountOnExit
                                              />
                                            </div>
                                          ))
                                        : null}
                                    </Collapse>
                                  </div>
                                ))
                              : null}
                            {text === "Oil Seeds"
                              ? oilseeds.map((text, oilseedskey) => (
                                  <div>
                                    <ListItem>
                                      <Checkbox
                                        style={{ marginLeft: treeMargin }}
                                        onChange={handleExpandClick(
                                          text,
                                          //Terinary operator to match the location of the mustard seed
                                          oilseedskey === 5
                                            ? 10
                                            : oilseedskey + flaxMarker
                                        )}
                                      />
                                      {text}
                                    </ListItem>
                                    <Collapse
                                      in={
                                        expanse[
                                          oilseedskey === 5
                                            ? 10
                                            : oilseedskey + flaxMarker
                                        ]
                                      }
                                      timeout="auto"
                                      unmountOnExit
                                    >
                                      {text === "Flax"
                                        ? flax.map((text, flaxkey) => (
                                            <div>
                                              <ListItem>
                                                <Checkbox
                                                  style={{
                                                    marginLeft: treeMargin * 4
                                                  }}
                                                  onChange={handleExpandClick(
                                                    text,
                                                    flaxkey
                                                  )}
                                                />
                                                {text}
                                              </ListItem>
                                            </div>
                                          ))
                                        : null}
                                      {text === "Canola"
                                        ? canola.map((text, canolakey) => (
                                            <div>
                                              <ListItem>
                                                <Checkbox
                                                  style={{
                                                    marginLeft: treeMargin * 4
                                                  }}
                                                  onChange={handleExpandClick(
                                                    text,
                                                    canolakey
                                                  )}
                                                />
                                                {text}
                                              </ListItem>
                                            </div>
                                          ))
                                        : null}
                                      {text === "Mustard"
                                        ? mustard.map((text, mustardkey) => (
                                            <div>
                                              <ListItem>
                                                <Checkbox
                                                  style={{
                                                    marginLeft: treeMargin * 4
                                                  }}
                                                  onChange={handleExpandClick(
                                                    text,
                                                    mustardkey
                                                  )}
                                                />
                                                {text}
                                              </ListItem>
                                            </div>
                                          ))
                                        : null}
                                    </Collapse>
                                  </div>
                                ))
                              : null}
                            {text === "Hemp"
                              ? hemp.map((text, key) => (
                                  <div>
                                    <ListItem>
                                      <Checkbox
                                        style={{ marginLeft: treeMargin }}
                                        onChange={handleExpandClick(
                                          text,
                                          key + commodMarker
                                        )}
                                      />
                                      {text}
                                    </ListItem>
                                  </div>
                                ))
                              : null}
                          </Collapse>
                        </div>
                      ))
                    : null}
                  {listkey === 1
                    ? land.map((text, landkey) => (
                        <div>
                          <ListItem>
                            <Checkbox
                              onChange={handleExpandClick(
                                text,
                                landkey + commodMarker
                              )}
                            />
                            {text}
                          </ListItem>
                          <Collapse
                            in={expanse[landkey + commodMarker]}
                            timeout="auto"
                            unmountOnExit
                          />
                        </div>
                      ))
                    : null}
                  {listkey === 2
                    ? machinery.map((text, machkey) => (
                        <div>
                          <ListItem>
                            <Checkbox
                              onChange={handleExpandClick(
                                text,
                                machkey + agMarker
                              )}
                            />
                            {text}
                          </ListItem>
                          <Collapse
                            in={expanse[machkey + agMarker]}
                            timeout="auto"
                            unmountOnExit
                          >
                            {text === "Agriculture"
                              ? agriculture.map((text, agkey) => (
                                  <div>
                                    <ListItem>
                                      <Checkbox
                                        style={{ marginLeft: treeMargin }}
                                        onChange={handleExpandClick(
                                          text,
                                          agkey
                                        )}
                                      />
                                      {text}
                                    </ListItem>
                                  </div>
                                ))
                              : null}
                            {text === "Construction"
                              ? construction.map((text, conkey) => (
                                  <div>
                                    <ListItem>
                                      <Checkbox
                                        style={{ marginLeft: treeMargin }}
                                        onChange={handleExpandClick(
                                          text,
                                          conkey
                                        )}
                                      />
                                      {text}
                                    </ListItem>
                                  </div>
                                ))
                              : null}
                            {text === "Trucks & Trailers"
                              ? tnt.map((text, tntkey) => (
                                  <div>
                                    <ListItem>
                                      <Checkbox
                                        style={{ marginLeft: treeMargin }}
                                        onChange={handleExpandClick(
                                          text,
                                          tntkey
                                        )}
                                      />
                                      {text}
                                    </ListItem>
                                  </div>
                                ))
                              : null}
                          </Collapse>
                        </div>
                      ))
                    : null}
                </List>
              </Collapse>
              <Divider />
            </div>
          ))}
        </List>
      </Drawer>
    </NgfHeroLayout>
  );
}

const styles = theme => ({
  background: {
    marginLeft: drawerWidth,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "cover",
    height: "93vh"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    marginTop: 70,
    width: drawerWidth
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

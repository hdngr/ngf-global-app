import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;
const treeMargin = 10;
function NgfDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  //Uses useState hook for the expansion of the different categories
  const [categories, setCategories] = React.useState({
    Commodities: false,
    Land: false,
    Machinery: false
  });
  const [commodities, setCommodities] = React.useState({
    Pulses: false,
    ["Oil Seeds"]: false,
    Hemp: false
  });
  const [pulses, setPulses] = React.useState({
    Peas: false,
    Lentils: false,
    Beans: false,
    Chickpeas: false
  });
  const [peas, setPeas] = React.useState({
    yellow: false,
    green: false
  });
  const [lentils, setLentils] = React.useState({
    Green: false,
    Red: false,
    ["French Green"]: false,
    ["Small Brown"]: false
  });
  const [lentilGreen, setLentilGreen] = React.useState({
    Laird: false,
    Richlea: false,
    Eston: false
  });
  const [lentilRed, setLentilRed] = React.useState({
    Crimson: false,
    Impala: false
  });
  const [oilseeds, setOilSeeds] = React.useState({
    Flax: false,
    Canola: false,
    Rapeseed: false,
    Safflower: false,
    Sunflower: false,
    Mustard: false
  });
  const [flax, setFlax] = React.useState({
    Brown: false,
    Gold: false
  });
  const [canola, setCanola] = React.useState({
    Winter: false,
    Spring: false
  });
  const [mustard, setMustard] = React.useState({
    Brown: false,
    Yellow: false
  });
  const [hemp, setHemp] = React.useState({
    Hay: false,
    CBD: false,
    Biomass: false,
    Isolate: false,
    Crude: false,
    Seed: false,
    Clone: false
  });
  const [land, setLand] = React.useState({
    Tillage: false,
    Pasture: false,
    Mixed: false
  });
  const [machinery, setMachinery] = React.useState({
    Agriculture: false,
    Construction: false,
    ["Trucks & Trailers"]: false,
    Attachments: false
  });
  const [agriculture, setAgriculture] = React.useState({
    Tractors: false,
    Combines: false,
    Headers: false,
    Harvesting: false,
    ["Hay & Forge"]: false,
    ["Chemical Applicators"]: false,
    Tillage: false,
    ["Seeding & Planting"]: false,
    Trailers: false
  });
  const [construction, setConstruction] = React.useState({
    ["Skid Steers"]: false,
    Excavotor: false,
    Forklifts: false,
    Backhoes: false,
    Accessories: false
  });
  const [truckstrailers, setTrucksTrailers] = React.useState({
    Trucks: false,
    Flatbed: false,
    ["Drop Deck"]: false,
    ["Liquid Tanker"]: false,
    ["Grain Trailer"]: false,
    ["Live Bottom"]: false,
    Reefer: false,
    ["Dry Van"]: false,
    ["Belly Dump"]: false
  });

  const handleOtherClick = text => e => {
    console.log(text);
    Object.keys(categories).map(value => {
      if (value === text) {
        console.log(value);

        setCategories({ ...categories, [value]: !categories[value] });
        console.log(categories[value]);
      }
      return value;
    });
    Object.keys(commodities).map(value => {
      if (value === text) {
        console.log(value);

        setCommodities({ ...commodities, [value]: !commodities[value] });
        console.log(commodities[value]);
      }
      return value;
    });
    Object.keys(pulses).map(value => {
      if (value === text) {
        console.log(value);

        setPulses({ ...pulses, [value]: !pulses[value] });
        console.log(pulses[value]);
      }
      return value;
    });
    Object.keys(peas).map(value => {
      if (value === text) {
        console.log(value);

        setPeas({ ...peas, [value]: !peas[value] });
        console.log(peas[value]);
      }
      return value;
    });
    Object.keys(lentils).map(value => {
      if (value === text) {
        console.log(value);

        setLentils({ ...lentils, [value]: !lentils[value] });
        console.log(lentils[value]);
      }
      return value;
    });
    Object.keys(lentilGreen).map(value => {
      if (value === text) {
        console.log(value);

        setLentilGreen({ ...lentilGreen, [value]: !lentilGreen[value] });
        console.log(lentilGreen[value]);
      }
      return value;
    });
    Object.keys(lentilRed).map(value => {
      if (value === text) {
        console.log(value);

        setLentilRed({ ...lentilRed, [value]: !lentilRed[value] });
        console.log(lentilRed[value]);
      }
      return value;
    });
    Object.keys(oilseeds).map(value => {
      if (value === text) {
        console.log(value);

        setOilSeeds({ ...oilseeds, [value]: !oilseeds[value] });
        console.log(oilseeds[value]);
      }
      return value;
    });
    Object.keys(flax).map(value => {
      if (value === text) {
        console.log(value);

        setFlax({ ...flax, [value]: !flax[value] });
        console.log(flax[value]);
      }
      return value;
    });
    Object.keys(canola).map(value => {
      if (value === text) {
        console.log(value);

        setCanola({ ...canola, [value]: !canola[value] });
        console.log(canola[value]);
      }
      return value;
    });
    Object.keys(mustard).map(value => {
      if (value === text) {
        console.log(value);

        setMustard({ ...mustard, [value]: !mustard[value] });
        console.log(mustard[value]);
      }
      return value;
    });
    Object.keys(hemp).map(value => {
      if (value === text) {
        console.log(value);

        setHemp({ ...hemp, [value]: !hemp[value] });
        console.log(hemp[value]);
      }
      return value;
    });
    Object.keys(land).map(value => {
      if (value === text) {
        console.log(value);

        setLand({ ...land, [value]: !land[value] });
        console.log(land[value]);
      }
      return value;
    });
    Object.keys(machinery).map(value => {
      if (value === text) {
        console.log(value);

        setMachinery({ ...machinery, [value]: !machinery[value] });
        console.log(machinery[value]);
      }
      return value;
    });
    Object.keys(agriculture).map(value => {
      if (value === text) {
        console.log(value);

        setAgriculture({ ...agriculture, [value]: !agriculture[value] });
        console.log(agriculture[value]);
      }
      return value;
    });
    Object.keys(construction).map(value => {
      if (value === text) {
        console.log(value);

        setConstruction({
          ...construction,
          [value]: !construction[value]
        });
        console.log(construction[value]);
      }
      return value;
    });
    Object.keys(truckstrailers).map(value => {
      if (value === text) {
        console.log(value);

        setTrucksTrailers({
          ...truckstrailers,
          [value]: !truckstrailers[value]
        });
        console.log(truckstrailers[value]);
      }
      return value;
    });
  };

  const drawer = (
    <List>
      {Object.keys(categories).map(category => (
        <div>
          {/* When clicked it will handle expanding the list */}
          <ListItem button onClick={handleOtherClick(category)}>
            <ListItemText primary={category} />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: categories[category]
              })}
              value={category}
              onClick={handleOtherClick(category)} //When clicked it will handle expanding the list
              aria-expanded={categories[category]}
              aria-label="Show more"
            >
              <ExpandMoreIcon />{" "}
              {/*Expand icon is located on the right of the category buttons*/}
            </IconButton>
          </ListItem>
          <Divider />
          <Collapse in={categories[category]} timeout="auto" unmountOnExit>
            <List>
              {category === "Commodities"
                ? Object.keys(commodities).map((commod, index) => (
                    <div>
                      <ListItem>
                        {/*List for commodities checkboxs i.e. Pulses, Oil Seed, Hemp*/}
                        <Checkbox
                          checked={commodities[commod]}
                          onChange={handleOtherClick(commod)}
                        />
                        {commod}
                      </ListItem>
                      <Collapse
                        in={commodities[commod]}
                        timeout="auto"
                        unmountOnExit
                      >
                        {commod === "Pulses"
                          ? Object.keys(pulses).map((pulse, index) => (
                              <div>
                                <ListItem>
                                  {/*Sub-category for pulses i.e. pease, lentil, beans */}
                                  <Checkbox
                                    style={{ marginLeft: treeMargin }}
                                    checked={pulses[pulse]}
                                    onChange={handleOtherClick(
                                      pulse
                                      //Constant peasMarker = 6
                                    )}
                                  />
                                  {pulse}
                                </ListItem>
                                <Collapse
                                  in={pulses[pulse]}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  {pulse === "Lentils"
                                    ? Object.keys(lentils).map(lentil => (
                                        <div>
                                          <ListItem>
                                            {/*Sub-category for pulses i.e. pease, lentil, beans */}
                                            <Checkbox
                                              checked={lentils[lentil]}
                                              style={{
                                                marginLeft: treeMargin * 4
                                              }}
                                              onChange={handleOtherClick(
                                                lentil
                                              )}
                                            />
                                            {lentil}
                                          </ListItem>
                                          <Collapse
                                            in={lentils[lentil]}
                                            timeout="auto"
                                            unmountOnExit
                                          >
                                            {lentil === "Green"
                                              ? Object.keys(lentilGreen).map(
                                                  lg => (
                                                    <div>
                                                      <ListItem>
                                                        <Checkbox
                                                          checked={
                                                            lentilGreen[lg]
                                                          }
                                                          style={{
                                                            marginLeft:
                                                              treeMargin * 8
                                                          }}
                                                          onChange={handleOtherClick(
                                                            lg
                                                          )}
                                                        />
                                                        {lg}
                                                      </ListItem>
                                                    </div>
                                                  )
                                                )
                                              : null}
                                            {lentil === "Red"
                                              ? Object.keys(lentilRed).map(
                                                  lr => (
                                                    <div>
                                                      <ListItem>
                                                        <Checkbox
                                                          checked={
                                                            lentilRed[lr]
                                                          }
                                                          style={{
                                                            marginLeft:
                                                              treeMargin * 8
                                                          }}
                                                          onChange={handleOtherClick(
                                                            lr
                                                          )}
                                                        />
                                                        {lr}
                                                      </ListItem>
                                                    </div>
                                                  )
                                                )
                                              : null}
                                          </Collapse>
                                        </div>
                                      ))
                                    : null}
                                  {pulse === "Peas"
                                    ? Object.keys(peas).map(pea => (
                                        <div>
                                          <ListItem>
                                            {/*Sub-category for pulses i.e. pease, lentil, beans */}
                                            <Checkbox
                                              checked={peas[pea]}
                                              style={{
                                                marginLeft: treeMargin * 4
                                              }}
                                              onChange={handleOtherClick(pea)}
                                            />
                                            {pea}
                                          </ListItem>
                                          <Collapse
                                            in={null}
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
                        {commod === "Oil Seeds"
                          ? Object.keys(oilseeds).map(oilseed => (
                              <div>
                                <ListItem>
                                  <Checkbox
                                    checked={oilseeds[oilseed]}
                                    style={{ marginLeft: treeMargin }}
                                    onChange={handleOtherClick(oilseed)}
                                  />
                                  {oilseed}
                                </ListItem>
                                <Collapse
                                  in={oilseeds[oilseed]}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  {oilseed === "Flax"
                                    ? Object.keys(flax).map(fx => (
                                        <div>
                                          <ListItem>
                                            <Checkbox
                                              checked={flax[fx]}
                                              style={{
                                                marginLeft: treeMargin * 4
                                              }}
                                              onChange={handleOtherClick(fx)}
                                            />
                                            {fx}
                                          </ListItem>
                                        </div>
                                      ))
                                    : null}
                                  {oilseed === "Canola"
                                    ? Object.keys(canola).map(ca => (
                                        <div>
                                          <ListItem>
                                            <Checkbox
                                              checked={canola[ca]}
                                              style={{
                                                marginLeft: treeMargin * 4
                                              }}
                                              onChange={handleOtherClick(ca)}
                                            />
                                            {ca}
                                          </ListItem>
                                        </div>
                                      ))
                                    : null}
                                  {oilseed === "Mustard"
                                    ? Object.keys(mustard).map(md => (
                                        <div>
                                          <ListItem>
                                            <Checkbox
                                              checked={mustard[md]}
                                              style={{
                                                marginLeft: treeMargin * 4
                                              }}
                                              onChange={handleOtherClick(md)}
                                            />
                                            {md}
                                          </ListItem>
                                        </div>
                                      ))
                                    : null}
                                </Collapse>
                              </div>
                            ))
                          : null}
                        {commod === "Hemp"
                          ? Object.keys(hemp).map(hp => (
                              <div>
                                <ListItem>
                                  <Checkbox
                                    checked={hemp[hp]}
                                    style={{ marginLeft: treeMargin }}
                                    onChange={handleOtherClick(hp)}
                                  />
                                  {hp}
                                </ListItem>
                              </div>
                            ))
                          : null}
                      </Collapse>
                    </div>
                  ))
                : null}
              {category === "Land"
                ? Object.keys(land).map(ld => (
                    <div>
                      <ListItem>
                        <Checkbox
                          checked={land[ld]}
                          onChange={handleOtherClick(ld)}
                        />
                        {ld}
                      </ListItem>
                      <Collapse in={land[ld]} timeout="auto" unmountOnExit />
                    </div>
                  ))
                : null}
              {category === "Machinery"
                ? Object.keys(machinery).map(mh => (
                    <div>
                      <ListItem>
                        <Checkbox
                          checked={machinery[mh]}
                          onChange={handleOtherClick(mh)}
                        />
                        {mh}
                      </ListItem>
                      <Collapse in={machinery[mh]} timeout="auto" unmountOnExit>
                        {mh === "Agriculture"
                          ? Object.keys(agriculture).map(ag => (
                              <div>
                                <ListItem>
                                  <Checkbox
                                    checked={agriculture[ag]}
                                    style={{ marginLeft: treeMargin }}
                                    onChange={handleOtherClick(ag)}
                                  />
                                  {ag}
                                </ListItem>
                              </div>
                            ))
                          : null}
                        {mh === "Construction"
                          ? Object.keys(construction).map(ct => (
                              <div>
                                <ListItem>
                                  <Checkbox
                                    checked={construction[ct]}
                                    style={{ marginLeft: treeMargin }}
                                    onChange={handleOtherClick(ct)}
                                  />
                                  {ct}
                                </ListItem>
                              </div>
                            ))
                          : null}
                        {mh === "Trucks & Trailers"
                          ? Object.keys(truckstrailers).map(tnt => (
                              <div>
                                <ListItem>
                                  <Checkbox
                                    checked={truckstrailers[tnt]}
                                    style={{ marginLeft: treeMargin }}
                                    onChange={handleOtherClick(tnt)}
                                  />
                                  {tnt}
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
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ color: theme.palette.secondary.light }}
            variant="h6"
            noWrap
            align="center"
          >
            NGF-Global Marketplace
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperMobile
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
    height: 10,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 0
    }
  },
  drawerPaper: {
    position: "absolute",
    top: 310, //310
    width: drawerWidth,
    zIndex: 0
  },
  drawerPaperMobile: {
    marginTop: 60,
    width: drawerWidth,
    zIndex: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  appBar: {
    backgroundColor: theme.palette.primary.sub,
    alignItems: "center"
  }
}));

export default NgfDrawer;

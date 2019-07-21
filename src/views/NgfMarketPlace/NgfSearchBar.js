import React, { ScrollView } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import NGFLogo from "../../images/ngflogoImage3.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import LandscapeIcon from "@material-ui/icons/Landscape";
import BuildIcon from "@material-ui/icons/Build";
import NgfIcon from "../../images/ngfIcon.png";
import NgfIconWhite from "../../images/ngfIconWhite.png";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import BushelIcon from "@material-ui/icons/FilterVintage";
import OrganicIcon from "@material-ui/icons/BrightnessLow";
import GmoIcon from "@material-ui/icons/BubbleChart";
import SaleIcon from "@material-ui/icons/MonetizationOn";
import Searches from "../../const/searches";
import sCommodities from "../../const/commodities";
import sLand from "../../const/land";
import sMachinery from "../../const/machinery";

var dropdownDelay;
export default function NgfSearchBar(props) {
  const classes = useStyles();
  const items = Searches;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [banchorEl, setBAnchorEl] = React.useState(null);
  const [ganchorEl, setGAnchorEl] = React.useState(null);
  const [oanchorEl, setOAnchorEl] = React.useState(null);
  const [lanchorEl, setLAnchorEl] = React.useState(null);
  const [manchorEl, setMAnchorEl] = React.useState(null);
  const [dropanchorel, setDropDownAnchorEl] = React.useState(null);
  const [suggestions, setSuggestions] = React.useState(null);
  const [text, setText] = React.useState("");
  const [listedTypes, setListedTypes] = React.useState({
    type: "Listing Type",
    bushels: "Select Bushels",
    price: "Select Price Range",
    gmo: "GMO",
    organic: "Organic",
    land: "Select Buy/Lease",
    machinery: "Select Buy/Rent/Lease"
  });
  const onTextChanged = e => {
    const currentTarget = e.currentTarget;
    const value = e.target.value;
    clearTimeout(dropdownDelay);
    //console.log(value);
    let suggestions = "";
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(v => regex.test(v));
      //console.log("suggestion: " + suggestions);
    }
    setSuggestions(...[], suggestions);
    setText(value);
    if (suggestions.length < 1) {
      return;
    }
    if (sCommodities.includes(value)) {
      handleListingClick("Commodities", e);
    }
    if (sLand.includes(value)) {
      handleListingClick("Land", e);
    }
    if (sMachinery.includes(value)) {
      handleListingClick("Machinery", e);
    }

    dropdownDelay = setTimeout(() => setDropDownAnchorEl(currentTarget), 1000);
  };

  function suggestionSelected(value) {
    setText(value);
    if (sCommodities.includes(value)) {
      handleListingClick("Commodities", null);
    }
    if (sLand.includes(value)) {
      handleListingClick("Land", null);
    }
    if (sMachinery.includes(value)) {
      handleListingClick("Machinery", null);
    }
    setSuggestions(null);
  }
  function renderSuggestions() {
    if (suggestions === null || suggestions === "") {
      return null;
    }
    //console.log(suggestions);
    return (
      <StyledMenu
        id="dropdown-menu"
        elevation={0}
        getContentAnchorEl={null}
        anchorEl={dropanchorel}
        keepMounted
        onKeyDown={event => handleCloseDropDown(event)}
        open={Boolean(dropanchorel)}
        onClose={handleCloseDropDown}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        {suggestions.map((item, i) => (
          <StyledMenuItem
            style={{
              width: 250,
              whitespace: "normal"
            }}
            onClick={() => suggestionSelected(item)}
          >
            <ListItemText key={i}>
              <Typography variant="h5">{item}</Typography>
            </ListItemText>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    );
  }
  function handleClick(event) {
    switch (event.currentTarget.value) {
      case "listing type":
        setAnchorEl(event.currentTarget);
        break;
      case "bushel/price":
        setBAnchorEl(event.currentTarget);
        break;
      case "GMO":
        setGAnchorEl(event.currentTarget);
        break;
      case "Organic":
        setOAnchorEl(event.currentTarget);
        break;
      case "Land":
        setLAnchorEl(event.currentTarget);
        break;
      case "Machinery":
        setMAnchorEl(event.currentTarget);
        break;
      default:
        break;
    }
  }
  function handleClose() {
    setAnchorEl(null);
    setBAnchorEl(null);
    setGAnchorEl(null);
    setOAnchorEl(null);
    setLAnchorEl(null);
    setMAnchorEl(null);
  }
  function handleCloseDropDown(event) {
    if (event.keyCode === 40 || event.keyCode === 38) {
      return;
    }
    setDropDownAnchorEl(null);
  }
  function handleListingClick(listing, e) {
    //console.log("listing updated");
    setListedTypes({ ...listedTypes, type: listing });
    handleClose();
  }
  const handleBushelClick = bushel => e => {
    setListedTypes({ ...listedTypes, bushels: bushel });
    handleClose();
  };
  const handlePriceClick = (price, from) => e => {
    setListedTypes({ ...listedTypes, price: price });
    handleClose();
  };
  const handleGmoClick = GMO => e => {
    setListedTypes({ ...listedTypes, gmo: GMO });
    handleClose();
  };
  const handleOrganicClick = organic => e => {
    setListedTypes({ ...listedTypes, organic: organic });
    handleClose();
  };
  const handleLandClick = land => e => {
    setListedTypes({ ...listedTypes, land: land });
    handleClose();
  };
  const handleMachineryClick = machinery => e => {
    setListedTypes({ ...listedTypes, machinery: machinery });
    handleClose();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* 

                Search Bar

        */}
        <Toolbar className={classes.searchbar}>
          <div className={classes.left}>
            <div className={classes.search} ß>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              {/* 

                Search Input

               */}
              <InputBase
                value={text}
                onChange={onTextChanged}
                type="text"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "Search" }}
              />
            </div>
            <div className={classes.search}>
              <Typography variant="h5" noWrap>
                {renderSuggestions()}
              </Typography>
            </div>
            {/* 

                Listings Button

            */}
            <Button
              className={classes.searchButton}
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              value="listing type"
              onClick={handleClick}
            >
              {listedTypes.type === "Commodities" ? (
                <img className={classes.ngfIcon} alt="ngf" src={NgfIconWhite} />
              ) : null}
              {listedTypes.type === "Land" ? <LandscapeIcon /> : null}
              {listedTypes.type === "Machinery" ? <BuildIcon /> : null}
              <Typography variant="h5" noWrap>
                {listedTypes.type}
              </Typography>
            </Button>
            {/* 

                Listings Menu

            */}
            <StyledMenu
              id="customized-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem
                onClick={event => handleListingClick("Commodities", event)}
              >
                <ListItemIcon>
                  <img className={classes.ngfIcon} alt="ngf" src={NgfIcon} />
                </ListItemIcon>
                <ListItemText primary="Commodities" />
              </StyledMenuItem>
              <StyledMenuItem
                onClick={event => handleListingClick("Land", event)}
              >
                <ListItemIcon>
                  <LandscapeIcon />
                </ListItemIcon>
                <ListItemText primary="Land" />
              </StyledMenuItem>
              <StyledMenuItem
                onClick={event => handleListingClick("Machinery", event)}
              >
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Machinery" />
              </StyledMenuItem>
            </StyledMenu>
            {/* 

                 Bushel/Price Button
                 GMO Button
                 Organic Button


            */}
            {listedTypes.type === "Commodities" ||
            listedTypes.type === "Land" ||
            listedTypes.type === "Machinery" ? (
              <Button
                className={classes.searchButton}
                aria-controls="bushel-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                value="bushel/price"
                onClick={handleClick}
              >
                {listedTypes.type === "Commodities" ? (
                  <BushelIcon />
                ) : (
                  <MoneyIcon />
                )}

                <Typography variant="h5" noWrap>
                  {listedTypes.type === "Commodities"
                    ? listedTypes.bushels
                    : listedTypes.price}
                </Typography>
              </Button>
            ) : null}
            {listedTypes.type === "Commodities" ? (
              <Button
                className={classes.searchButton}
                aria-controls="gmo-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                value="GMO"
                onClick={handleClick}
              >
                <GmoIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.gmo}
                </Typography>
              </Button>
            ) : null}
            {listedTypes.type === "Commodities" ? (
              <Button
                className={classes.searchButton}
                aria-controls="organic-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                value="Organic"
                onClick={handleClick}
              >
                <OrganicIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.organic}
                </Typography>
              </Button>
            ) : null}
            {/* 

                Land Button

            */}
            {listedTypes.type === "Land" ? (
              <Button
                className={classes.searchButton}
                aria-controls="land-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                value="Land"
                onClick={handleClick}
              >
                <SaleIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.land}
                </Typography>
              </Button>
            ) : null}
            {/* 

                Machinery Button

            */}
            {listedTypes.type === "Machinery" ? (
              <Button
                className={classes.searchButton}
                aria-controls="machinery-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                value="Machinery"
                onClick={handleClick}
              >
                <SaleIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.machinery}
                </Typography>
              </Button>
            ) : null}
            {/* 

                Bushel/Price Dropdown Menu

            */}
            <StyledMenu
              id="bushel-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={banchorEl}
              keepMounted
              open={Boolean(banchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem
                onClick={
                  listedTypes.type === "Commodities"
                    ? handleBushelClick("1,000 - 5,000")
                    : null || listedTypes.type === "Land"
                    ? handlePriceClick("1,000 - 5,000", listedTypes.type)
                    : null || listedTypes.type === "Machinery"
                    ? handlePriceClick("1,000 - 5,000", listedTypes.type)
                    : null
                }
              >
                <ListItemIcon>
                  {listedTypes.type === "Commodities" ? (
                    <BushelIcon />
                  ) : (
                    <MoneyIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="1,000 - 5,000" />
              </StyledMenuItem>
              <StyledMenuItem
                onClick={
                  listedTypes.type === "Commodities"
                    ? handleBushelClick("5,000 - 10,000")
                    : null || listedTypes.type === "Land"
                    ? handlePriceClick("5,000 - 10,000")
                    : null || listedTypes.type === "Machinery"
                    ? handlePriceClick("5,000 - 10,000")
                    : null
                }
              >
                <ListItemIcon>
                  {listedTypes.type === "Commodities" ? (
                    <BushelIcon />
                  ) : (
                    <MoneyIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="5,000 - 10,000" />
              </StyledMenuItem>
              <StyledMenuItem
                onClick={
                  listedTypes.type === "Commodities"
                    ? handleBushelClick("10,000 - 50,000")
                    : null || listedTypes.type === "Land"
                    ? handlePriceClick("10,000 - 50,000")
                    : null || listedTypes.type === "Machinery"
                    ? handlePriceClick("10,000 - 50,000")
                    : null
                }
              >
                <ListItemIcon>
                  {listedTypes.type === "Commodities" ? (
                    <BushelIcon />
                  ) : (
                    <MoneyIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="10,000 - 50,0000" />
              </StyledMenuItem>
            </StyledMenu>
            {/* 

                GMO Dropdown Menu

            */}
            <StyledMenu
              id="gmo-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={ganchorEl}
              keepMounted
              open={Boolean(ganchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem onClick={handleGmoClick("GMO")}>
                <ListItemIcon>
                  <GmoIcon />
                </ListItemIcon>
                <ListItemText primary="GMO" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleGmoClick("Non-GMO")}>
                <ListItemIcon>
                  <GmoIcon />
                </ListItemIcon>
                <ListItemText primary="Non-GMO" />
              </StyledMenuItem>
            </StyledMenu>
            {/* 

                Organic Dropdown Menu

            */}
            <StyledMenu
              id="organic-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={oanchorEl}
              keepMounted
              open={Boolean(oanchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem onClick={handleOrganicClick("Organic")}>
                <ListItemIcon>
                  <OrganicIcon />
                </ListItemIcon>
                <ListItemText primary="Organic" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleOrganicClick("Non-Organic")}>
                <ListItemIcon>
                  <OrganicIcon />
                </ListItemIcon>
                <ListItemText primary="Non-Organic" />
              </StyledMenuItem>
            </StyledMenu>
            {/* 

                Land Dropdown Menu

            */}
            <StyledMenu
              id="land-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={lanchorEl}
              keepMounted
              open={Boolean(lanchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem onClick={handleLandClick("Buy")}>
                <ListItemIcon>
                  <SaleIcon />
                </ListItemIcon>
                <ListItemText primary="Buy" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleLandClick("Lease")}>
                <ListItemIcon>
                  <SaleIcon />
                </ListItemIcon>
                <ListItemText primary="Lease" />
              </StyledMenuItem>
            </StyledMenu>
            {/* 

                Machinery Dropdown Menu

            */}
            <StyledMenu
              id="machinery-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={manchorEl}
              keepMounted
              open={Boolean(manchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem onClick={handleMachineryClick("Buy")}>
                <ListItemIcon>
                  <SaleIcon />
                </ListItemIcon>
                <ListItemText primary="Buy" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMachineryClick("Rent")}>
                <ListItemIcon>
                  <SaleIcon />
                </ListItemIcon>
                <ListItemText primary="Rent" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleMachineryClick("Lease")}>
                <ListItemIcon>
                  <SaleIcon />
                </ListItemIcon>
                <ListItemText primary="Lease" />
              </StyledMenuItem>
            </StyledMenu>
          </div>

          <div className={classes.right} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    boxShadow: "0 0 0 1px #7bb737"
  }
})(Menu);

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  baseButtons: {
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(3),
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  title: {
    fontSize: 24,
    fontStyle: "none",
    color: theme.palette.secondary.main
  },
  searchbar: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "Black"
  },
  left: {
    flex: 1.5
  },
  right: {
    flex: 0.5,
    display: "flex",
    justifyContent: "flex-end"
  },
  pipe: {
    marginRight: theme.spacing(2)
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: 50,
    maxHeight: 50,
    marginRight: 10
    //borderRadius: "10px"
  },
  search: {
    position: "relative",
    display: "inline-flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.secondary.main, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.25)
    },
    //marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.main
  },
  inputRoot: {
    color: theme.palette.primary.main
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    fontSize: 18,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    marginBottom: 4,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light
  },
  ngfIcon: {
    width: 25,
    height: 25
  }
}));

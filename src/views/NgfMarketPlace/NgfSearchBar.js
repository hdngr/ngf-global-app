import React from "react";
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
export default function NgfSearchBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [banchorEl, setBAnchorEl] = React.useState(null);
  const [ganchorEl, setGAnchorEl] = React.useState(null);
  const [oanchorEl, setOAnchorEl] = React.useState(null);
  const [lanchorEl, setLAnchorEl] = React.useState(null);
  const [manchorEl, setMAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick2(event) {
    setBAnchorEl(event.currentTarget);
  }

  function handleClose2() {
    setBAnchorEl(null);
  }
  function handleClick3(event) {
    setGAnchorEl(event.currentTarget);
  }

  function handleClose3() {
    setGAnchorEl(null);
  }
  function handleClick4(event) {
    setOAnchorEl(event.currentTarget);
  }

  function handleClose4() {
    setOAnchorEl(null);
  }
  function handleClick5(event) {
    setLAnchorEl(event.currentTarget);
  }

  function handleClose5() {
    setLAnchorEl(null);
  }
  function handleClick6(event) {
    setMAnchorEl(event.currentTarget);
  }

  function handleClose6() {
    setMAnchorEl(null);
  }

  const [listedTypes, setListedTypes] = React.useState({
    type: "Listing Type",
    bushels: "Bushels",
    gmo: "GMO",
    organic: "Organic",
    land: "select sale",
    machinery: "select sale"
  });

  const handleListingClick = listing => e => {
    setListedTypes({ ...listedTypes, type: listing });
    handleClose();
  };
  const handleBushelClick = bushel => e => {
    setListedTypes({ ...listedTypes, bushels: bushel });
    handleClose2();
  };
  const handleGmoClick = GMO => e => {
    setListedTypes({ ...listedTypes, gmo: GMO });
    handleClose3();
  };
  const handleOrganicClick = organic => e => {
    setListedTypes({ ...listedTypes, organic: organic });
    handleClose4();
  };
  const handleLandClick = land => e => {
    setListedTypes({ ...listedTypes, land: land });
    handleClose5();
  };
  const handleMachineryClick = machinery => e => {
    setListedTypes({ ...listedTypes, machinery: machinery });
    handleClose6();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* 

                Search Bar

        */}
        <Toolbar className={classes.searchbar}>
          <div className={classes.left}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "Search" }}
              />
            </div>
            <Button
              className={classes.searchButton}
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
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
              <StyledMenuItem onClick={handleListingClick("Commodities")}>
                <ListItemIcon>
                  <img className={classes.ngfIcon} alt="ngf" src={NgfIcon} />
                </ListItemIcon>
                <ListItemText primary="Commodities" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleListingClick("Land")}>
                <ListItemIcon>
                  <LandscapeIcon />
                </ListItemIcon>
                <ListItemText primary="Land" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleListingClick("Machinery")}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Machinery" />
              </StyledMenuItem>
            </StyledMenu>

            {listedTypes.type === "Commodities" ? (
              <Button
                className={classes.searchButton}
                aria-controls="bushel-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick2}
              >
                <BushelIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.bushels}
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
                onClick={handleClick3}
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
                onClick={handleClick4}
              >
                <OrganicIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.organic}
                </Typography>
              </Button>
            ) : null}
            {listedTypes.type === "Land" ? (
              <Button
                className={classes.searchButton}
                aria-controls="land-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick5}
              >
                <SaleIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.land}
                </Typography>
              </Button>
            ) : null}
            {listedTypes.type === "Machinery" ? (
              <Button
                className={classes.searchButton}
                aria-controls="machinery-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick6}
              >
                <SaleIcon />
                <Typography variant="h5" noWrap>
                  {listedTypes.machinery}
                </Typography>
              </Button>
            ) : null}

            <StyledMenu
              id="bushel-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={banchorEl}
              keepMounted
              open={Boolean(banchorEl)}
              onClose={handleClose2}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <StyledMenuItem onClick={handleBushelClick("1,000 - 5,000")}>
                <ListItemIcon>
                  <BushelIcon />
                </ListItemIcon>
                <ListItemText primary="1,000 - 5,000" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleBushelClick("5,000 - 10,000")}>
                <ListItemIcon>
                  <BushelIcon />
                </ListItemIcon>
                <ListItemText primary="5,000 - 10,000" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleBushelClick("10,000 - 50,000")}>
                <ListItemIcon>
                  <BushelIcon />
                </ListItemIcon>
                <ListItemText primary="10,000 - 50,0000" />
              </StyledMenuItem>
            </StyledMenu>

            <StyledMenu
              id="gmo-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={ganchorEl}
              keepMounted
              open={Boolean(ganchorEl)}
              onClose={handleClose3}
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

            <StyledMenu
              id="organic-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={oanchorEl}
              keepMounted
              open={Boolean(oanchorEl)}
              onClose={handleClose4}
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
            <StyledMenu
              id="land-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={lanchorEl}
              keepMounted
              open={Boolean(lanchorEl)}
              onClose={handleClose5}
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

            <StyledMenu
              id="machinery-menu"
              elevation={0}
              getContentAnchorEl={null}
              anchorEl={manchorEl}
              keepMounted
              open={Boolean(manchorEl)}
              onClose={handleClose6}
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
    border: "1px solid #d3d4d5"
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
  toolbar: {
    justifyContent: "flex-end",
    backgroundColor: theme.palette.secondary.light
  },
  searchbar: {
    backgroundColor: theme.palette.secondary.light,
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
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light
  },
  ngfIcon: {
    width: 25,
    height: 25
  }
}));

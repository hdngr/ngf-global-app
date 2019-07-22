import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import NGFLogo from "../../images/ngflogoImage3.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  baseButtons: {
    "&:hover": {
      color: fade(theme.palette.primary.sub, 0.75)
    },
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
    backgroundColor: "#ffffff"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  pipe: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2)
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: 50,
    maxHeight: 50,
    marginRight: 10
    //borderRadius: "10px"
  }
}));

export default function NgfAppBar() {
  const matches = useMediaQuery("(min-width:600px)");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* 
        
                AppBar
        
        */}
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <ButtonBase>
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                Buy
              </Typography>
            </ButtonBase>
            <ButtonBase>
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                Sell
              </Typography>
            </ButtonBase>
            <ButtonBase>
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                Lease
              </Typography>
            </ButtonBase>
            <ButtonBase>
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                NGF Agent
              </Typography>
            </ButtonBase>
          </div>
          <img className={classes.img} alt="ngflogo" src={NGFLogo} />
          <Typography variant="h5" color="inherit" className={classes.title}>
            NGF-Global
          </Typography>

          <div className={classes.right}>
            <ButtonBase color="inherit">
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                Add a listing
              </Typography>
            </ButtonBase>

            <Typography className={classes.pipe} variant="h5" noWrap>
              {matches === false ? "" : "|"}
            </Typography>

            <ButtonBase
              color="inherit"
              component={linkProps => (
                <Link {...linkProps} to="/Login" variant="button" />
              )}
            >
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                Sign in or Join
              </Typography>
            </ButtonBase>

            <Typography className={classes.pipe} variant="h5" noWrap>
              {matches === false ? "" : "|"}
            </Typography>

            <ButtonBase color="inherit">
              <Typography className={classes.baseButtons} variant="h5" noWrap>
                Help
              </Typography>
            </ButtonBase>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MuiLink from "@material-ui/core/Link"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  },
  title: {
    fontSize: "1.4rem",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.25em",
    },
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: ".5em",
  },
  drawerIconCtr: {
    marginLeft: "auto",
  },
  tab: {
    minWidth: 10,
    fontSize: "1rem",
    opacity: 1,
    "& .MuiTab-Root": {
      minWidth: 10,
    },
  },
  tabRoot: {
    minWidth: 10,
  },
  tabSecondary: {
    fontSize: "1rem",
    color: theme.palette.secondary.main,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    ...theme.typography.h6,
  },
  drawerItem: {
    color: theme.palette.secondary.light,
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: 500,
    opacity: 0.9,
    padding: ".25em 1em",
  },
  drawerItemSecondary: {
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: 900,
    opacity: 0.95,
    padding: ".25em 1em",
  },
}))

export default function Navbar() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = React.useState(false)

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <List disablePadding>
          <ListItem
            divider
            button
            component={Link}
            to="/login"
            title="Link to Login Page"
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Sign In
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/register"
            title="Link to Register Page"
            style={{ display: "block" }}
            onClick={() => {
              setOpenDrawer(false)
            }}
          >
            <ListItemText
              className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
              disableTypography
            >
              Sign Up
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <div className={classes.right}>
        <IconButton
          aria-label="navigation menu"
          className={classes.drawerIconCtr}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <MenuIcon style={{ color: theme.palette.secondary.light }} />
        </IconButton>
      </div>
    </>
  )

  const tabs = (
    <>
      <div className={classes.right}>
        <Tabs
          value={1}
          className={classes.tabContainer}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab
            className={`${classes.tab}`}
            component={Link}
            to="/login"
            label="Sign In"
            aria-label="Sign In Button"
            variant="h6"
            underline="none"
            color="inherit"
            disableRipple
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            className={`${classes.tab}, ${classes.tabSecondary}`}
            classes={{ root: classes.tabRoot }}
            component={Link}
            to="/register"
            label="Sign Up"
            aria-label="Sign Up Button"
            variant="h6"
            underline="none"
            disableRipple
          />
        </Tabs>
      </div>
    </>
  )

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <div className={classes.left} />
          <MuiLink
            component={Link}
            to="/"
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.title}
          >
            OneSnappy
          </MuiLink>
          {matchesXS ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

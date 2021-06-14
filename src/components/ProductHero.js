import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Button from "./Utils/Button"
import Typography from "./Utils/Typography"
import ProductHeroLayout from "./ProductHeroLayout"
import PoolVideo from "../assets/videos/dynamicProductHero.mp4"
import PoolPlaceholder from "../assets/images/dynamicVidPlaceholder.jpg"

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80"

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  dynamicBackground: {
    backgroundImage: `url(${PoolPlaceholder})`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#03a9f4",
    mixBlendMode: "overlay",
  },
  dynamicVideo: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.8,
  },
})

function ProductHero(props) {
  const { classes, dynamic } = props
  const [initiated, setInitiated] = React.useState(false)

  useEffect(() => {
    setInitiated(true)
  }, [])

  return (
    <ProductHeroLayout
      backgroundClassName={
        dynamic ? classes.dynamicBackground : classes.background
      }
    >
      <img
        src={PoolPlaceholder}
        style={{ display: "none" }}
        alt="increase priority"
      />
      {/* Increase the network loading priority of the background image. */}
      {!dynamic && (
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
      )}
      {dynamic && (
        <>
          {!initiated && (
            <img
              src={PoolPlaceholder}
              alt="pool video placeholder"
              className={classes.dynamicVideo}
            />
          )}
          <video
            src={PoolVideo}
            muted
            loop
            autoPlay
            className={classes.dynamicVideo}
          />
        </>
      )}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={Link}
        to="/register"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHero)

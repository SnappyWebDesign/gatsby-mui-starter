import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import "normalize.css"

import Theme from "./Theme"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

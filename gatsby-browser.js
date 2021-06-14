/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import Layout from "./src/components/UI/Layout"

export function wrapRootElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

import React from "react"
import Layout from "../components/UI/Layout"
import MuiLink from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "../components/Utils/Typography"

export default function TermsPage() {
  return (
    <Layout>
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            style={{ height: "30vh" }}
          >
            Theme Ported by{" "}
            <MuiLink href="https://snappywebdesign.net">
              Snappy Web Design
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

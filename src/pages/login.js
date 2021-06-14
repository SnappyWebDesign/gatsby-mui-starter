import React from "react"
import { Link } from "gatsby"
import { Field, Form, FormSpy } from "react-final-form"

import Layout from "../components/UI/Layout"
import { makeStyles } from "@material-ui/core/styles"
import MuiLink from "@material-ui/core/Link"
import Typography from "../components/Utils/Typography"
import AppForm from "../components/AppForm"
import { email, required } from "../components/Form/validation"
import RFTextField from "../components/Form/RFTextField"
import FormButton from "../components/Form/FormButton"
import FormFeedback from "../components/Form/FormFeedback"

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}))

function LoginPage() {
  const classes = useStyles()
  const [sent, setSent] = React.useState(false)

  const validate = values => {
    const errors = required(["email", "password"], values)

    if (!errors.email) {
      const emailError = email(values.email, values)
      if (emailError) {
        errors.email = email(values.email, values)
      }
    }

    return errors
  }

  const handleSubmit = () => {
    setSent(true)
  }

  return (
    <Layout>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {"Not a member yet? "}
            <MuiLink
              component={Link}
              to="/register"
              align="center"
              underline="always"
            >
              Sign Up here
            </MuiLink>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? "In progress…" : "Sign In"}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="center">
          <MuiLink component={Link} to="/forgot-password" underline="always">
            Forgot password?
          </MuiLink>
        </Typography>
      </AppForm>
    </Layout>
  )
}

export default LoginPage

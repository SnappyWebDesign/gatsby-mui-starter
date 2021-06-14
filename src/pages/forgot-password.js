import React from "react"
import Layout from "../components/UI/Layout"
import { makeStyles } from "@material-ui/core/styles"
import { Field, Form, FormSpy } from "react-final-form"
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

export default function ForgotPassword() {
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
            Forgot your password?
          </Typography>
          <Typography variant="body2" align="center">
            {"Enter your email address below and we'll " +
              "send you a link to reset your password."}
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
                autoFocus
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
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
                {submitting || sent ? "In progress…" : "Send reset link"}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
    </Layout>
  )
}

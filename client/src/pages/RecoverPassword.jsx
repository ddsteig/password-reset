import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, GhostInput } from "../styles/styledComponents"
import styled from "styled-components"
import AppAppBar from "../views/AppAppBar";
import axios from "axios"
// import { SERVER_URI } from "../config/"


export const RecoverPasswordStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    width: 300px;
  }
  p,
  input {
    margin-bottom: 0.625rem;
    font-size: 1.125rem;
  }
  input,
  button {
    width: 100%;
  }
  p {
    font-size: 1.125rem;
  }
  a {
    margin-top: 1rem;
  }
  .reset-password-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 430px;
    margin: 0 auto;
  }
  .reset-password-form-sent-wrapper {
    max-width: 360px;
    text-align: center;
    p {
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 0.75rem;
    }
  }
  .password-reset-btn {
    padding: 0.625rem 1.25rem;
    font-size: 1.125rem;
  }
`

// class RecoverPassword extends Component {
function RecoverPassword() {

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  // state = {
  //   email: "",
  //   submitted: false
  // }

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const sendPasswordResetEmail = e => {
    e.preventDefault()
    // const { email } = this.state
    axios.post(`/api/reset_password/user/${email}`)
    console.log(email)
    setEmail('')
    setSubmitted(true)
  }

  // render() {
    // const { email, submitted } = this.state

    return (
      <>
      <AppAppBar/>
      <RecoverPasswordStyles>
        <h3>Reset your password</h3>
        {submitted ? (
          <div className="reset-password-form-sent-wrapper">
            <p>
              If that account is in our system, we emailed you a link to reset
              your password.
            </p>
            <Link to="/loginPage" className="ghost-btn">
              Return to sign in
            </Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <p>
              It happens to the best of us. Enter your email and we'll send you
              reset instructions.
            </p>
            <form onSubmit={sendPasswordResetEmail}>
              <GhostInput
                onChange={handleChange}
                value={email}
                placeholder="Email address"
              />
              <Button className="btn-primary password-reset-btn">
                Send password reset email
              </Button>
            </form>
            <Link to="/loginPage">I remember my password</Link>
          </div>
        )}
      </RecoverPasswordStyles>
      </>
    )
  // }
}

export default RecoverPassword
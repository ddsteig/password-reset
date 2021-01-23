import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Button, GhostInput } from "../styles/styledComponents"
// import { SERVER_URI } from "../config/"
import AppAppBar from "../views/AppAppBar";
import { RecoverPasswordStyles as UpdatePasswordStyles } from "./RecoverPassword"

// SERVER_URI = "https://forage-2020-react.herokuapp.com"


function UpdatePassword(props) {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChangeOne = e => {
    setPassword(e.target.value)
  }

  const handleChangeTwo = e => {
    setConfirmPassword(e.target.value)
  }

  const updatePassword = e => {
    e.preventDefault()
    const { userId, token } = props.match.params

    axios.post(`/api/password/reset/${userId}/${token}`,
      { password }
    )
      .then(res => res)
      .catch(err => console.warn("ERROR FROM SERVER UPDATING PASSWORD:", err))
    setSubmitted(true)
  }

  return (
    <>
      <AppAppBar />

      <UpdatePasswordStyles>
        <h3 style={{ paddingBottom: "1.25rem" }}>Update your Password.</h3>
        {submitted ? (
          <div className="reset-password-form-sent-wrapper">
            <p>Your password has been saved.</p>
            <Link to="/loginPage" className="ghost-btn">
              Sign back in.
            </Link>
          </div>
        ) : (
            <div className="reset-password-form-wrapper">
              <form
                onSubmit={updatePassword}
                style={{ paddingBottom: "1.5rem" }}
              >
                <GhostInput
                  onChange={handleChangeOne}
                  value={password}
                  placeholder="New password"
                  type="password"
                />
                <GhostInput
                  onChange={handleChangeTwo}
                  value={confirmPassword}
                  placeholder="Confirm password"
                  type="password"
                />

                <Button className="btn-primary password-reset-btn">
                  Update Password
              </Button>
              </form>

              <p
                style={{
                  fontSize: "1rem",
                  maxWidth: "420px",
                  paddingLeft: "0.5rem"
                }}
              >
                Make sure it's at least 8 characters including a number and a
              lowercase letter. Read some documentation on{" "}
                <a
                  href="https://help.github.com/articles/creating-a-strong-password/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  safer password practices
              </a>
              .
            </p>
            </div>
          )}
      </UpdatePasswordStyles>
    </>
  )
}

export default UpdatePassword
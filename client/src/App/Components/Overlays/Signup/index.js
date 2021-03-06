import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { ExitButton, SignupFormButton } from "../../Buttons";
import PropTypes from "prop-types";

export default function SignupOverlay() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const emailAddress = useRef(null);
  const password = useRef(null);
  const [errorMsgs, setErrorMsgs] = useState([]);
  const history = useHistory();

  return (
    <div className="overlay__container signup">
      <ExitButton />
      <div className="overlay__wrap">
        <Form className="overlay__form">
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              ref={firstName}
              type="text"
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control ref={lastName} type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailAddress}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {errorMsgs.length > 0 ? (
            <Form.Group>
              <Form.Text>
                {errorMsgs.map((value, index) => {
                  return (
                    <Alert variant="danger" key={index}>
                      {value}
                    </Alert>
                  );
                })}
              </Form.Text>
            </Form.Group>
          ) : null}
          <SignupFormButton
            firstName={firstName}
            lastName={lastName}
            emailAddress={emailAddress}
            password={password}
            setErrorMsgs={(delta) => {
              setErrorMsgs(delta);
            }}
          />
        </Form>
        <p className="has-account">
          Already have an account?
          <Button onClick={() => history.push("/login")} variant="link">
            Log in
          </Button>
        </p>
      </div>
    </div>
  );
}

SignupOverlay.propTypes = {
  errorMsgs: PropTypes.array,
};

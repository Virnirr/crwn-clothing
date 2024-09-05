import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

import Button from "../button/button.component";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(response, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        alert("error creating the user");
      }
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
					label="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          type="text"
          value={displayName}
        />

        <FormInput
					label="Email"
          onChange={handleChange}
          required
          name="email"
          type="email"
          value={email}
        />

        <FormInput
					label="Password"
          onChange={handleChange}
          required
          name="password"
          type="password"
          value={password}
        />

        <FormInput
					label="Confirm Password"
          onChange={handleChange}
          required
          name="confirmPassword"
          type="password"
          value={confirmPassword}
        />
        <Button required type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import "../App.css";

export default function RegisForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submited, setsubmmited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmmited(true);
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setValues({ ...values, firstName: "", lastName: "", email: "" });
  };

  const handleFirstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  return (
    <div class="App">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submited && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handleFirstNameChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submited && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submited && !values.firstName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}{" "}
        <input
          onChange={handleEmailChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submited && !values.firstName ? (
          <span id="email-error">Please enter an email</span>
        ) : null}
        <button class="form-field button-custom" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

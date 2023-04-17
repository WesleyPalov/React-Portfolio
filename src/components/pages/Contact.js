import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
const emailSeviceId = "service_i9fbiiv";
const emailTemplateId = "template_bo7mj53";
const publicKey = "5SUMXfK83fo9tTutW";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
      emailjs.send(emailSeviceId, emailTemplateId, formState, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormState({
            name: "",
            email: "",
            message: "",
          })
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div className="container">
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="field">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="field">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button
          className="button is-medium is-primary is-fullwidth btn btn-primary"
          data-testid="button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;

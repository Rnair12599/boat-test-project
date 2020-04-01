import React, { useState } from "react";
import "./Contact.css";
import { Form, TextArea, Grid } from "semantic-ui-react";
import NavBar from "./NavBar";
export default function Contact(props) {
  const [contactUsForm, setcontactUsForm] = useState("");
  const updateContactForm = e => {
    e.persist();
    setcontactUsForm(contactUsForm => ({
      ...contactUsForm,
      [e.target.name]: e.target.value
    }));
  };
  const onSubmit = e => {
    e.preventDefault();

    setcontactUsForm("");
  };

  return (
    <div className="contact_background">
      <div className="contact_container">
        <div className="contact_image_container">
          <NavBar />

          <div className="title">Contact Us</div>
        </div>
      </div>
      <Grid centered stackable verticalAlign="middle" className="grid_contact">
        <Grid.Row>
          <ContactText />
          <ContactForm
            onChange={updateContactForm}
            contactUsForm={contactUsForm}
            onSubmit={onSubmit}
          />
        </Grid.Row>
      </Grid>
    </div>
  );
}

const ContactText = () => {
  return (
    <Grid.Column width={15} textAlign="center" className="contact_text">
      <h3>Contact Us</h3>
      <p>Our Customer Support Team is here to answer your questions</p>
      <p>listen to your comments and suggestions, and to help resolve</p>
      <p>any issues you might be having as quickly as possible.</p>
      <p>Complete the form below and we would be pleased to assist</p>
      <p>you.</p>
    </Grid.Column>
  );
};

const ContactForm = props => {
  return (
    <Grid.Column width={15} textAlign="center" className="contact_form_user">
      <div className="Form_Style">
        <Form onSubmit={props.onSubmit}>
          <Form.Field>
            <input
              name="name"
              type="text"
              onChange={props.onChange}
              value={props.contactUsForm.name || ""}
              placeholder="Full Name"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="email"
              onChange={props.onChange}
              value={props.contactUsForm.email || ""}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              type="text"
              onChange={props.onChange}
              value={props.contactUsForm.details || ""}
              name="details"
              placeholder="Details"
              rows="15"
              cols="103"
            />{" "}
          </Form.Field>
          <center>
            <button className="button">Send</button>
          </center>
        </Form>
      </div>
    </Grid.Column>
  );
};

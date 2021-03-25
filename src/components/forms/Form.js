import React, { Component } from "react";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import styled from "styled-components";
import { db } from "../../firebase";
const FM = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default class Form extends Component {
  state = {
    email: "",
    name: "",
    message: "",
    subject: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
    console.log(e.target);
  };
  onSubmit = (e) => {
    e.preventDefault();
    db.collection("contants")
      .add({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        subject: this.state.subject,
      })
      .then(() => {
        alert("Message submitted Successfully. Will get in Touch Soon.");
      })
      .catch((error) => {
        alert(error.message);
      });
    this.setState({
      email: "",
      name: "",
      message: "",
      subject: "",
    });
  };
  render() {
    return (
      <div>
        <FM onSubmit={this.onSubmit}>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.onChange(e)}
            placeholder="Your Email Address"
          />
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.onChange(e)}
            placeholder="Full Name"
          />
          <Input
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={(e) => this.onChange(e)}
            placeholder="Subject"
          />
          <Textarea
            name="message"
            value={this.state.message}
            onChange={(e) => this.onChange(e)}
            placeholder="Your Message Here"
          />
          <SubmitButton type="submit" onClick={this.onSubmit}>
            {this.props.submitButtonText}
          </SubmitButton>
        </FM>
        ;
      </div>
    );
  }
}

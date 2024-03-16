"use client";
import { StyledButton, StyledForm, StyledTextArea, StyledInput } from "./style";
import Header from "../../components/common/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <StyledForm>
        <div>
          <h1>Contact Us 👋 </h1>
          <StyledInput
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <StyledTextArea
            name="message"
            placeholder="Your Message"
            required
          ></StyledTextArea>
          <StyledButton type="submit">Submit Feedback!</StyledButton>
        </div>
      </StyledForm>
    </>
  );
}

import React, { Component } from "react";
import ContentBlock from "../ContentBlock/ContentBlock";
import { VCard } from "..";
import { Hr } from "./Styles";

const Contact = () => (
  <ContentBlock id="contact" title="Impressum">
    <VCard />
    <Hr />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.870448425484!2d6.9469396157336245!3d50.96309945817399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2578101345f5%3A0x99e3d72171d5f8e4!2sChristoph+von+Kr%C3%BCchten!5e0!3m2!1sde!2sde!4v1547322598558"
      width="100%"
      height="450"
      style={{ border: 0 }}
    />
  </ContentBlock>
);

export default Contact;

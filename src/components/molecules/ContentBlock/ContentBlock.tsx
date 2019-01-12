import React, { Component, ReactNode } from "react";
import { Headline, Section } from "../../atoms";

interface IContentBlockProps {
  id: string;
  title: string;
  children?: JSX.Element[] | JSX.Element;
}

const ContentBlock = ({ title, children, id }: IContentBlockProps) => (
  <Section id={id}>
    <header>
      <Headline>{title}</Headline>
    </header>
    {children}
  </Section>
);

export default ContentBlock;

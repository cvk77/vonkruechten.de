import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Ul, Li, Anchor, Headline, Section } from "../components/atoms";
import { GitHub, Twitter, Xing } from "../components/atoms/Icons/Icons";
import { withKnobs, text } from "@storybook/addon-knobs";
import { AboutMe, ContentBlock } from "../components/molecules";

const atoms = storiesOf("Atoms", module);
atoms.addDecorator(withKnobs);

atoms.add("List", () => (
  <Ul>
    <Li>{text("First item", "😀")}</Li>
    <Li>😎</Li>
    <Li>👍</Li>
    <Li>💯</Li>
  </Ul>
));

atoms.add("Anchor", () => <Anchor href={text("Href", "#")}>{text("Label", "Link")}</Anchor>);

atoms.add("Headline", () => <Headline>{text("Label", "Headline")}</Headline>);

atoms.add("Icons", () => (
  <>
    <GitHub />
    <Twitter />
    <Xing />
  </>
));

atoms.add("Section", () => (
  <Section>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, magni minus dolorum dolorem aut dolor at itaque
    deleniti totam inventore iusto corporis veniam in consequuntur dignissimos nisi labore culpa ducimus!
  </Section>
));

const molecules = storiesOf("Molecules", module);
molecules.addDecorator(withKnobs);

molecules.add("ContentBlock", () => (
  <ContentBlock id={text("Id", "my-id")} title={text("Title", "Content block")}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsam dolorem. Magnam voluptatum nulla iure
      tenetur in culpa. Eos accusamus doloremque sunt sequi a blanditiis eius unde eaque ex nesciunt?
    </p>
  </ContentBlock>
));

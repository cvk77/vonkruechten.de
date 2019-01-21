import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";
import { Anchor } from "../../atoms";

const VCard = () => (
  <Flex
    id="hcard-Christoph-von-Krüchten"
    className="vcard"
    justifyContent="space-between"
  >
    <Box>
      <Anchor className="url fn n" href="http://www.vonkruechten.de">
        <span className="given-name">Christoph</span>{" "}
        <span className="family-name">von Krüchten</span>
      </Anchor>
      <br />
      <div>Softwarearchitektur, -Konzeption, -Entwicklung</div>
      <div className="adr">
        <span className="street-address">Siebachstr. 117</span>
        <br />
        <span className="postal-code">50733</span>{" "}
        <span className="locality">Köln</span>
      </div>
    </Box>
    <Box>
      <Anchor className="email" href="mailto:christoph@vonkruechten.de">
        christoph@vonkruechten.de
      </Anchor>
      <br />
      <Anchor href="/assets/42A778CA.asc">GPG Key 42A778CA</Anchor>
      <br />
      <span className="tel">+49 221 355 332 337</span>
      <br />
      <span>USt-IdNr.: DE306101996</span>
    </Box>
  </Flex>
);

export default VCard;

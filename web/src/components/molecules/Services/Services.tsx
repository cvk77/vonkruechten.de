import React, { Component } from "react";
import ContentBlock from "../ContentBlock/ContentBlock";
import { Ul, Li } from "../../atoms";

const Services = () => (
  <ContentBlock id="services" title="Leistungen">
    <Ul>
      <Li>
        Anforderungsaufnahme und Konzeption, Softwarearchitektur und
        Dokumentation.
      </Li>
      <Li>
        Softwareentwicklung im Microsoft&nbsp;.NET-Umfeld, mit Fokus auf C# und
        F#.
      </Li>
      <Li>Softwareentwicklung im Java-Umfeld (Spring, J2EE).</Li>
      <Li>
        Frontend-Entwicklung mit HTML, CSS und JavaScript (Angular, React).
      </Li>
    </Ul>
  </ContentBlock>
);

export default Services;

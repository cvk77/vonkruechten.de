import styled from "styled-components/macro";

export const H1 = styled.h1`
  font-weight: lighter;
  margin: 0;
  padding: 0;
  line-height: 1.5em;

  @media screen and (min-width: 700px) {
    border-bottom: 2px solid white;
  }
`;

export const H2 = styled.h2`
  font-weight: lighter;
  margin: 0;
  padding: 0;
  line-height: 1.3em;
`;

export const Header = styled.header`
  width: 100%;
  background-image: url(/assets/images/blaetter.jpg);
  background-attachment: local;
  background-size: cover;
  padding: 60px 0 30px 0;
  margin: 0;
  border-bottom: 2px solid #354200;

  & > div {
    position: relative;
    text-align: center;
    padding: 0;
    margin: 0 auto;
    color: white;
    font-size: 1em;
  }

  @media screen and (min-width: 700px) {
    height: 50vh;
    font-size: 3vh;
    padding-top: 0;

    & > div {
      top: 20vh;
      line-height: 10vh;
      text-shadow: 1px 1px 2px black;
    }
  }
`;

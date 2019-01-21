import styled from "styled-components";
import { HTMLAttributes } from "react";

interface IMenuitemsProps extends HTMLAttributes<HTMLUListElement> {
  external?: boolean;
}

export const Ul = styled.ul`
  position: absolute;
  padding-left: 18px;
  right: ${(props: IMenuitemsProps) => (props.external ? "0" : "auto")};
  margin: 0;
  line-height: 50px;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.bgDark};
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

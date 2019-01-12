import styled from "styled-components";

interface IMenuitemsProps {
  external?: boolean;
}

export const MenuItems = styled.ul`
  position: absolute;
  padding-left: 18px;

  right: ${(props: IMenuitemsProps) => (props.external ? "0" : "auto")};
`;

export const Menu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Li = styled.li`
  display: inline;
  padding-right: 20px;
`;

export const A = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    color: #007acc;
  }
`;

import styled from "../../../styled-components";
import { NavHashLink as NavLink } from "react-router-hash-link";

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  :hover {
    color: ${props => props.theme.links};
  }
`;

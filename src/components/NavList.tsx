import React from "react";
import styled from "styled-components";
import media from "../styles/media";

import NavItem from "./NavItem";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.tablet} {
    flex-direction: row;
    gap: 1.6rem;
  }

  ${media.laptop} {
    gap: 3rem;
  }
`;

const NavList = () => {
  return (
    <ListEl>
      <NavItem label="Pricing" />
      <NavItem label="Product" />
      <NavItem label="About Us" />
      <NavItem label="Careers" />
      <NavItem label="Community" />
    </ListEl>
  );
};

export default NavList;

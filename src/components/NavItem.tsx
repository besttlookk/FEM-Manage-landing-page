import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";

const ItemEl = styled.li`
  padding: 0 2.4rem;

  ${media.tablet} {
    position: relative;
    padding: 0;
  }
`;

const Label = styled.a`
  transition: all 0.5s;
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
  color: var(--col-dark);
  font-family: inherit;

  ${media.tablet} {
    &:hover {
      color: var(--col-gray);
    }
  }
`;

const NavItem = ({ label }: { label: string }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <ItemEl>
      <Label
        href="#"
        onClick={() => setIsDropdownActive(!isDropdownActive)}
        className={isDropdownActive ? "active" : ""}
      >
        {label}
      </Label>
    </ItemEl>
  );
};

export default NavItem;

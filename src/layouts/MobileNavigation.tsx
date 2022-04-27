import React from "react";
import styled from "styled-components";
import NavList from "../components/NavList";
import media from "../styles/media";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 1.6rem;
  right: 1.6rem;
  transform: translateY(-100%);
  transition: all 0.3s;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: white;
  border-radius: 5px;
  opacity: 0;

  &.active {
    top: 100%;
    transform: translateY(0);
    opacity: 1;
  }

  ${media.tablet} {
    display: none;
  }
`;

const NavEl = styled.nav`
  padding: 3.2rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const MobileNavigation = ({ isMenuActive }: { isMenuActive: boolean }) => {
  return (
    <Wrapper className={isMenuActive ? "active" : ""}>
      <NavEl>
        <NavList />
      </NavEl>
    </Wrapper>
  );
};

export default MobileNavigation;

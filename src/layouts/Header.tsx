import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CancelIcon from "../images/icon-close.svg";
import MobileNavigation from "./MobileNavigation";
import NavList from "../components/NavList";
import { ButtonSharedStyle, Wrapper } from "../styles/shared";
import Image from "next/image";

const HeaderEl = styled.header`
  position: relative;
  z-index: 500;
  transition: 0.7s;

  &.active {
    background-color: var(--col-footer-bg);
  }
`;

const HeaderWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 15.6rem;
  height: 2.4rem;

  ${media.laptop} {
    width: 18rem;
    height: 2.8rem;
  }
`;

const RightSide = styled.div`
  ${media.tablet} {
    display: none;
  }

  ${media.laptop} {
    display: block;
  }
`;

const DesktopNavigation = styled.nav`
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

const HamburgerWrapper = styled.div`
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  display: none;

  ${media.laptop} {
    display: block;
  }
`;

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <HeaderEl>
      <HeaderWrapper>
        <MobileNavigation isMenuActive={isMenuActive} />

        <LogoWrapper>
          <Image
            alt="logo"
            src="/images/logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </LogoWrapper>

        <DesktopNavigation>
          <NavList />
        </DesktopNavigation>

        <RightSide>
          <ButtonWrapper>
            <ButtonSharedStyle>Get Started</ButtonSharedStyle>
          </ButtonWrapper>
          <HamburgerWrapper>
            {isMenuActive ? (
              <CancelIcon onClick={() => setIsMenuActive(false)} />
            ) : (
              <HamburgerIcon onClick={() => setIsMenuActive(true)} />
            )}
          </HamburgerWrapper>
        </RightSide>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;

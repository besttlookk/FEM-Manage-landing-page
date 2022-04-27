import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Centered, Flex, Wrapper } from "../styles/shared";
import FbIcon from "../images/icon-facebook.svg";
import TwIcon from "../images/icon-twitter.svg";
import YtIcon from "../images/icon-youtube.svg";
import PtIcon from "../images/icon-pinterest.svg";
import InstaIcon from "../images/icon-instagram.svg";
import Logo from "../images/logo.svg";

const FooterEl = styled.footer`
  background-color: var(--col-dark);
`;

const FooterWraper = styled(Wrapper)`
  position: relative;
  align-items: stretch;
  gap: 6rem;
  padding: 5.6rem 3.2rem;
  max-width: 56rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-inline: 1.6rem;
    max-width: 95vw;
    gap: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 1.6rem;
  height: 4.4rem;

  ${media.tablet} {
    order: 3;
    flex: 1;
    max-width: 40rem;
  }
`;

const FormControl = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
`;

const InputEl = styled.input`
  font-family: inherit;
  font-size: 1.4rem;
  border: 2px solid transparent;
  padding: 1rem 2rem 1.4rem;
  color: var(--col-gray);
  border-radius: 100px;
  width: 100%;
  height: 100%;
  outline: none;

  &:focus {
    color: var(--col-dark);
    border-color: var(--col-gray);
  }

  &.error {
    color: var(--col-primary);
    border-color: var(--col-primary);
  }
`;

const Button = styled(Centered)`
  border: none;
  height: 100%;
  width: 8rem;
  text-transform: uppercase;
  border-radius: 100px;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: var(--col-primary);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const ErrorEl = styled.p`
  position: absolute;
  bottom: -26px;
  left: 16px;
  font-size: 14px;
  color: var(--col-primary);
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-inline: 3.2rem;

  ${media.tablet} {
    order: 2;
    gap: 4.6rem;
    padding-inline: 0;
  }

  ${media.laptop} {
    gap: 16rem;
  }
`;

const FlexItem = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  li {
    font-size: 1.4rem;
    color: var(--col-gray);
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: var(--col-primary);
    }
  }
`;

const LogoAndIconsWrapper = styled(Flex)`
  gap: 6rem;

  ${media.tablet} {
    order: 1;
    align-items: flex-start;
  }
`;

const Icons = styled(Centered)`
  gap: 4.8rem;

  svg {
    cursor: pointer;
    transform: scale(1.5);

    path {
      transition: all 0.3s;
    }
  }

  svg:hover {
    path {
      fill: var(--col-primary);
    }
  }

  ${media.tablet} {
    gap: 2rem;
    order: 2;

    svg {
      transform: scale(1.3);
    }
  }
`;

const LogoWrapper = styled.div`
  svg {
    transform: scale(1.1);
  }

  ${media.laptop} {
    order: 1;

    svg {
      transform: scale(1.3);
    }
  }
`;

const Credit = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  font-size: 1.3rem;
  color: var(--col-gray);
  font-weight: 700;

  ${media.tablet} {
    bottom: 5rem;
    left: initial;
    font-size: 1.4rem;

    right: 20px;
  }
`;

const Footer = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (!input) return setError("Enter your email address");

    if (!validateEmail(input)) return setError("Enter a valid email address!");

    setInput("");
  };

  return (
    <FooterEl>
      <FooterWraper>
        <Credit>Copyright 2020. All Rights Reserved</Credit>
        <Form onSubmit={handleFormSubmit}>
          <FormControl>
            <InputEl
              placeholder="Updates in your inbox"
              name="email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setError("")}
            />
            {error && <ErrorEl>{error}</ErrorEl>}
          </FormControl>
          <Button as="button" type="submit">
            Go
          </Button>
        </Form>
        <FooterLinks>
          {" "}
          <FlexItem>
            <ul>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </FlexItem>
          <FlexItem>
            <ul>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </FlexItem>
        </FooterLinks>

        <LogoAndIconsWrapper>
          <Icons>
            <FbIcon />
            <YtIcon />
            <TwIcon />
            <PtIcon />
            <InstaIcon />
          </Icons>

          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </LogoAndIconsWrapper>
      </FooterWraper>
    </FooterEl>
  );
};

export default Footer;

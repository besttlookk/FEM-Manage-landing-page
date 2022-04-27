import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { ButtonSharedStyle, Flex, Wrapper } from "../styles/shared";

const SectionWrapper = styled(Wrapper)`
  gap: 3.6rem;

  ${media.tablet} {
    flex-direction: row;
    margin-top: 4rem;
  }

  ${media.laptop} {
    margin-top: 8rem;
    justify-content: space-between;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;

  ${media.tablet} {
    order: 2;
    img {
      object-position: right;
    }
  }

  ${media.laptop} {
    width: 50%;
  }
`;

const Content = styled(Flex)`
  text-align: center;
  gap: 1.2rem;
  padding-inline: 2.4rem;
  max-width: 44rem;

  ${media.tablet} {
    text-align: start;
    align-items: flex-start;
    padding-inline: 0;
  }

  ${media.laptop} {
    max-width: 50rem;
    gap: 1.6rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  line-height: 1.4;

  ${media.tablet} {
    font-size: 4rem;
  }

  ${media.laptop} {
    font-size: 5.2rem;
    line-height: 1.2;
  }
`;

const Paragraph = styled.p``;

const Button = styled(ButtonSharedStyle)`
  padding-top: 1rem;
  padding-inline: 3.6rem;
  margin-top: 3.2rem;
`;

const HeroSection = () => {
  return (
    <section>
      <SectionWrapper>
        <ImageWrapper>
          <Image
            alt="hero"
            src="/images/illustration-intro.svg"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>

        <Content>
          <Heading>Bring everyone together to build better products.</Heading>

          <Paragraph>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </Paragraph>

          <Button>Get Started</Button>
        </Content>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;

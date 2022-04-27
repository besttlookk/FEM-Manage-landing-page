import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { ButtonSharedStyle, Heading2, Wrapper } from "../styles/shared";

const Section = styled.section`
  background-color: var(--col-primary);
  background-image: url(/images/bg-simplify-section-mobile.svg);
  background-repeat: no-repeat;

  ${media.tablet} {
    background-image: url(/images/bg-simplify-section-desktop.svg);
  }
`;

const SectionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding-block: 8rem;
  text-align: center;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
  }
`;

const Heading = styled(Heading2)`
  color: var(--col-light);
  font-size: 3.4rem;
  max-width: 30rem;

  ${media.tablet} {
    max-width: 36rem;
    font-size: 3.6rem;
  }

  ${media.laptop} {
    font-size: 3.8rem;
  }
`;

const Button = styled(ButtonSharedStyle)`
  padding-top: 1rem;

  ${media.laptop} {
    padding-inline: 5rem;
    font-size: 1.8rem;
  }
`;

const BottomSection = () => {
  return (
    <Section>
      <SectionWrapper>
        <Heading>Simplify how your team works today.</Heading>
        <Button variant="secondary"> Get Started</Button>
      </SectionWrapper>
    </Section>
  );
};

export default BottomSection;

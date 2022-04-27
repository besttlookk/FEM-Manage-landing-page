import React from "react";
import styled from "styled-components";
import { Flex, Heading2, Wrapper } from "../styles/shared";
import data from "../../data.json";
import FeatureCard from "../components/FeatureCard";
import media from "../styles/media";

const SectionWrapper = styled(Wrapper)`
  padding-block: 8rem;
  padding-right: 0;
  width: 100vw;
  gap: 6rem;

  ${media.laptop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 1.6rem;
    width: 95vw;
    padding-block: 16rem;
  }
`;

const Header = styled(Flex)`
  text-align: center;
  gap: 1.6rem;
  max-width: 44rem;
  padding-inline: 2.4rem;
  margin-right: 1.6rem;

  ${media.laptop} {
    align-items: flex-start;
    text-align: start;
    max-width: 54rem;
    margin-right: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
`;

const FeatureSection = () => {
  const features = data.features;
  return (
    <section>
      <SectionWrapper>
        <Header>
          <Heading2>What’s different about Manage?</Heading2>
          <p>
            {" "}
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </Header>
        <Content>
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </Content>
      </SectionWrapper>
    </section>
  );
};

export default FeatureSection;

import React from "react";
import styled from "styled-components";
import media from "../styles/media";

type FeatureType = {
  number: string;
  title: string;
  description: string;
};

const FeatureEl = styled.div`
  max-width: 54rem;

  ${media.laptop} {
    display: flex;
    align-items: flex-start;
    gap: 4rem;
  }
`;
const LeftSide = styled.div`
  display: none;

  ${media.laptop} {
    display: block;
    width: 50px;
  }
`;

const RightSide = styled.div`
  p {
    padding-right: 2.4rem;

    ${media.tablet} {
      padding-right: 1.6rem;
    }
  }
`;

const Label = styled.span`
  display: inline-block;
  color: var(--col-light);
  background-color: var(--col-primary);
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0.5rem 2.4rem 0.8rem;
  border-radius: 100px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--col-primary-light);
  gap: 1.6rem;
  height: 4rem;
  margin-bottom: 1.2rem;

  h3 {
    margin-bottom: 0.2rem;
  }

  ${media.laptop} {
    background-color: transparent;
    align-items: flex-start;

    span {
      display: none;
    }
  }
`;

const FeatureCard = ({ feature }: { feature: FeatureType }) => {
  return (
    <FeatureEl>
      <LeftSide>
        <Label>{feature.number}</Label>
      </LeftSide>
      <RightSide>
        <Title>
          <Label>{feature.number}</Label>
          <h3>{feature.title}</h3>
        </Title>
        <p>{feature.description}</p>
      </RightSide>
    </FeatureEl>
  );
};

export default FeatureCard;

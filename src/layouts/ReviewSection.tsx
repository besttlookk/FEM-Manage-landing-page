import React, { useState } from "react";
import styled from "styled-components";
import ReviewCard from "../components/ReviewCard";
import { ButtonSharedStyle, Heading2 } from "../styles/shared";
import data from "../../data.json";
import media from "../styles/media";

const SectionEl = styled.section`
  text-align: center;
  padding-block: 2.4rem 4.8rem;
`;

const Content = styled.div`
  margin-block: 8rem;
`;

const MobileSlide = styled.div`
  ${media.tablet} {
    display: none;
  }
`;

const DesktopSlide = styled.div`
  display: none;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 6rem 2rem;

  ${media.tablet} {
    display: grid;
  }
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid var(--col-primary);
  transition: all 0.3s;

  &.active {
    background-color: var(--col-primary);
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-block: 2.4rem 6rem;
`;

const Button = styled(ButtonSharedStyle)`
  padding-top: 1rem;
`;

const ReviewSection = () => {
  const reviewsArr = data.reviews;

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <SectionEl>
      <Heading2>What they’ve said</Heading2>

      <Content>
        <MobileSlide>
          <ReviewCard review={reviewsArr[currentIndex]} />
          <Dots>
            <Dot
              onClick={() => setCurrentIndex(0)}
              className={currentIndex === 0 ? "active" : ""}
            />
            <Dot
              onClick={() => setCurrentIndex(1)}
              className={currentIndex === 1 ? "active" : ""}
            />
            <Dot
              onClick={() => setCurrentIndex(2)}
              className={currentIndex === 2 ? "active" : ""}
            />
            <Dot
              onClick={() => setCurrentIndex(3)}
              className={currentIndex === 3 ? "active" : ""}
            />
          </Dots>
        </MobileSlide>

        <DesktopSlide>
          {reviewsArr.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </DesktopSlide>
      </Content>

      <Button>Get Started</Button>
    </SectionEl>
  );
};

export default ReviewSection;

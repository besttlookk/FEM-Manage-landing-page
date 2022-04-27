import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

type ReviewType = {
  name: string;
  detail: string;
  image: string;
};

const Wrapper = styled.div`
  position: relative;
  background-color: hsla(227, 12%, 61%, 0.05);
  border-radius: 5px;
  text-align: center;
  padding: 5.6rem 2.4rem 3rem;
  width: 90%;
  max-width: 48rem;
  margin-inline: auto;
  border-radius: 5px;

  ${media.tablet} {
    min-height: 24rem;
    /* max-width: auto; */
  }
`;

const Content = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

const Name = styled.h5`
  font-size: 1.7rem;
  margin-bottom: 1.6rem;
`;

const Detail = styled.p`
  font-size: 1.5rem;
`;

const ReviewCard = ({ review }: { review: ReviewType }) => {
  return (
    <Wrapper>
      <Content>
        <ImageWrapper>
          <Image
            alt="avatar"
            src={`/images/avatar-${review.image}.png`}
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <Name>{review.name}</Name>
        <Detail>{review.detail}</Detail>
      </Content>
    </Wrapper>
  );
};

export default ReviewCard;

import styled, { css } from "styled-components";
import media from "./media";

export const ButtonSharedStyle = styled.a<{ variant?: string }>`
  display: inline-block;
  transition: all 0.5s;
  border-radius: 100px;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5rem 3.2rem 1.4rem;
  cursor: pointer;
  box-shadow: var(--shadow-colored);

  ${(p) =>
    p.variant === "secondary"
      ? css`
          background-color: var(--col-primary-light);
          color: var(--col-primary);
        `
      : css`
          color: var(--col-primary-light);
          background-color: var(--col-primary);
        `}

  ${media.laptop} {
    padding: 1rem 3.2rem 1.4rem;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const Wrapper = styled.div`
  width: 95vw;
  max-width: 128rem;
  margin-inline: auto;
  padding-inline: 1.6rem;
`;

export const Heading2 = styled.h2`
  font-size: 2.8rem;

  ${media.tablet} {
    font-size: 3.2rem;
  }

  ${media.tablet} {
    font-size: 3.6rem;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 2rem;

  span {
    display: block;
  }

  ${media.tablet} {
    margin-bottom: 2.4rem;

    span {
      display: inline;
    }
  }
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled, { keyframes } from "styled-components";

const lazyRotate = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

export const PosterStyled = styled.div`
  position: relative;
  z-index: 1;

  &.poster {
    width: 100%;
    height: 100%;
    min-height: 480px;
    max-height: 480px;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  &.photo {
    height: 250px;
    user-select: none;
  }

  &.scale-down img {
    object-fit: scale-down;
  }

  &.cover img {
    object-fit: cover;
  }

  // lazy 커스텀
  .swiper-lazy-preloader {
    border: 4px solid ${(props) => props.theme.primary};
    border-top-color: transparent;
    border-left-color: transparent;
    animation: ${lazyRotate} 0.6s infinite linear;
    z-index: 0;
  }
`;

import styled, { keyframes } from "styled-components";

const cubix = keyframes`
  0% {
    transform: rotateX(-30deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
`;

export const LoadingStyled = styled.div<{ className?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 22222222;

  opacity: 0;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: initial;
  }

  transition: 0.4s;

  background: ${(props) => props.theme.backDark};
  color: ${(props) => props.theme.titleColor};

  .cube {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: ${cubix} 4s linear infinite;

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#090909, #febf00);

      display: flex;
      justify-content: center;
      align-items: center;

      transform-style: preserve-3d;

      &:nth-child(1) {
        transform: rotateY(90deg) translateZ(150px);
      }

      &:nth-child(2) {
        transform: rotateY(180deg) translateZ(150px);
      }

      &:nth-child(3) {
        transform: rotateY(270deg) translateZ(150px);
      }

      &:nth-child(4) {
        transform: rotateY(360deg) translateZ(150px);
      }

      h2 {
        position: absolute;
        font-size: 3.5rem;
        transform: translateZ(50px);
        color: #fff;

        &:first-child {
          transform: translate(0) translateY(1.5rem);
          color: rgba(0, 0, 0, 0.2);
          filter: blur(0.2rem);
        }
      }
    }

    .topCover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #090909;
      transform: rotateX(90deg) translateZ(150px);

      :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #febf00;
        transform: rotateX(180deg) translateZ(23rem);
        filter: blur(1.5rem);
      }
    }
  }
`;

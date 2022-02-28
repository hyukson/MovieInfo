import styled, { keyframes } from "styled-components";

const progress = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ProgressStyled = styled.div`
  width: 100%;
  height: 0.6rem;
  position: relative;
  border-radius: 5rem;
  background-color: #fff;

  > div {
    width: 0;
    height: 100%;
    transition: 0.2s;
    background-color: #febf00;
    border-radius: 5rem;

    &.active {
      animation: ${progress} 5s infinite linear;
    }
  }
`;

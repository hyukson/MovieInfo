import styled from "styled-components";

export const SlideArrowsStyled = styled.div`
  .arrows {
    > div {
      width: 4.5rem;
      height: 4.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      background: rgba(255, 255, 255, 0.6);

      z-index: 10;
      user-select: none;
      cursor: pointer;

      &.right {
        right: 0;
      }
    }
  }
`;

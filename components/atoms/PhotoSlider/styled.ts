import styled from "styled-components";

export const PhotoSliderStyled = styled.div`
  position: relative;
  user-select: none;

  .photo {
    position: relative;
    height: 500px;
  }

  .arrows {
    > div {
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 5rem 3px rgba(0, 0, 0, 0.4);

      &.left {
        transform: translate(-65%, -100%);
      }

      &.right {
        transform: translate(65%, -100%);
      }
    }
  }
`;

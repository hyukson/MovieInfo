import styled from "styled-components";

export const MovieAutoFadeStyled = styled.div`
  position: relative;
  width: 50rem;
  user-select: none;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  .swiper-slide {
    transition: transform 0.6s;
    transform: scale(0.85);

    &.active {
      transform: scale(1);

      .poster {
        border: 3px solid ${(props) => props.theme.primary};
      }
    }
  }

  .poster {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 270px;
    max-height: 270px;
    margin-bottom: 1.5rem;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
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

import styled from "styled-components";

export const MovieSliderStyled = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;

    &:after {
      display: inline-block;
      width: 3rem;
      height: 3rem;
    }
  }
`;

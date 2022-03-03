import styled from "styled-components";

export const PosterStyled = styled.div`
  &.poster {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 480px;
    max-height: 480px;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }

  &.photo {
    position: relative;
    height: 250px;
    user-select: none;
  }

  &.scale-down img {
    object-fit: scale-down;
  }

  &.cover img {
    object-fit: cover;
  }
`;

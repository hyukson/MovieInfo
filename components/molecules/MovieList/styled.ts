import styled from "styled-components";

export const MovieListStyled = styled.div`
  .title {
    text-align: center;
    margin-top: 3rem;

    h2 {
      font-size: 3rem;
      color: ${(props) => props.theme.titleColor};
    }
  }

  .list {
    margin-top: 3rem;
    position: relative;
    user-select: none;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;

    > a {
      display: inline-block;
      margin-bottom: 4rem;

      :hover {
        transform: scale(1.08);
      }
    }

    h2 {
      color: ${(props) => props.theme.titleColor};
    }

    // 반응형
    @media only screen and (max-width: 1650px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1380px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

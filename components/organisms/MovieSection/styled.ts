import styled from "styled-components";

export const MovieSectionStyled = styled.section`
  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    color: ${(props) => props.theme.textColor};

    h1 {
      font-size: 2rem;
      color: #eee;
    }

    a {
      display: inline-block;
      padding: 0.6rem 1.4rem;
      background: ${(props) => props.theme.primary};
      border-radius: 5rem;
      color: #333;
      font-size: 1rem;
      font-weight: bold;
      box-shadow: 0 0.6rem 1.5rem rgb(254 191 0 / 30%);
      cursor: pointer;
    }
  }

  margin-top: 4rem;
`;

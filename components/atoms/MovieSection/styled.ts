import styled from "styled-components";

export const MovieSectionStyled = styled.section`
  margin-top: 8rem;
  user-select: none;

  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    color: ${(props) => props.theme.textColor};

    h1 {
      font-size: 2.2rem;
      color: ${(props) => props.theme.primary};
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
`;

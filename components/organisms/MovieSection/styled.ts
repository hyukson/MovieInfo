import styled from "styled-components";

export const MovieSectionStyled = styled.section`
  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    color: ${(props) => props.theme.textColor};

    a {
      display: inline-block;
      padding: 0.6rem 1.2rem;
      background: ${(props) => props.theme.primary};
      color: #333;
      cursor: pointer;
    }
  }

  margin-bottom: 4rem;
`;

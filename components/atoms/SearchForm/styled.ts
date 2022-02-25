import styled from "styled-components";

export const SearchFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3rem 0;

  h1 {
    color: ${(props) => props.theme.primary};
    margin-right: 2rem;
    padding: 2rem 0;
    font-size: 2.5rem;
  }

  input {
    width: 60%;
    height: 4.5rem;

    padding: 1rem 2rem;
    background: none;
    border: none;
    border-bottom: 3px solid ${(props) => props.theme.primary};
    color: #fff;
    font-size: 1.2rem;

    &::placeholder {
      color: #ddd;
      font-size: 1.2rem;
    }
  }
`;

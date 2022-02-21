import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};
`;

import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.backDark};

  color: #646262;
  text-align: center;
`;

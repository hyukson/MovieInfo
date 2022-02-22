import styled from "styled-components";

export const WrapStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: ${(props) => props.theme.backDark};
  position: relative;
`;

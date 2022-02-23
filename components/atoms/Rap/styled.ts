import styled from "styled-components";

export const RapStyled = styled.div`
  max-width: calc(100% - 220px);
  width: 100%;
  margin: 0 auto;
  position: relative;

  // 반응형
  @media only screen and (max-width: 1220px) {
    max-width: calc(100% - 120px);
  }

  @media only screen and (max-width: 720px) {
    max-width: calc(100% - 220px);
  }

  @media only screen and (max-width: 580px) {
    max-width: calc(100% - 120px);
  }
`;

import styled from "styled-components";

export const DetailStyled = styled.div`
  color: ${(props) => props.theme.titleColor};
  position: relative;

  @media only screen and (min-width: 1220px) {
    .wrap {
      max-width: calc(100% - 600px);
    }
  }
`;

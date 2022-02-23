import styled from "styled-components";

export const DetailVisualStyled = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.textColor};

  .poster {
    width: 500px;
    height: 500px;
    position: relative;
    margin-right: 5rem;
  }

  .direction {
    width: 50%;

    > div {
      margin-bottom: 1.5rem;
    }
  }
`;

import styled from "styled-components";

export const DetailVisualStyled = styled.div`
  color: ${(props) => props.theme.textColor};
  padding: 5rem 0;

  .backPoster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    z-index: 0;
    pointer-events: none;

    .image {
      position: relative;
      width: 100%;
      height: 100%;

      ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(1, 5, 17, 0.7);
        z-index: 1;
      }

      ::before {
        content: "";
        width: 100%;
        height: 15rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(transparent 30%, #010511);
        z-index: 1;
      }
    }
  }

  .visualSection {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .poster {
      width: 350px;
      height: 500px;
      position: relative;
      margin-right: 12rem;
    }

    .direction {
      width: 48rem;

      > div {
        margin-bottom: 2rem;

        p {
          margin-top: 0.6rem;
        }

        h1 {
          color: ${(props) => props.theme.primary};
          font-size: 2.6rem;
        }

        h3 {
          color: ${(props) => props.theme.titleColor};
        }
      }
    }
  }

  .overview {
    margin-top: 6rem;
    border-left: 0.4rem solid ${(props) => props.theme.primary};
    padding-left: 2rem;

    h2 {
      color: ${(props) => props.theme.titleColor};
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
`;

import styled from "styled-components";

export const TopRatedContentStyled = styled.div`
  position: relative;
  padding: 5rem 0;
  height: 90vh;
  min-height: 870px;

  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 900px) {
    min-height: auto;
    height: 100%;
    margin-bottom: 1rem;
  }

  .backPoster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    ::before {
      content: "";
      width: 100%;
      height: 20rem;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(transparent 30%, #010511);
      z-index: 2;
    }

    ::after {
      content: "";
      width: 150%;
      height: 70rem;
      position: absolute;
      left: -50%;
      bottom: -50%;
      transform: rotate(40deg);
      background: linear-gradient(transparent 0%, #000);
      z-index: 2;
    }

    @media only screen and (max-width: 600px) {
      ::after {
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        transform: rotate(0);
        background-color: rgba(0 0 0 / 20%);
      }
    }

    .imageBox {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .backImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      user-select: none;

      transition: 0.4s;
      opacity: 0;

      &.active {
        opacity: 1;
      }
    }
  }

  .visualSection {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;

    .direction {
      width: 40rem;

      .flex {
        display: flex;

        > div {
          margin-right: 2rem;
        }
      }

      .overview {
        border-left: 0.3rem solid ${(props) => props.theme.primary};
        padding-left: 2rem;

        color: ${(props) => props.theme.titleColor};

        h2 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        p {
          font-size: 1.05rem;
          line-height: 1.5;
        }
      }

      > div {
        margin-bottom: 2.5rem;

        p {
          margin-top: 0.4rem;
        }

        h1 {
          color: ${(props) => props.theme.primary};
          font-size: 3rem;
        }

        h3 {
          color: ${(props) => props.theme.titleColor};
        }
      }

      .moreBtn > a {
        display: inline-block;
        padding: 1rem 2.5rem;
        font-weight: bold;
        background: ${(props) => props.theme.primary};
        color: #000;
      }
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');

  @font-face {
    font-family: "NotoReg";
    src: url("/fonts/NotoSansKR/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "NotoBold";
    src: url("/fonts/NotoSansKR/NotoSansKR-Bold.otf");
  }

  @font-face {
    font-family: "GMarketReg";
    src: url("/fonts/GmarketSans/GmarketSansMedium.otf");
  }

  @font-face {
    font-family: "GMarketBold";
    src: url("/fonts/GmarketSans/GmarketSansBold.otf");

  }

  @font-face {
    font-family: "PretendardBold";
    src: url("/fonts/Pretendard/Pretendard-Bold.otf");
  }

  @font-face {
    font-family: "PretendardReg";
    src: url("/fonts/Pretendard/Pretendard-Regular.otf");
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "PretendardReg";

    outline: none;
    letter-spacing: -1px;
    word-break: break-all;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "GMarketBold";
  }

  b {
    font-family: "NotoBold";
  }

  b.G {
    font-family: "GMarketBold";
  }

  // 반응형
  @media only screen and (max-width: 1590px) {
    html, body {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    html, body {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 720px) {
    html, body {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 600px) {
    html, body {
      font-size: 12px;
    }
  }
`;

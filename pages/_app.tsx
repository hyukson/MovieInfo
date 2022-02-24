import { Router } from "next/router";

import type { AppProps } from "next/app";

import { useEffect, useState } from "react";

import { defaultTheme } from "~/styles/theme";

import { GlobalStyled } from "~/styles/styled";

import { ThemeProvider } from "styled-components";

import Loading from "~/components/atoms/Loading";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);

  // 로딩바
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));

    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <Loading loading={loading} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

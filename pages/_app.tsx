import { Router } from "next/router";

import type { AppProps } from "next/app";

import { useEffect, useState } from "react";

import { defaultTheme } from "~/styles/theme";

import { GlobalStyled } from "~/styles/styled";

import { ThemeProvider } from "styled-components";

import Loading from "~/components/atoms/Loading";
import Footer from "~/components/organisms/Footer";
import Header from "~/components/organisms/Header";
import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [loading, setLoading] = useState(false);
  const isExcludePage = ["/topRated"].includes(router.route);

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

      <WrapStyled>
        <Header />

        <Component {...pageProps} />

        {!isExcludePage && <Footer />}
      </WrapStyled>
    </ThemeProvider>
  );
};

export default MyApp;

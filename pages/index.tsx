import type { NextPage } from "next";

import Header from "~/components/organisms/Header";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const Home: NextPage = () => {
  return (
    <WrapStyled>
      <Header />

      <h2>ㅁㄴㅇㅁㄴㅇ</h2>
    </WrapStyled>
  );
};

export default Home;

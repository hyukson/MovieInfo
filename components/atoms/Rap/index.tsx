import { ReactNode } from "react";

import { RapStyled } from "./styled";

interface RapTypes {
  children: ReactNode;
}

const Rap = ({ children }: RapTypes) => {
  return <RapStyled className="wrap">{children}</RapStyled>;
};

export default Rap;

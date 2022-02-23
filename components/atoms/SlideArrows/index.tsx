import React from "react";

import Image from "next/image";

import prevIcon from "~icons/arrowLeftBlack.png";
import nextIcon from "~icons/arrowRightBlack.png";

import { SlideArrowsStyled } from "./styled";

interface SlideArrowsTypes {
  handle: any;
}

const SlideArrows = ({ handle }: SlideArrowsTypes) => {
  return (
    <SlideArrowsStyled>
      <div className="arrows">
        <div
          className="left"
          onClick={() => {
            handle.slidePrev();
          }}
        >
          <Image src={prevIcon} alt="arrow" width={9 * 1.5} height={14 * 1.5} />
        </div>
        <div
          className="right"
          onClick={() => {
            handle.slideNext();
          }}
        >
          <Image src={nextIcon} alt="arrow" width={9 * 1.5} height={14 * 1.5} />
        </div>
      </div>
    </SlideArrowsStyled>
  );
};

export default SlideArrows;

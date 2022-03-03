import { PosterStyled } from "./styled";

import Image from "next/image";

import noImage from "~/assets/icons/noImage.png";
import { useRef } from "react";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface PosterTypes {
  className: string;
  path?: string;
  type?: string;
  alt?: string;
  objectFit?: string;
  onclick?: () => void;
}

const Poster = ({ className, path, type, alt, onclick }: PosterTypes) => {
  const ref = useRef<any>(null);

  return (
    <PosterStyled className={className} onClick={onclick}>
      <Image
        className="swiper-lazy"
        src={path ? `${imgURL}/${type}${path}` : noImage}
        alt={alt}
        layout="fill"
        onLoad={() => ref.current.remove()}
      />

      <div className="swiper-lazy-preloader" ref={ref} />
    </PosterStyled>
  );
};

Poster.defaultProps = {
  type: `w500`,
  alt: "poster",
};

export default Poster;

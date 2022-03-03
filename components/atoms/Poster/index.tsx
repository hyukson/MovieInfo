import { PosterStyled } from "./styled";

import Image from "next/image";

import noImage from "~/assets/icons/noImage.png";

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
  return (
    <PosterStyled className={className} onClick={onclick}>
      <Image
        className="swiper-lazy"
        src={path ? `${imgURL}/${type}${path}` : noImage}
        alt={alt}
        layout="fill"
      />

      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </PosterStyled>
  );
};

Poster.defaultProps = {
  type: `w500`,
  alt: "poster",
};

export default Poster;

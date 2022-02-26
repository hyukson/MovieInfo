import Image from "next/image";

import Rap from "~/components/atoms/Rap";

import { TopRatedContentStyled } from "./styled";

import Link from "next/link";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface TopRatedContentTypes {
  item: any;
}

const TopRatedContent = ({ item }: TopRatedContentTypes) => {
  console.log(item);

  return (
    <TopRatedContentStyled>
      <div className="backPoster">
        {item.backdrop_path ? (
          <div className="image">
            <Image
              src={`${imgURL}/original${item.backdrop_path}`}
              alt="poster"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <Rap>
        <div className="visualSection">
          <div className="direction">
            <div>
              <h1>{item.title}</h1>
              <h3>{item.original_title}</h3>
            </div>

            <div className="flex">
              <div>
                <h3>개봉일</h3>
                <p>{item.release_date}</p>
              </div>

              <div>
                <h3>평점</h3>
                <p>{item.vote_average} / 10</p>
              </div>
            </div>

            {item.overview && (
              <div className="overview">
                <h2>{item.tagline || ""}</h2>
                <p>{item.overview.substr(0, 270)}...</p>
              </div>
            )}

            <div className="moreBtn">
              <Link href={`/detail/${item.id}`}>
                <a>Watch Now</a>
              </Link>
            </div>
          </div>

          <div className="slider"></div>
        </div>
      </Rap>
    </TopRatedContentStyled>
  );
};

export default TopRatedContent;

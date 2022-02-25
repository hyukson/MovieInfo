import Image from "next/image";

import Rap from "~/components/atoms/Rap";

import { DetailVisualStyled } from "./styled";

import noImage from "~icons/noImage.png";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface DetailVisualTypes {
  item: any;
}

const DetailVisual = ({ item }: DetailVisualTypes) => {
  const countries = item.production_countries
    .map((v: any) => v.name)
    .join(" / ");

  return (
    <DetailVisualStyled>
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
          <div className="poster">
            <Image
              src={
                item.poster_path ? `${imgURL}/w500${item.poster_path}` : noImage
              }
              alt="poster"
              layout="fill"
            />
          </div>

          <div className="direction">
            <div>
              <h1>{item.title}</h1>
              <h3>{item.original_title + ` (${countries})`}</h3>
            </div>

            {item.overview && (
              <div>
                <h3>줄거리</h3>
                <p>{item.overview.substr(0, 126)} ....</p>
              </div>
            )}

            <div>
              <h3>개봉일</h3>
              <p>{item.release_date}</p>
            </div>

            <div>
              <h3>장르</h3>
              <p>
                {item.genres.map((v: any) => v.name).join(", ") ||
                  "해당 정보가 존재하지 않습니다."}
              </p>
            </div>
          </div>
        </div>

        {item.overview && (
          <section className="overview">
            <h2>{item.tagline || ""}</h2>
            <p>{item.overview}</p>
          </section>
        )}
      </Rap>
    </DetailVisualStyled>
  );
};

export default DetailVisual;

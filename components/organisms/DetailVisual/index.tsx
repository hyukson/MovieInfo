import Rap from "~/components/atoms/Rap";

import { DetailVisualStyled } from "./styled";

import Poster from "~/components/atoms/Poster";

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
          <Poster
            className="image cover"
            path={item.backdrop_path}
            type="original"
          />
        ) : (
          ""
        )}
      </div>

      <Rap>
        <div className="visualSection">
          <Poster className="poster" path={item.poster_path} />

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

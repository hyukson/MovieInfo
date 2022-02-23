import Image from "next/image";

import { DetailVisualStyled } from "./styled";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface DetailVisualTypes {
  item: any;
}

const DetailVisual = ({ item }: DetailVisualTypes) => {
  console.log(item);

  return (
    <DetailVisualStyled>
      <div className="poster">
        <Image
          src={`${imgURL}/w500${item.poster_path}`}
          alt="poster"
          layout="fill"
        />
      </div>

      <div className="direction">
        <div>
          <h3>{item.title}</h3>
          <h5>Original Title : {item.original_title}</h5>
        </div>

        <div>
          <h5>영화 줄거리</h5>
          <p>{item.overview || "작성된 줄거리가 없습니다."}</p>
        </div>

        <div>
          <h5>태그라인</h5>
          <p>{item.tagline || "작성된 태그라인이 없습니다."}</p>
        </div>

        <div>
          <h5>장르</h5>
          <p>
            {item.genres.map((v: any) => v.name).join(", ") ||
              "작성된 장르가 없습니다."}
          </p>
        </div>

        <div>
          <h5>제조국</h5>
          <p>
            {item.production_countries.map((v: any) => v.name).join(" / ") ||
              "작성된 제조국이 없습니다."}
          </p>
        </div>
      </div>
    </DetailVisualStyled>
  );
};

export default DetailVisual;

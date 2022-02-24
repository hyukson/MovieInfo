import { LoadingStyled } from "./styled";

interface LoadingTypes {
  loading: boolean;
}

const Loading = ({ loading }: LoadingTypes) => {
  return (
    <LoadingStyled className={loading ? "open" : ""}>
      <div className="cube">
        <div className="topCover"></div>

        <div>
          <span>
            <h2>Loading</h2>
            <h2>Loading</h2>
          </span>
          <span>
            <h2>Loading</h2>
            <h2>Loading</h2>
          </span>
          <span>
            <h2>Loading</h2>
            <h2>Loading</h2>
          </span>
          <span>
            <h2>Loading</h2>
            <h2>Loading</h2>
          </span>
        </div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;

import { LoadingStyled } from "./styled";

const Loading = () => {
  return (
    <LoadingStyled>
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

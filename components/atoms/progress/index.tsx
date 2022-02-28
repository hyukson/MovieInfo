import { useEffect, useState } from "react";
import { ProgressStyled } from "./styled";

interface ProgressTypes {
  active?: number;
}

const Progress = ({ active }: ProgressTypes) => {
  const [rander, setRander] = useState("active");

  // 강제 렌더링
  useEffect(() => {
    setRander("none");

    const timer = setTimeout(() => setRander("active"), 50);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <ProgressStyled>
      <div className={rander}></div>
    </ProgressStyled>
  );
};

export default Progress;

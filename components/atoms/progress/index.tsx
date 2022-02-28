import { useEffect, useState } from "react";
import { ProgressStyled } from "./styled";

interface ProgressTypes {
  active?: number;
  isStop: boolean;
}

const Progress = ({ active, isStop }: ProgressTypes) => {
  const [rander, setRander] = useState("active");

  // 강제 렌더링
  useEffect(() => {
    setRander("none");

    if (isStop) {
      return;
    }

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

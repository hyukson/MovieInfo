import { atom } from "recoil";

export const gradeItemState = atom({
  key: "gradeItem",
  default: {},
});

export const gradeInputDataState = atom({
  key: "gradeInputData",
  default: { title: "", selected: "" },
});

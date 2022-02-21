import { urlObjectKeys } from "next/dist/shared/lib/utils";
import { selector } from "recoil";
import { gradeItemState } from "./atom";

export const itemsStateSelector = selector({
  key: "itemsStateSelector",

  get: ({ get }) => {
    const items = get(gradeItemState);

    return Object.keys(items).length;
  },
});

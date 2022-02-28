import axios from "axios";

import { useCallback, useEffect, useState } from "react";

const useScrollPagination = (url: string, startItems: any) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(startItems);
  const [pageNum, setPageNum] = useState(startItems.length == 20 ? 1 : -1);
  const [value, setValue] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (pageNum > 1) {
      setLoading(true);

      axios.get(`${url}&page=${pageNum}`).then((res) => {
        const results = res.data.results;

        if (results.length != 20) {
          setPageNum(-1);
        }

        setTimeout(() => {
          setItems([...(new Set([...items, ...results]) as any)]);

          setLoading(false);
        }, 300);
      });
    }

    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [pageNum, value]);

  const infiniteScroll = () => {
    if (pageNum === -1) {
      return;
    }

    const maxScroll = document.documentElement.scrollHeight;

    const nowOffset = window.scrollY + window.innerHeight;

    if (maxScroll <= nowOffset) {
      setPageNum((prePageNum) => prePageNum + 1);
    }
  };

  const clearPage = useCallback((claerItems, value) => {
    setPageNum(claerItems.length == 20 ? 1 : -1);

    setItems(claerItems);
    setValue(value);

    window.scrollTo(0, 0);
  }, []);

  return {
    loading,
    items,
    pageNum,
    clearPage,
  };
};

export default useScrollPagination;

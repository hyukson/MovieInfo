import axios from "axios";

import { useCallback, useEffect, useState } from "react";

const useScrollPagination = (url: string, startItems: any) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(startItems);
  const [pageNum, setPageNum] = useState(1);

  const clearPage = useCallback((claerItems) => {
    setPageNum(1);
    setItems(claerItems);

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (pageNum > 1) {
      setLoading(true);

      axios.get(`${url}&page=${pageNum}`).then((res) => {
        const results = res.data.results;

        console.log(results);

        if (results.length != 20) {
          console.log("asd");
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
  }, [pageNum]);

  const infiniteScroll = () => {
    if (pageNum == -1) {
      return;
    }

    const maxScroll = document.documentElement.scrollHeight;

    const nowOffset = window.scrollY + window.innerHeight;

    if (maxScroll <= nowOffset) {
      setPageNum((prePageNum) => prePageNum + 1);
    }
  };

  return {
    loading,
    items,
    pageNum,
    clearPage,
  };
};

export default useScrollPagination;

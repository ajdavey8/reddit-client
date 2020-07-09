import { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

const useScroll = (callback: Function) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 500));
  });

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  function handleScroll() {
    if (
      window.innerHeight + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useScroll;

import { useState, useEffect } from 'react';

type State = {
  windowWidth: number | undefined;
  windowHeight: number | undefined;
};
const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState<State>({
    windowWidth: undefined,
    windowHeight: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowWidth;

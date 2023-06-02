import { useEffect, useState, MutableRefObject } from 'react';
const useNavScroll = <T extends HTMLDivElement>(
  ref: MutableRefObject<T>,
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionRef = ref?.current;
    const options = {
      rootMargin,
      threshold,
    };
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !sectionRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      console.log(sectionRef.id, entry.isIntersecting);
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, options);
    if (ref?.current) observer.observe(sectionRef);
    return () => {
      observer.unobserve(sectionRef);
    };
  }, [ref, threshold, rootMargin]);
  return isVisible;
};

export default useNavScroll;

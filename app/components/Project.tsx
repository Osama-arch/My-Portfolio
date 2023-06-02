import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import useWindowWidth from '../hook/useWindowWidth';
type ProjectProps = {
  slides: Array<SlidesType>;
  index: number;
  setIsShown: (e: boolean) => void;
  isShown: boolean;
};
type SlidesType = {
  id: number;
  title: string;
  text: string[];
  stack: string[];
  imageUrl: string;
};
const Project = ({ setIsShown, index, isShown, slides }: ProjectProps) => {
  const containerRef: any = useRef<HTMLDivElement>();
  const imageRef: any = useRef(new Array());
  const [imageHeight, setImageHeight] = useState(0);
  const { windowWidth } = useWindowWidth();
  useEffect(() => {
    setImageHeight(
      containerRef.current.clientHeight - imageRef.current[index].scrollHeight
    );
  }, [index, windowWidth]);
  return (
    <div
      ref={containerRef}
      className={`gradient-border absolute  right-0 top-0 z-10 col-start-5 col-end-13   h-full w-full rounded after:rounded `}
      onMouseEnter={() => setIsShown(true)}
      onMouseOut={() => setIsShown(false)}>
      <div
        className={`relative  h-full max-w-[1600] overflow-hidden  rounded   bg-primaryBgColor `}>
        {slides.map((data, indx) => {
          return (
            <Image
              priority
              ref={(element) => imageRef.current.push(element)}
              key={data.id}
              width={1600}
              height={800}
              src={data.imageUrl}
              style={{ ['--translateImage' as any]: `${imageHeight}px` }}
              alt='online zoo project'
              className={` absolute top-0 transition-all   ${
                data.id === index
                  ? `animate-project-left left-0  opacity-30 ${
                      isShown &&
                      'duration-[3s]  hover:translate-y-[var(--translateImage)] hover:opacity-90 hover:transition-all hover:delay-500 hover:duration-[6s] hover:ease-linear'
                    }`
                  : 'left-full opacity-0'
              } `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;

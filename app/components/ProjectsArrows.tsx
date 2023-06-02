import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

type PropsType = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  slides: Array<SlidesType>;
};
type SlidesType = {
  id: number;
  title: string;
  text: string[];
  stack: string[];
  imageUrl: string;
};
const ProjectsArrows = ({ index, setIndex, slides }: PropsType) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(true);
    setIndex(0);
    setIsClicked(false);
  }, [setIndex]);
  return (
    <div className='absolute bottom-0 left-0  right-0 z-10 col-start-5 col-end-13 w-full content-center '>
      <div className=' gradient-border relative mx-auto mb-4 flex h-fit w-full items-center justify-between  rounded-full bg-primaryBgColor/80  p-1 after:rounded-full md:w-[50%]'>
        <button
          type='button'
          aria-label='slide back'
          disabled={isClicked}
          className=' gradient-border relative  z-10 w-fit rounded-[50%]   after:rounded-[50%] '
          onClick={() => {
            setIsClicked(true);
            if (index - 1 < 0) {
              setIndex(slides.length - 1);
            } else {
              setIndex((prev: number) => prev - 1);
            }
            setTimeout(() => {
              setIsClicked(false);
            }, 1200);
          }}>
          <span className='group block h-fit   w-fit rounded-[50%] border-[1px] border-transparent bg-primaryBgColor/90 p-1 text-primaryTextColor hover:bg-hoverBgColor/90  hover:text-thirdTextColor'>
            <FaAngleLeft
              className='  text-hoverBgColor group-hover:text-primaryTextColor group-hover:transition group-hover:duration-150 group-hover:ease-in  '
              size={20}
            />
          </span>
        </button>
        <div className=' text-hoverBgColor'>|</div>
        <button
          disabled={isClicked}
          type='button'
          aria-label='slide forward'
          className=' gradient-border relative  z-10 w-fit rounded-[50%]   after:rounded-[50%] '
          onClick={() => {
            setIsClicked(true);
            if (index + 1 > slides.length - 1) {
              setIndex(0);
            } else {
              setIndex((prev) => prev + 1);
            }
            setTimeout(() => {
              setIsClicked(false);
            }, 1200);
          }}>
          <span className='group block h-fit   w-fit rounded-[50%] border-[1px] border-transparent bg-primaryBgColor/90 p-1 text-primaryTextColor hover:bg-hoverBgColor/90 hover:text-thirdTextColor'>
            <FaAngleRight
              className='  text-hoverBgColor group-hover:text-primaryTextColor group-hover:transition group-hover:duration-150 group-hover:ease-in  '
              size={20}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsArrows;

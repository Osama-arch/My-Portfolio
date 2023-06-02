import React from 'react';

import Link from 'next/link';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

type PropsType = {
  githubUrl: string;
  preview: string;
};
const ProjectsButtons = ({ githubUrl, preview }: PropsType) => {
  return (
    <div className='mt-1 flex flex-wrap justify-start gap-3 lg:mt-2 xl:gap-4  '>
      <div className=' gradient-border    relative w-fit rounded bg-no-repeat after:rounded hover:text-hoverBgColor'>
        <Link
          href={preview}
          aria-label='go to demo live'
          className='  group flex h-full min-w-[88px] items-center justify-between gap-x-1 rounded border-transparent  bg-primaryBgColor  p-1 text-[16px] font-medium  leading-4  text-primaryTextColor hover:bg-primaryBgColor/80 hover:text-hoverBgColor hover:transition  hover:duration-150 hover:ease-in sm:min-w-[96px] sm:p-2  xl:min-w-[112px]'>
          <span>Preview</span>
          <FaExternalLinkSquareAlt
            className=' text-primaryTextColor group-hover:text-hoverBgColor group-hover:transition group-hover:duration-150 group-hover:ease-in'
            size={16}
          />
        </Link>
      </div>
      <div className=' gradient-border   relative z-10 w-fit rounded bg-no-repeat after:rounded hover:text-hoverBgColor'>
        <Link
          href={githubUrl}
          aria-label='go to github repository'
          target='_blank'
          className='  group flex h-full min-w-[88px] items-center justify-between gap-x-1 rounded border-transparent  bg-primaryBgColor  p-1 text-[16px] font-medium  leading-4  text-primaryTextColor hover:bg-primaryBgColor/80 hover:text-hoverBgColor hover:transition  hover:duration-150 hover:ease-in sm:min-w-[96px] sm:p-2  xl:min-w-[112px]'>
          <span>Github</span>
          <FaGithub
            className='  text-primaryTextColor group-hover:text-hoverBgColor group-hover:transition group-hover:duration-150 group-hover:ease-in '
            size={16}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsButtons;

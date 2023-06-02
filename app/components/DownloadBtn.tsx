import Link from 'next/link';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
const DownloadBtn = () => {
  return (
    <div className='   gradient-border    relative z-10  w-fit rounded bg-no-repeat after:rounded hover:text-hoverBgColor '>
      <Link
        href='/pdf/osama-salman-cv.pdf'
        aria-label=' forward to cv'
        className='group flex h-[3.25rem] w-[17rem] items-center justify-center  rounded border-transparent bg-primaryBgColor text-xl  text-primaryTextColor  hover:bg-primaryBgColor/90 hover:text-hoverBgColor hover:transition hover:duration-150 hover:ease-in md:w-[20rem]'>
        <span className='block'>download resume</span>
        <FaDownload
          className=' ml-3 inline-flex  text-primaryTextColor group-hover:text-hoverBgColor group-hover:transition group-hover:duration-150 group-hover:ease-in '
          size={12}
        />
      </Link>
    </div>
  );
};

export default DownloadBtn;

import React from 'react';
import { FaDownload } from 'react-icons/fa';
const DownloadBtn = () => {
  return (
    <div className='   gradient-border    relative z-10  w-fit rounded bg-no-repeat after:rounded hover:text-hoverBgColor '>
      <button
        type='button'
        className='group h-[3.25rem] w-[17rem]  rounded border-transparent bg-primaryBgColor text-xl  text-primaryTextColor  hover:bg-primaryBgColor/90 hover:text-hoverBgColor hover:transition hover:duration-150 hover:ease-in md:w-[20rem]'>
        download resume
        <FaDownload
          className=' ml-3 inline-flex  text-primaryTextColor group-hover:text-hoverBgColor group-hover:transition group-hover:duration-150 group-hover:ease-in '
          size={12}
        />
      </button>
    </div>
  );
};

export default DownloadBtn;

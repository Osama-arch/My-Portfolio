import React from 'react';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='w-full bg-primaryBgColor  py-10 '>
      <div className='text-white mx-auto flex h-full w-full max-w-[320px] justify-evenly text-4xl   md:h-auto md:flex-row  lg:gap-8 lg:text-5xl '>
        <Socials size={16} />
      </div>
      <p className='mt-4 text-center text-base italic text-primaryTextColor'>
        2023 designed & developed by Osama Salman
      </p>
    </footer>
  );
};

export default Footer;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type SkillProps = {
  name: string;
  icon: any;
  href: string;
};
const Skill = ({ icon, name, href }: SkillProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className=' min-w-36 gradient-border relative  aspect-square w-full rounded after:rounded '>
      <a
        href={href}
        aria-label={`go to ${name} website`}
        className={`grid h-full w-full place-items-center rounded border-transparent bg-primaryBgColor md:min-w-[120px] ${
          isHover && ' opacity-90'
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <div className='w-[50%]'>
          <Image
            width='200'
            height='200'
            src={icon}
            alt='react software'
            className=' aspect-auto w-full'
          />
        </div>
        <p className=' text-base uppercase text-primaryTextColor md:text-lg lg:text-xl'>
          {name}
        </p>
      </a>
    </div>
  );
};

export default Skill;

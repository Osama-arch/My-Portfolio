import React from 'react';
import Image from 'next/image';

type SkillProps = {
  name: string;
  icon: any;
};
const Skill = ({ icon, name }: SkillProps) => {
  return (
    <div className=' min-w-36 gradient-border relative  aspect-square w-full rounded after:rounded '>
      <div className='grid h-full w-full min-w-[120px] place-items-center rounded border-transparent bg-primaryBgColor'>
        <div className='w-[50%]'>
          <Image
            width='200'
            height='200'
            src={icon}
            alt='react software'
            className=' aspect-auto w-full'
          />
        </div>
        <p className=' text-xl uppercase text-primaryTextColor lg:text-2xl'>
          {name}
        </p>
      </div>
    </div>
  );
};

export default Skill;

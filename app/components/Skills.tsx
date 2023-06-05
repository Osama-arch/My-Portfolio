'use client';

import { useRef, useEffect } from 'react';
import Skill from './Skill';
import { useNavbarContext } from '../context/NavbarProvider';
import { data } from '../utilities/data';
import useNavScroll from '../hook/useNavScroll';
import useWindowWidth from '../hook/useWindowWidth';
import { animated } from '@react-spring/web';

const Skills = () => {
  const ref: any = useRef();
  const onScreen: boolean = useNavScroll<HTMLDivElement>(ref);
  const { setSectionVisible } = useNavbarContext();
  const { windowWidth } = useWindowWidth();
  useEffect(() => {
    if (onScreen) {
      setSectionVisible(ref.current.id);
    }
  }, [onScreen, windowWidth, setSectionVisible]);

  return (
    <section
      ref={ref}
      id='skills'
      className={` relative grid place-content-center bg-primaryBgColor bg-skill-pattern bg-[center_center] bg-no-repeat py-10 md:py-20 xl:min-h-screen`}>
      <animated.div
        className={`mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 `}
        style={{ opacity: onScreen ? 1 : 0, transition: '2s ease-in-out' }}>
        <h3 className='mb-2  text-3xl  font-bold  uppercase text-thirdTextColor lg:text-5xl'>
          Skills & Software
        </h3>
        <p className=' mb-12  text-primaryTextColor/90 lg:text-2xl  '>
          What I love to do, what I do best and some things I can help you with
        </p>

        <div className='max-w relative z-10  mx-auto grid   w-full grid-cols-3 gap-2  sm:grid-cols-4   sm:gap-8 xl:grid-cols-6 xl:gap-12'>
          {data.map((item, indx) => {
            const { id, icon, name, href } = item;
            return <Skill key={id} icon={icon} name={name} href={href} />;
          })}
        </div>
      </animated.div>
    </section>
  );
};

export default Skills;

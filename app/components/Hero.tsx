'use client';
import { useEffect, useRef } from 'react';
import VideoBackground from './VideoBackground';
import HeroImage from './HeroImage';
import HeroDescreption from './HeroDescreption';
import Socials from './Socials';
import { useNavbarContext } from '../context/NavbarProvider';
import useNavScroll from '../hook/useNavScroll';
import useWindowWidth from '../hook/useWindowWidth';
import { animated } from '@react-spring/web';

const data = {
  name: 'Osama Salman',
  occupation: 'Front-End Developer',
  fParagraph: `I'm a  focusing on developing single page applications , using Reactjs and related technologies. I'm alse pashoinate of learning new technologies.`,
  sParagraph: `Here are the best of my projects until now. I'm working on new projects, and I'll represent them soon.`,
  imageSrc: '/images/image-cv.png',
};
const Hero = () => {
  const { name, occupation, sParagraph, imageSrc } = data;
  const { setSectionVisible } = useNavbarContext();
  const { windowWidth } = useWindowWidth();

  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useNavScroll<HTMLDivElement>(ref);

  useEffect(() => {
    if (onScreen) setSectionVisible(ref.current.id);
  }, [onScreen, windowWidth, setSectionVisible]);
  return (
    <>
      <VideoBackground />
      <section
        ref={ref}
        id='about'
        className=' vid-bg   relative  grid w-full content-center   bg-primaryBgColor/80 pb-10 pt-20  md:pb-20 md:pt-40  xl:h-screen'>
        <animated.div
          className=' mx-auto   my-0  flex h-full w-full  max-w-[1440px] flex-col-reverse justify-between gap-8  px-6 md:flex-row     md:flex-nowrap    md:px-16 lg:px-20 xl:max-h-[500px]'
          style={{ opacity: onScreen ? 1 : 0, transition: '2s ease-in-out' }}>
          <HeroDescreption
            name={name}
            occupation={occupation}
            sParagraph={sParagraph}
          />
          <div className='  flex h-full  grow flex-col items-center  justify-between gap-8 md:max-w-[35%] lg:max-w-[512px] xl:flex-row  '>
            <HeroImage imageSrc={imageSrc} />
            <div className='text-white  flex h-full w-full justify-evenly   text-4xl   md:h-auto  lg:place-content-end lg:gap-8 lg:text-5xl xl:w-fit xl:flex-col   '>
              <Socials size={24} />
            </div>
          </div>
        </animated.div>
      </section>
    </>
  );
};

export default Hero;

'use client';
import { useRef, useEffect, useState } from 'react';

import ProjectDescreption from './ProjectDescreption';
import Project from './Project';
import ProjectsArrows from './ProjectsArrows';

import { useNavbarContext } from '../context/NavbarProvider';
import useNavScroll from '../hook/useNavScroll';
import useWindowWidth from '../hook/useWindowWidth';
import { animated } from '@react-spring/web';

const slides = [
  {
    id: 0,
    title: 'PetStory-online',
    text: [
      'platform to gather information about animals.',
      '\nIt is supposed that the user can open a page with the resources of the zoo, observe any of the animals or make a donation on which to buy food.',
      "\nI've created the main page, and the page with donates.",
    ],
    stack: ['React', 'LocalStorage', 'Scss'],
    imageUrl: '/images/zoo.jpg',
    githubUrl: 'https://github.com/Osama-arch/petStory',
    preview: 'https://osama-arch.github.io/petStory/',
  },
  {
    id: 1,
    title: 'Little Lemon Restaurant',
    text: [
      'design and prototype the features of the Little Lemon restaurant website.',
      '\nIt is supposed that the user can reserve a table in the restaurant, and choose food from the menu',
      "\nI've created the main page, and the reservation page",
    ],
    stack: ['React', 'CSS', 'Local Storage'],
    imageUrl: '/images/littleLemon.jpg',
    githubUrl: 'https://github.com/Osama-arch/LIttle_lemon_React',
    preview: 'https://osama-arch.github.io/LIttle_lemon_React/',
  },
  {
    id: 2,
    title: 'Zonabg hosting',
    text: [
      'redesign and prototype the features of the ZonaBg website.',
      '\nIt is supposed that the user can reserve a domain for their websites',
      "\nI've created  a landing info page",
    ],
    stack: ['HTML', 'CSS', 'JS'],
    imageUrl: '/images/zonabg.jpg',
    githubUrl: 'https://github.com/Osama-arch/ZonaBg',
    preview: 'https://osama-arch.github.io/ZonaBg/',
  },
];

const Projects = () => {
  const [isShown, setIsShown] = useState(false);
  const [index, setIndex] = useState(0);
  const ref: any = useRef<HTMLDivElement>();
  const { setSectionVisible } = useNavbarContext();
  const onScreen: boolean = useNavScroll<HTMLDivElement>(ref);
  const { windowWidth } = useWindowWidth();
  useEffect(() => {
    if (onScreen) setSectionVisible(ref.current.id);
  }, [onScreen, windowWidth, setSectionVisible]);

  return (
    <>
      <section
        ref={ref}
        id='projects'
        className={`  w-full  bg-primaryBgColor  bg-[center_top_14rem] py-10 md:py-20`}>
        <animated.div
          className='mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20'
          style={{ opacity: onScreen ? 1 : 0, transition: '2s ease-in-out' }}>
          <h3 className='mb-2  text-3xl  font-bold  uppercase text-thirdTextColor lg:text-5xl '>
            My Portfolio
          </h3>
          <p className=' mb-12  text-primaryTextColor/90 lg:text-2xl  '>
            the main projects I have worked on, or some of my side projects
          </p>
          <div className='relative grid h-96 grid-cols-12 content-center p-[1px] sm:h-full  sm:min-h-[75vh] '>
            <div className=' absolute left-0 top-0 grid h-full  w-full grid-cols-12 content-center  '>
              <ProjectDescreption
                slides={slides}
                isShown={isShown}
                index={index}
              />
              <Project
                slides={slides}
                setIsShown={setIsShown}
                index={index}
                isShown={isShown}
              />
            </div>
            <ProjectsArrows index={index} setIndex={setIndex} slides={slides} />
          </div>
        </animated.div>
      </section>
    </>
  );
};

export default Projects;

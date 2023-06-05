'use client';
import { useRef, useEffect } from 'react';
import { useNavbarContext } from '../context/NavbarProvider';
import useNavScroll from '../hook/useNavScroll';
import useWindowWidth from '../hook/useWindowWidth';
import { FaGlobe, FaEnvelope } from 'react-icons/fa';
import Contact from '../components/Contact';
import { animated } from '@react-spring/web';
const Contacts = () => {
  const ref: any = useRef<HTMLDivElement>(null);
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
      id='contact'
      ref={ref}
      className={`   w-full  bg-primaryBgColor  bg-[center_top_14rem] py-10 md:py-20`}
      style={{ opacity: onScreen ? 1 : 0, transition: '2s ease-in-out' }}>
      <animated.div className='mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20'>
        <h3 className='mb-2  text-3xl  font-bold  uppercase text-thirdTextColor lg:text-5xl '>
          Contact Me
        </h3>
        <p className=' mb-16 text-primaryTextColor/90  md:mb-28 lg:text-2xl  '>
          Ready to discuss Your offer, or your project!
        </p>
        <div
          className={`gradient-border relative z-10 flex h-full w-full  justify-between rounded after:rounded`}>
          <div className='m-6 hidden max-w-[35%] space-y-10 md:block lg:max-w-[30%]'>
            <h4 className=' text-shadow ml-8 text-xl font-semibold text-primaryTextColor lg:text-2xl'>
              Contact information
            </h4>
            <div className='flex  items-center'>
              <div className='gradient-border relative  z-10 w-fit rounded-[50%]   shadow-[0_0px_8px_3px_rgba(7,20,36,.5)] after:rounded-[50%]'>
                <span className='block h-fit w-fit   rounded-[50%] border-[1px] border-transparent bg-primaryBgColor p-2 text-primaryTextColor hover:bg-primaryBgColor/90 hover:text-thirdTextColor '>
                  <FaGlobe size={24} />
                </span>
              </div>
              <div className='ml-4'>
                <h5 className='text-shadow text-base text-primaryTextColor xl:text-xl '>
                  Address
                </h5>
                <address className='text-shadow text-base text-primaryTextColor xl:text-xl '>
                  Remote,Anywhere
                </address>
              </div>
            </div>
            <div className='flex  items-center'>
              <div className='gradient-border relative  z-10 w-fit rounded-[50%]   shadow-[0_0px_8px_3px_rgba(7,20,36,.5)] after:rounded-[50%]'>
                <span className='block h-fit w-fit   rounded-[50%] border-[1px] border-transparent bg-primaryBgColor p-2 text-primaryTextColor hover:bg-primaryBgColor/90 hover:text-thirdTextColor '>
                  <FaEnvelope size={24} />
                </span>
              </div>
              <div className='ml-4'>
                <h5 className='text-shadow text-base text-primaryTextColor xl:text-xl'>
                  Email
                </h5>
                <address className='text-shadow text-base text-primaryTextColor xl:text-xl'>
                  osama.salman.info@gmail.com
                </address>
              </div>
            </div>
            <div className='flex  items-center pt-4 xl:pt-1 '>
              <p className='  rounded-lg bg-primaryBgColor p-4 text-center text-xl text-primaryTextColor xl:p-7'>
                If you have a question or a request for us, feel free to contact
                us using the form on the right.
              </p>
            </div>
          </div>
          <div className=' w-full rounded bg-primaryBgColor p-6 md:max-w-[65%] lg:max-w-[70%] '>
            <Contact />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Contacts;

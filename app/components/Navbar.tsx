'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuFries, CiMenuBurger } from 'react-icons/ci';
import { VscChromeClose } from 'react-icons/vsc';
import useWindowWidth from '../hook/useWindowWidth';
import { useNavbarContext } from '../context/NavbarProvider';
type DataTypes = {
  id: number;
  title: String;
  href: String;
};
type NavProps = {
  href: String;
  title: String;
  handleClick: (anchor: any) => () => void;
  activeLink: String;
};
const data = [
  {
    id: 1,
    title: 'About',
    href: 'about',
  },
  {
    id: 2,
    title: 'Technologies',
    href: 'skills',
  },
  {
    id: 3,
    title: 'Projects',
    href: 'projects',
  },
  {
    id: 4,
    title: 'Contact',
    href: 'contact',
  },
];

const NavLink = ({ href, title, handleClick, activeLink }: NavProps) => {
  return (
    <a
      href={`#${href}`}
      className={`cursor-pointer text-xl font-medium text-primaryTextColor hover:text-hoverBgColor hover:transition hover:duration-150    hover:ease-in ${
        activeLink === href
          ? 'border-b-[2px] border-b-hoverBgColor text-hoverBgColor  '
          : ''
      }`}
      onClick={handleClick(href)}>
      {title}
    </a>
  );
};
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { windowWidth } = useWindowWidth();

  const { sectionVisible, setNavClicked, navClicked } = useNavbarContext();

  const handleClick = (anchor: string) => () => {
    setNavClicked(true);
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      setActiveLink(anchor);
      const y = element.getBoundingClientRect().top;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setTimeout(() => {
      setNavClicked(false);
    }, 600);
  };

  useEffect(() => {
    windowWidth !== undefined && windowWidth >= 768 && setOpenNav(false);
  }, [windowWidth]);
  const scrollEventHandle = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    if (!navClicked && currentScrollPos < 200) {
      setActiveLink('about');
    } else if (!navClicked) {
      setActiveLink(sectionVisible);
      location.hash = sectionVisible;
    } else {
      location.hash = activeLink;
    }
  }, [activeLink, navClicked, sectionVisible]);
  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandle);
    return () => {
      window.removeEventListener('scroll', scrollEventHandle);
    };
  }, [scrollEventHandle]);
  return (
    <>
      {openNav && (
        <div
          onClick={() => setOpenNav(false)}
          className='bg-blue-400 fixed inset-0 z-50 block h-full w-full bg-secondaryBgColor bg-opacity-50 mix-blend-multiply'></div>
      )}
      <header
        className={`gradient-border-nav fixed  z-50  w-full bg-primaryBgColor after:top-full after:h-[1px] `}>
        <div className=' mx-auto  max-w-[1440px] items-center justify-between px-6  py-2 md:flex    md:px-16 md:py-3 lg:px-20'>
          <div className='flex  items-center justify-between '>
            <div>
              <Link href='/'>
                {
                  <Image
                    src='/images/logo-black.png'
                    width={
                      windowWidth !== undefined && windowWidth >= 768
                        ? '48'
                        : '32'
                    }
                    height={
                      windowWidth !== undefined && windowWidth >= 768
                        ? '48'
                        : '32'
                    }
                    alt='logo'
                  />
                }
              </Link>
            </div>
            <div
              className=' transparent cursor-pointer md:hidden'
              onClick={() => setOpenNav(!openNav)}
              onMouseEnter={() => setMenuHover(true)}
              onMouseLeave={() => setMenuHover(false)}>
              {openNav ? (
                <VscChromeClose
                  size={
                    windowWidth !== undefined && windowWidth >= 768
                      ? '56'
                      : '32'
                  }
                  color={menuHover ? 'rgb(251 191 36)' : 'white'}
                />
              ) : menuHover ? (
                <CiMenuFries
                  size={
                    windowWidth !== undefined && windowWidth >= 768
                      ? '56'
                      : '32'
                  }
                  color='rgb(251 191 36)'
                />
              ) : (
                <CiMenuBurger
                  size={
                    windowWidth !== undefined && windowWidth >= 768
                      ? '56'
                      : '32'
                  }
                  color='white'
                />
              )}
            </div>
          </div>

          <nav
            className={`flex w-fit gap-8 py-3 md:gap-0
            ${
              openNav
                ? 'flex-col  '
                : windowWidth !== undefined && windowWidth >= 768
                ? '  justify-between px-0  md:w-[70%] md:flex-row  lg:w-[32rem] '
                : 'hidden'
            }`}>
            {data.map((link: DataTypes) => {
              const { id, title, href } = link;
              return (
                <NavLink
                  key={id}
                  title={title}
                  href={href}
                  activeLink={activeLink}
                  handleClick={handleClick}
                />
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

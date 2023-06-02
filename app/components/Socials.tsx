import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
type DataProps = {
  href: Url;
  Icon: IconType;
  size: string | number | undefined;
};
type SocialProps = {
  size: string | number | undefined;
};
const data = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/osama-salman-577926166/',
    Icon: FaLinkedinIn,
  },
  {
    id: 2,
    href: 'https://github.com/Osama-arch',
    Icon: FaGithub,
  },
  {
    id: 3,
    href: 'mailto:[osama.salman.info@gmail.com]',
    Icon: FaTelegramPlane,
  },
  {
    id: 4,
    href: 'https://twitter.com/Osama00330398',
    Icon: FaTwitter,
  },
];
const Social = ({ href, Icon, size }: DataProps) => {
  return (
    <Link
      className='gradient-border relative  z-10 w-fit rounded-[50%]   after:rounded-[50%] '
      href={href}>
      <span className='block h-fit w-fit   rounded-[50%] border-[1px] border-transparent bg-primaryBgColor p-2 text-primaryTextColor hover:bg-primaryBgColor/90 hover:text-thirdTextColor '>
        <Icon size={size} />
      </span>
    </Link>
  );
};
const Socials = ({ size }: SocialProps) => {
  return (
    <>
      {data.map((item) => {
        const { id, href, Icon } = item;
        return <Social key={id} href={href} Icon={Icon} size={size} />;
      })}
    </>
  );
};

export default Socials;

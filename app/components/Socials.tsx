import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
type DataProps = {
  href: Url;
  Icon: IconType;
  size: string | number | undefined;
  ariaLabel: string;
};
type SocialProps = {
  size: string | number | undefined;
};
const data = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/osama-salman-577926166/',
    Icon: FaLinkedinIn,
    ariaLabel: ' forward to LinkedIn',
  },
  {
    id: 2,
    href: 'https://github.com/Osama-arch',
    Icon: FaGithub,
    ariaLabel: ' forward to github',
  },
  {
    id: 3,
    href: 'http://discordapp.com/users/500298812342927360',
    Icon: FaDiscord,
    ariaLabel: ' forward to discord',
  },
  {
    id: 4,
    href: 'https://twitter.com/Osama00330398',
    Icon: FaTwitter,
    ariaLabel: ' forward to twitter',
  },
];
const Social = ({ href, Icon, size, ariaLabel }: DataProps) => {
  return (
    <Link
      className='gradient-border relative  z-10 w-fit rounded-[50%]   after:rounded-[50%] '
      href={href}
      aria-label={ariaLabel}>
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
        const { id, href, Icon, ariaLabel } = item;
        return (
          <Social
            key={id}
            href={href}
            Icon={Icon}
            size={size}
            ariaLabel={ariaLabel}
          />
        );
      })}
    </>
  );
};

export default Socials;

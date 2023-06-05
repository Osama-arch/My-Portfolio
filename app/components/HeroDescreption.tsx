import DownloadBtn from './DownloadBtn';
type DescreptionProps = {
  name: string;
  occupation: string;
  sParagraph: string;
};
const HeroDescreption = ({
  name,
  occupation,
  sParagraph,
}: DescreptionProps) => {
  return (
    <div className='relative flex h-full  flex-col   space-y-4  md:max-w-[65%] md:justify-between'>
      <h2 className='relative text-[2.5rem] font-bold  uppercase  text-thirdTextColor md:text-5xl lg:text-6xl '>
        {name}
      </h2>
      <p className=' relative -top-4 text-2xl  font-semibold   capitalize text-secondaryTextColor md:text-3xl lg:text-4xl '>
        {occupation}
      </p>
      <div className=' mb-8 max-w-[24rem] space-y-8 lg:max-w-[36rem]'>
        <p className='  text-xl font-thin text-primaryTextColor/90 '>
          I&apos;m focusing on developing single-page applications using ReactJS
          and related technologies. I&apos;m eager to learn new technologies and
          join a new team.
        </p>
        <p className=' hidden text-xl  font-thin  text-primaryTextColor/90 lg:block  '>
          {sParagraph}
        </p>
      </div>
      <DownloadBtn />
    </div>
  );
};

export default HeroDescreption;

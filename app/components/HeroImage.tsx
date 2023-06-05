type imgProps = {
  imageSrc: string;
};
import Image from 'next/image';
const HeroImage = ({ imageSrc }: imgProps) => {
  return (
    <div className='gradient-border  relative z-10  w-full max-w-[400px] rounded after:rounded md:self-end '>
      <div className='relative h-full w-full overflow-hidden rounded'>
        <div className='img-bg opacity-90 '></div>
        <Image
          width={400}
          height={500}
          sizes='100%'
          src={imageSrc}
          alt='Osama photo'
          className='vid-bg h-full  w-full  object-cover opacity-80  '
        />
        <div className='img-bg-2 opacity-90 '></div>
      </div>
    </div>
  );
};

export default HeroImage;

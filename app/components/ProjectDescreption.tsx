import ProjectsButtons from './ProjectsButtons';

type DescriptionProps = {
  slides: Array<SlidesType>;
  index: number;
  isShown: boolean;
};
type SlidesType = {
  id: number;
  title: string;
  text: string[];
  stack: string[];
  imageUrl: string;
  githubUrl: string;
  preview: string;
};
const ProjectDescreption = ({ isShown, index, slides }: DescriptionProps) => {
  return (
    <>
      {slides.map((data, indx) => {
        const { id, title, text, stack, githubUrl, preview } = data;
        return (
          <div
            key={id}
            className={`  absolute bottom-0  top-0 z-30 col-span-7 col-start-1 my-auto   ml-4    h-fit w-full content-center py-4 transition-all md:col-end-7  ${
              isShown &&
              id === index &&
              'opacity-10  transition-opacity  duration-[500ms]'
            } ${
              id === index
                ? 'animate-project-right opacity-100'
                : 'hidden opacity-0'
            }`}>
            <div className='grid h-full w-full place-content-center space-y-4 text-primaryTextColor   '>
              <h4 className='text-left text-2xl sm:font-bold sm:tracking-widest '>
                {title}
              </h4>
              <p
                className={` rounded bg-secondaryTextColor/40 p-1 text-base   lg:p-3`}>
                {text[0]}
                <span className='hidden sm:inline'>{data.text[1]}</span>
                <span>{text[2]}</span>
              </p>
              <div className=' hidden flex-wrap   justify-start gap-x-5  gap-y-1   rounded text-xs sm:flex sm:text-base '>
                {stack.map((item, indx) => {
                  return (
                    <p
                      key={indx}
                      className='  rounded   bg-transparent font-thin'>
                      {item}
                    </p>
                  );
                })}
              </div>
              <ProjectsButtons githubUrl={githubUrl} preview={preview} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectDescreption;

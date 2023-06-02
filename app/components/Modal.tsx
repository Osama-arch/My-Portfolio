import { FaTimes } from 'react-icons/fa';
interface ModalProps {
  isSubmitted?: boolean;
  setIsSubmitted?: (e: boolean) => void;
  isError?: boolean;
  setIsError?: (e: boolean) => void;
}
const Modal = ({
  isSubmitted = false,
  setIsSubmitted,
  isError = false,
  setIsError,
}: ModalProps) => {
  return (
    <div className=' fixed left-0 top-0 z-50 grid h-screen w-screen place-content-center bg-secondaryBgColor/80'>
      <div className=' relative h-fit w-fit rounded-lg  bg-secondaryTextColor p-14 text-2xl text-primaryTextColor'>
        <FaTimes
          size={24}
          className=' absolute right-0 top-0 -translate-x-4  translate-y-4 cursor-pointer text-primaryTextColor hover:text-thirdTextColor'
          onClick={() => {
            if (isSubmitted && setIsSubmitted) setIsSubmitted(false);
            if (isError && setIsError) setIsError(false);
          }}
        />
        {isSubmitted
          ? `Thanks For your Message ,I'll answer very soon!!`
          : ` Somthing went wrong,Please try again in another time!!`}
      </div>
    </div>
  );
};

export default Modal;

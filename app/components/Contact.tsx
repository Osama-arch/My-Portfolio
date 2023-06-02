import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .required('required'),
  user_email: Yup.string().email('Must be a valid Email').required('required'),
  user_phone: Yup.string().matches(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    'Phone number is not valid'
  ),
  user_subject: Yup.string(),
  user_comment: Yup.string()
    .min(25, 'Must be at least 25 characters')
    .required('required'),
});

const initialValues = {
  user_name: '',
  user_email: '',
  user_phone: '',
  user_subject: '',
  user_comment: '',
};

const MessageForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (isSubmitted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSubmitted]);
  return (
    <>
      {isSubmitted && (
        <Modal isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      )}
      {isError && <Modal isError={isError} setIsError={setIsError} />}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: any, { resetForm }) => {
          const service: string | undefined = process.env.EMAILSERVICEDATA;
          const template: string | undefined = process.env.EMAILTEMPLATEDATA;
          const account: string | undefined = process.env.EMAILACCOUNT;
          try {
            if (service && template && account) {
              emailjs.send(service, template, values, account).then(() => {
                setIsSubmitted(true);
                resetForm();
              });
            }
          } catch (error) {
            setIsError(true);
          }
        }}>
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <Form className='flex h-full w-full flex-wrap justify-between gap-x-6'>
              <div className=' relative w-full space-y-2 pb-6 lg:w-[calc(50%_-_12px)]'>
                <label
                  htmlFor='user_name'
                  className='text-2xl text-primaryTextColor'>
                  Name: <span className=' text-inputALert'>*</span>
                </label>
                <Field
                  name='user_name'
                  id='user_name'
                  className={`w-full rounded bg-primaryTextColor/90 p-2  text-2xl outline-none placeholder:text-xl placeholder:text-secondaryBgColor/60  focus-visible:outline-hoverBgColor ${
                    errors.user_name && touched.user_name
                      ? ' border-2 border-inputALert focus-visible:outline-0'
                      : 'focus-visible:outline-1'
                  }`}
                  placeholder='Full name or Organization '
                />
                <ErrorMessage
                  name='user_name'
                  component='span'
                  className='absolute bottom-0 right-0 mt-1 text-base text-inputALert'
                />
              </div>
              <div className='relative w-full space-y-2 pb-6 lg:w-[calc(50%_-_12px)]'>
                <label
                  htmlFor='user_email'
                  className='text-2xl text-primaryTextColor'>
                  Email: <span className=' text-inputALert'>*</span>
                </label>
                <Field
                  type='email'
                  name='user_email'
                  id='user_email'
                  className={`w-full rounded bg-primaryTextColor/90 p-2  text-2xl outline-none placeholder:text-xl placeholder:text-secondaryBgColor/60  focus-visible:outline-hoverBgColor ${
                    errors.user_email && touched.user_email
                      ? ' border-2 border-inputALert focus-visible:outline-0'
                      : 'focus-visible:outline-1'
                  }`}
                  placeholder='Please enter your Email'
                />
                <ErrorMessage
                  name='user_email'
                  component='span'
                  className='absolute bottom-0 right-0 mt-1 text-base text-inputALert'
                />
              </div>
              <div className=' relative w-full space-y-2 pb-6 lg:w-[calc(50%_-_12px)]'>
                <label
                  htmlFor='user_phone'
                  className='text-2xl text-primaryTextColor'>
                  Phone:
                </label>
                <Field
                  type='phone'
                  name='user_phone'
                  id='user_phone'
                  className={`w-full rounded bg-primaryTextColor/90 p-2  text-2xl outline-none placeholder:text-xl placeholder:text-secondaryBgColor/60  focus-visible:outline-hoverBgColor ${
                    errors.user_phone && touched.user_phone
                      ? ' border-2 border-inputALert focus-visible:outline-0'
                      : 'focus-visible:outline-1'
                  }`}
                  placeholder='+000-000000000'
                />
                <ErrorMessage
                  name='user_phone'
                  component='span'
                  className='absolute bottom-0 right-0 mt-1 text-base text-inputALert'
                />
              </div>
              <div className=' relative w-full space-y-2  pb-6 lg:w-[calc(50%_-_12px)]'>
                <label
                  htmlFor='user_subject'
                  className='text-2xl text-primaryTextColor'>
                  Subject: <span className=' text-inputALert'>*</span>
                </label>
                <Field
                  as='select'
                  id='user_subject'
                  name='user_subject'
                  className={`w-full rounded bg-primaryTextColor/90 p-2  text-2xl outline-none placeholder:text-2xl placeholder:text-secondaryBgColor/60 focus-visible:outline-2 focus-visible:outline-hoverBgColor ${
                    errors.user_subject && touched.user_subject
                      ? ' border-2 border-inputALert focus-visible:outline-0'
                      : 'focus-visible:outline-1'
                  }`}>
                  <option value='hireMe'>Freelance project</option>
                  <option value='openSource'>Open source project</option>
                  <option value='jobOffer'>Job offer</option>
                  <option value='other'>Other</option>
                </Field>
                <ErrorMessage
                  name='user_subject'
                  component='span'
                  className='absolute bottom-0 right-0 mt-1 text-base text-inputALert'
                />
              </div>
              <div className='relative w-full space-y-2 pb-6 '>
                <label
                  htmlFor='user_comment'
                  className='text-2xl text-primaryTextColor'>
                  Your Message: <span className=' text-inputALert'>*</span>
                </label>
                <Field
                  as='textarea'
                  rows={4}
                  id='user_comment'
                  name='user_comment'
                  className={`w-full rounded bg-primaryTextColor/90 p-2  text-2xl outline-none placeholder:text-2xl placeholder:text-secondaryBgColor/60  focus-visible:outline-hoverBgColor ${
                    errors.user_comment && touched.user_comment
                      ? ' border-2 border-inputALert focus-visible:outline-0'
                      : 'focus-visible:outline-1'
                  }`}
                />
                <ErrorMessage
                  name='user_comment'
                  component='span'
                  className='absolute bottom-0 right-0 mt-1 text-base text-inputALert'
                />
              </div>
              <div className='grid w-full place-content-center'>
                <div className='gradient-border relative z-10 w-fit rounded bg-no-repeat after:rounded hover:text-hoverBgColor'>
                  <button
                    type='submit'
                    className={`group h-[3.25rem] w-[17rem]  rounded border-transparent bg-primaryBgColor text-2xl  text-primaryTextColor  hover:bg-primaryBgColor/90 hover:text-hoverBgColor hover:transition hover:duration-150 hover:ease-in md:w-[20rem] ${
                      !(dirty && isValid) ? ' cursor-not-allowed' : ''
                    }`}
                    disabled={!(dirty && isValid)}>
                    {isSubmitted ? 'Sending!!' : 'Send Message'}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default MessageForm;

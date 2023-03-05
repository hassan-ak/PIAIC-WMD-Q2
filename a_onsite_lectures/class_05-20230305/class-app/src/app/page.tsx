import React from 'react';
import Image from 'next/image';

export default function Home() {
  const Profile1 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Alexa Kardi</h3>
        <p className='text-sm text-gray-600'>Founder and CEO</p>
      </div>
    );
  };
  const Profile2 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Tavell Monroe</h3>
        <p className='text-sm text-gray-600'>Web Developer</p>
      </div>
    );
  };
  const Profile3 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Adale Smith</h3>
        <p className='text-sm text-gray-600'>Marketing Specialist</p>
      </div>
    );
  };
  const Profile4 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Thomas Mason</h3>
        <p className='text-sm text-gray-600'>UX Designer</p>
      </div>
    );
  };

  const Logo1 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  const Logo2 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  const Logo3 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  const Logo4 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };

  const VideoIcon = () => {
    return (
      <span className='mr-2 inline-block rounded bg-pink-600 p-3 text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
        </svg>
      </span>
    );
  };

  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Class 05 (2023/03/05)
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='flex'>
        <div className='m-3 rounded-lg bg-blue-100 p-6'>
          <p className='mb-1 font-serif text-lg italic leading-snug text-gray-700'>
            “The success combination in business is: Do what you do better...
            and: do more of what you do.”
          </p>
          <span className='text-sm text-gray-500'>- David J. Schwartz</span>
        </div>
        <div className='m-3 rounded-lg bg-blue-100 p-6'>
          <p className='mb-1 font-serif text-lg italic leading-snug text-gray-700'>
            “Give out what you most want to come back.”
          </p>
          <span className='text-sm text-gray-500'>- Robin Sharma</span>
        </div>
        <div className='m-3 rounded-lg bg-blue-100 p-6'>
          <p className='mb-1 font-serif text-lg italic leading-snug text-gray-700'>
            “You don&apos;t have to be great at something to start, but you have
            to start to be great at something.”
          </p>
          <span className='text-sm text-gray-500'>- Zig Ziglar</span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-between rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <h1 className='text-2xl font-bold'>Justify Start</h1>
      <div className='mb-2 bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-start rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <h1 className='text-2xl font-bold'>Justify End</h1>
      <div className='mb-2 bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-end rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <h1 className='text-2xl font-bold'>Justify Center</h1>
      <div className='mb-2 bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-center rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <h1 className='text-2xl font-bold'>Justify Between</h1>
      <div className='mb-2 bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-between rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <h1 className='text-2xl font-bold'>Justify Around</h1>
      <div className='mb-2 bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-around rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <h1 className='text-2xl font-bold'>Justify Evenly</h1>
      <div className='bg-purple-200 p-12 text-center font-sans'>
        <div className='flex justify-evenly rounded-full bg-white p-2'>
          <a
            href='#'
            className='rounded-full bg-blue-500 py-2  px-6 text-white '
          >
            Profile
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Notifications
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Payments
          </a>
          <a
            href='#'
            className='rounded-full bg-blue-50 py-2 px-6 text-gray-800'
          >
            Settings
          </a>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 py-8 text-gray-600'>
        <div className='mx-8 max-w-xs rounded-lg bg-white p-9'>
          <h1 className='text-3xl font-bold text-blue-600'>CSS Flex & Grid</h1>
          <p className='mt- text-justify'>
            This book takes a completely different approach. I won&apos;t teach
            you the things flex and grid can do. Instead, I will first show you
            some components and layouts and make you think how to build them
            using the CSS concepts you already know. Now you have a problem, and
            you want a solution.
          </p>
          <div className='mt-4 flex justify-between'>
            <a
              href='#'
              className='rounded-md bg-blue-200 px-4 py-2 text-sm text-gray-900'
            >
              Prev
            </a>
            <a
              href='#'
              className='rounded-md bg-blue-200 px-4 py-2 text-sm text-gray-900'
            >
              Next
            </a>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='m-14 flex w-auto max-w-none justify-around'>
          <div className='px-6 py-4 text-center'>
            <Image
              src='https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
              className='h-32 w-32 rounded-full object-cover object-top'
              width={150}
              height={150}
              alt='image'
            />
            <h3 className='text-xl font-bold'>Alexa Kardi</h3>
            <p className='text-sm text-gray-600'>Founder and CEO</p>
          </div>
          <div className='px-6 py-4 text-center'>
            <Image
              src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
              className='h-32 w-32 rounded-full object-cover object-top'
              width={150}
              height={150}
              alt='image'
            />
            <h3 className='text-xl font-bold'>Tavell Monroe</h3>
            <p className='text-sm text-gray-600'>Web Developer</p>
          </div>
          <div className='px-6 py-4 text-center'>
            <Image
              src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
              className='h-32 w-32 rounded-full object-cover object-top'
              width={150}
              height={150}
              alt='image'
            />
            <h3 className='text-xl font-bold'>Adale Smith</h3>
            <p className='text-sm text-gray-600'>Marketing Specialist</p>
          </div>
          <div className='px-6 py-4 text-center'>
            <Image
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300'
              className='h-32 w-32 rounded-full object-cover object-top'
              width={150}
              height={150}
              alt='image'
            />
            <h3 className='text-xl font-bold'>Thomas Mason</h3>
            <p className='text-sm text-gray-600'>UX Designer</p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <h1 className='mb-1 text-xl font-bold'>Flex No-Wrap</h1>
        <div className='m-14 flex w-auto max-w-none flex-nowrap justify-around'>
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <h1 className='mb-1 text-xl font-bold'>Flex Wrap</h1>
        <div className='m-14 flex w-auto max-w-none flex-wrap justify-around'>
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <h1 className='mb-1 text-xl font-bold'>Flex Wrap Reverse</h1>
        <div className='m-14 flex w-auto max-w-none flex-wrap-reverse justify-around'>
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 p-12 text-center text-gray-800'>
        <h2 className='text-3xl font-bold'>Top Clients</h2>
        <div className='mt-6 flex flex-wrap justify-around'>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 p-12 text-center text-gray-800'>
        <h2 className='text-3xl font-bold'>Top Clients</h2>
        <div className='mt-6 flex flex-wrap-reverse justify-around'>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='m-12 flex items-center text-gray-800'>
        <VideoIcon />
        <span className='text-lg font-bold'>Video Conference</span>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='flex  flex-wrap items-center justify-evenly text-gray-800'>
        <div className='m-12 flex items-stretch border border-solid border-black'>
          <VideoIcon />
          <span className='border border-gray-400 px-3 text-lg'>Stretch</span>
        </div>
        <div className='m-12 flex items-center border border-solid border-black'>
          <VideoIcon />
          <span className='border border-gray-400 px-3 text-lg'>Center</span>
        </div>
        <div className='m-12 flex items-start border border-solid border-black'>
          <VideoIcon />
          <span className='border border-gray-400 px-3 text-lg'>Start</span>
        </div>
        <div className='m-12 flex items-end border border-solid border-black'>
          <VideoIcon />
          <span className='border border-gray-400 px-3 text-lg'>End</span>
        </div>
        <div className='m-12 flex items-baseline border border-solid border-black'>
          <span className='inline-block rounded bg-pink-600 p-3 text-4xl text-white'>
            V
          </span>
          <span className='border border-gray-400 px-3 text-lg'>Baseline</span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='m-14 flex items-center text-gray-800'>
        <Image
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80'
          alt=''
          width={150}
          height={150}
          className='mr-4 h-20 w-20 rounded-full object-cover'
        ></Image>
        <div>
          <h3 className='text-xl font-bold'>Matt Cooper</h3>
          <p>Designer - CircleAI</p>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 p-8 text-gray-700'>
        <div className='flex w-auto max-w-none items-stretch justify-center'>
          <div className='mx-5 max-w-xs rounded-lg bg-white px-8 py-10 text-center shadow-md'>
            <span className='inline-block rounded-full bg-teal-600 p-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <h2 className='mt-4 text-2xl font-bold'>Photo Shoot</h2>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className='mx-5 max-w-xs rounded-lg bg-white px-8 py-10 text-center shadow-md'>
            <span className='inline-block rounded-full bg-teal-600 p-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
              </svg>
            </span>
            <h2 className='mt-4 text-2xl font-bold'>Video Production</h2>
            <p className='mt-4'>
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
              mauris sit amet orci.
            </p>
          </div>
          <div className='mx-5 max-w-xs rounded-lg bg-white px-8 py-10 text-center shadow-md'>
            <span className='inline-block rounded-full bg-teal-600 p-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
              </svg>
            </span>
            <h2 className='mt-4 text-2xl font-bold'>Digital Illustration</h2>
            <p className='mt-4'>
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              auguae.
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 p-8 text-gray-700'>
        <div className='flex w-auto max-w-none items-end justify-center'>
          <div className='mx-5 max-w-xs rounded-lg bg-white px-8 py-10 text-center shadow-md'>
            <span className='inline-block rounded-full bg-teal-600 p-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <h2 className='mt-4 text-2xl font-bold'>Photo Shoot</h2>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className='mx-5 max-w-xs rounded-lg bg-white px-8 py-10 text-center shadow-md'>
            <span className='inline-block rounded-full bg-teal-600 p-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
              </svg>
            </span>
            <h2 className='mt-4 text-2xl font-bold'>Video Production</h2>
            <p className='mt-4'>
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
              mauris sit amet orci.
            </p>
          </div>
          <div className='mx-5 max-w-xs rounded-lg bg-white px-8 py-10 text-center shadow-md'>
            <span className='inline-block rounded-full bg-teal-600 p-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
              </svg>
            </span>
            <h2 className='mt-4 text-2xl font-bold'>Digital Illustration</h2>
            <p className='mt-4'>
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              auguae.
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 p-8 text-gray-700'>
        <div className='my-6 flex w-auto max-w-md items-start'>
          <span className='mr-4 block rounded bg-red-600 py-1 px-3 text-xl font-bold text-white'>
            1
          </span>
          <div>
            <h3 className='text-lg font-bold text-gray-800'>
              Whom is this event intended for?
            </h3>
            <p className='mt-1'>
              Rose event is organized for both aspiring and accomplished
              designers, developers and marketers around the world.
            </p>
          </div>
        </div>
        {/* <div className='container flex items-start'> */}
        <div className='my-6 flex w-auto max-w-md items-start'>
          <span className='mr-4 block rounded bg-red-600 py-1 px-3 text-xl font-bold text-white'>
            2
          </span>
          <div>
            <h3 className='text-lg font-bold text-gray-800'>
              Why should I come maybe it&apos;s a waste of time?
            </h3>
            <p className='mt-1'>
              You should come to Rose this year because it will be one of the
              most information packed events of the year.
            </p>
          </div>
        </div>
        {/* <div className='container flex items-start'> */}
        <div className='my-6 flex w-auto max-w-md items-start'>
          <span className='mr-4 block rounded bg-red-600 py-1 px-3 text-xl font-bold text-white'>
            3
          </span>
          <div>
            <h3 className='text-lg font-bold text-gray-800'>
              Any restrictions that I should be aware of?
            </h3>
            <p className='mt-1'>
              Yes you definitely need to leave your preconceptions behind, keep
              an open mind and enjoy the presentations.
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700; bg-teal-100'>
        <div className='flex h-screen w-full items-center justify-center'>
          <div>I&apos;m at the center of this page</div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700; bg-teal-100'>
        <div className='flex h-screen w-full'>
          <div className='m-auto'>I&apos;m at the center of this page</div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 text-gray-700'>
        <div className='mx-auto mt-4 flex h-[28rem] w-80  items-center rounded-md bg-white p-10 text-center'>
          <div className='w-full'>
            <a
              href='#'
              className='mt-4 block rounded-md border border-cyan-500 bg-cyan-500 py-2 px-4 text-white'
            >
              Login
            </a>
            <a
              href='#'
              className='mt-4 block rounded-md border border-cyan-500 py-2 px-4'
            >
              Create account
            </a>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 text-gray-700'>
        <div className='mx-auto mt-4 flex h-[28rem] w-80 flex-col justify-center rounded-md bg-white p-10 text-center'>
          <a
            href='#'
            className='mt-4 block rounded-md border border-cyan-500 bg-cyan-500 py-2 px-4 text-white'
          >
            Login
          </a>
          <a
            href='#'
            className='mt-4 block rounded-md border border-cyan-500 py-2 px-4'
          >
            Create account
          </a>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 py-4 text-gray-700'>
        <div className='mx-auto flex h-80 w-72 flex-col items-start justify-between rounded-xl bg-white p-8'>
          <Image
            src='https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg'
            alt=''
            width={20}
            height={20}
          ></Image>
          <p>
            I just finished my trial period and was so amazed with the support
            and good results that I purchased the Pro version for my business.
          </p>
          <span className='text-lg font-bold'>John Doe</span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 py-4 text-gray-700'>
        <div className='mx-auto max-w-xl bg-white p-2'>
          <div className='mt-5 flex items-center even:flex-row-reverse even:text-right'>
            <Image
              src='https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
              alt=''
              className='m-5 rounded-full object-cover'
              width={144}
              height={144}
            ></Image>
            <div>
              <h3 className='text-xl font-bold'>Alexa Kardi</h3>
              <p className='text-sm text-gray-500'>Founder and CEO</p>
              <p className='mt-3 leading-snug'>
                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat
                ut turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
            </div>
          </div>
          <div className='mt-5 flex items-center even:flex-row-reverse even:text-right'>
            <Image
              src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
              alt=''
              className='m-5 rounded-full object-cover'
              width={144}
              height={144}
            ></Image>
            <div>
              <h3 className='text-xl font-bold'>Tavell Monroe</h3>
              <p className='text-sm text-gray-500'>Web Developer</p>
              <p className='mt-3 leading-snug'>
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='my-12 mx-auto max-w-2xl bg-gray-100 p-8 text-gray-700'>
        <div className='flex w-auto max-w-none'>
          <input
            type='email'
            className='flex-grow rounded-l-md border border-gray-400 py-3 px-6'
            placeholder='Email Address'
          />
          <button
            type='submit'
            className='rounded-r-md bg-teal-700 py-3 px-6 text-white'
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <div className='flex min-h-screen w-auto max-w-none flex-col'>
          <div className='flex-grow p-8'>
            <h1 className='text-4xl font-bold'>Main Content</h1>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              perferendis repellat, cum ratione fugit dolorum sequi dolores odit
              commodi cupiditate ab excepturi deserunt laborum saepe,
              praesentium id deleniti aperiam eaque.
            </p>
            <p className='mt-4'>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>
          </div>
          <footer className='bg-blue-100 py-6 px-8'>
            <h3 className='text-xl font-bold'>Footer</h3>
          </footer>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='flex flex-col items-center justify-center bg-gray-200 py-4 text-gray-700'>
        <div className='m-8 flex h-96 w-80 flex-col rounded-md bg-white p-8'>
          <h2 className='text-2xl font-bold'>The Power of CSS Flexbox</h2>
          <p className='mt-4 flex-grow'>
            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
            consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
            gravida non, commodo a, sodales sit amet, nisi.
          </p>
          <a
            href='#'
            className='block rounded-md bg-teal-700 px-4 py-2 text-center text-sm text-white'
          >
            Read more
          </a>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 py-8 text-gray-700'>
        <p className='my-8 text-center'>Hover over the links below 👇</p>
        <ul className='my-8 mx-auto flex w-[704px] bg-white'>
          <li className='flex-grow cursor-pointer border-b-2 border-white p-5 text-center transition-all duration-200 hover:flex-grow-[3] hover:border-green-400'>
            Description
          </li>
          <li className='flex-grow cursor-pointer border-b-2 border-white p-5 text-center transition-all duration-200 hover:flex-grow-[3] hover:border-green-400'>
            Care Instructions
          </li>
          <li className='flex-grow cursor-pointer border-b-2 border-white p-5 text-center transition-all duration-200 hover:flex-grow-[3] hover:border-green-400'>
            Return Policy
          </li>
        </ul>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className=''>
        <div className='mx-auto flex max-w-3xl flex-wrap p-10'>
          <button
            type='button'
            className='m-2 flex-grow rounded-md bg-sky-600 py-3 px-4 text-center text-sm text-white'
          >
            Like
          </button>
          <button
            type='button'
            className='m-2 flex-grow rounded-md bg-sky-600 py-3 px-4 text-center text-sm text-white'
          >
            Share
          </button>
          <button
            type='button'
            className='m-2 flex-grow-[2] rounded-md bg-sky-600 py-3 px-4 text-center text-sm text-white'
          >
            Leave a Comment
          </button>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='w-64 bg-red-300'>
        <div className='mx-auto flex max-w-3xl flex-wrap p-10'>
          <button
            type='button'
            className='m-2 flex-grow rounded-md bg-sky-600 py-3 px-4 text-center text-sm text-white'
          >
            Like
          </button>
          <button
            type='button'
            className='m-2 flex-grow rounded-md bg-sky-600 py-3 px-4 text-center text-sm text-white'
          >
            Share
          </button>
          <button
            type='button'
            className='m-2 flex-grow-[2] rounded-md bg-sky-600 py-3 px-4 text-center text-sm text-white'
          >
            Leave a Comment
          </button>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700; p-10'>
        <div className='mb-6 flex max-w-lg items-start'>
          <div>
            <h2 className='text-2xl font-bold'>Visit to the Eiffel Tower</h2>
            <p className='mt-1'>
              There&apos;s no better start to your Paris tour than visiting the
              iconic Eiffel Tower. This is a must visit tourist spot in the
              whole of France.
            </p>
          </div>
          <span className='ml-4 flex-shrink-0 rounded-full bg-red-500 py-2 px-5 text-sm text-white'>
            10:00 AM
          </span>
        </div>
        <div className='mb-6 flex max-w-lg items-start'>
          <div>
            <h2 className='text-2xl font-bold'>Lunch at New Jawad</h2>
            <p className='mt-1'>
              It is an Indian restaurant close to the Eiffel Tower. Enjoy
              delicious Indian traditional food and South Asian food.
            </p>
          </div>
          <span className='ml-4 flex-shrink-0 rounded-full bg-red-500 py-2 px-5 text-sm text-white'>
            1:00 PM
          </span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <div className='m-12 flex items-center'>
          <Image
            className='mr-4 h-20 w-20 flex-shrink-0 rounded-full object-cover'
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80'
            alt=''
            width={80}
            height={80}
          />
          <div>
            <h3 className='text-xl font-bold'>Matt Cooper</h3>
            <p className='mt-1'>
              A front end web developer from New York, USA. Currently working as
              a freelancer. Drop a mail or say hello 👋
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='flex justify-center bg-slate-400 p-8 text-gray-700'>
        <div className='flex h-screen w-full flex-col bg-red-400 md:flex-row'>
          <div className='flex h-1/2 items-center justify-center bg-orange-200 text-center md:h-screen md:w-1/2'>
            <div>
              <h1 className='text-6xl font-bold'>Learn</h1>
              <p className='mt-2'>
                Build your skillset with the hottest courses
              </p>
              <a
                href='#'
                className='mt-6 inline-block rounded-md bg-white py-3 px-5 text-sm font-bold'
              >
                Start Learning
              </a>
            </div>
          </div>
          <div className='flex h-1/2 items-center justify-center bg-blue-200 text-center md:h-screen md:w-1/2'>
            <div>
              <h1 className='text-6xl font-bold'>Teach</h1>
              <p className='mt-2'>Share your knowledge and earn some income</p>
              <a
                href='#'
                className='mt-6 inline-block rounded-md bg-white py-3 px-5 text-sm font-bold'
              >
                Start Teaching
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-slate-400'>
        <div className='flex h-screen w-full flex-col md:flex-row'>
          <div
            className='flex basis-1/2 items-center justify-center bg-red-200 text-center'
            id='learn'
          >
            <div>
              <h1 className='m-0 text-5xl'>Learn</h1>
              <p className='mt-3'>
                Build your skillset with the hottest courses
              </p>
              <a
                href='#'
                className='mt-6 inline-block rounded-md bg-white py-3 px-5 text-sm font-bold'
              >
                Start Learning
              </a>
            </div>
          </div>
          <div
            className='flex basis-1/2 items-center justify-center bg-blue-200 text-center'
            id='teach'
          >
            <div>
              <h1 className='m-0 text-5xl'>Teach</h1>
              <p className='mt-3'>Share your knowledge and earn some income</p>
              <a
                href='#'
                className='mt-6 inline-block rounded-md bg-white py-3 px-5 text-sm font-bold'
              >
                Start Teaching
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='m-4 border border-solid border-green-400 text-gray-700'>
        <div className='m-8 flex max-w-sm items-center'>
          <div className='mr-4 flex-shrink-0 basis-20'>
            <Image
              className='rounded-lg'
              alt='Pizza'
              src='https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
              height={150}
              width={150}
            ></Image>
          </div>
          <div>
            <h2 className='text-xl font-bold'>Make the Best Pizza at Home</h2>
            <p className='mt-1'>
              The secret to baking the best pizza at home lies in the
              preparation of the...
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-pink-50 text-gray-700'>
        <div className='my-12 mx-auto min-w-[720px] max-w-4xl'>
          <div className='flex w-auto max-w-none'>
            <div className='mx-4 basis-1/3 rounded-xl bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Standard</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$25</p>
            </div>
            <div className='mx-4 basis-1/3 rounded-xl bg-pink-600 p-8 text-white shadow-md'>
              <h2 className='text-2xl font-bold'>Popular</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$40</p>
            </div>
            <div className='mx-4 basis-1/3 rounded-xl bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Premium</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$55</p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-pink-50 text-gray-700'>
        <div className='my-12 mx-auto min-w-[720px] max-w-4xl'>
          <div className='flex w-auto max-w-none'>
            <div className='mx-4 flex-shrink flex-grow basis-0 rounded-xl bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Standard</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$25</p>
            </div>
            <div className='mx-4 flex-shrink flex-grow basis-0 rounded-xl bg-pink-600 p-8 text-white shadow-md'>
              <h2 className='text-2xl font-bold'>Popular</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$40</p>
            </div>
            <div className='mx-4 flex-shrink flex-grow basis-0 rounded-xl bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Premium</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$55</p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-pink-50 text-gray-700'>
        <div className='my-12 mx-auto min-w-[720px] max-w-4xl'>
          <div className='flex w-auto max-w-none'>
            <div className='mx-4 flex-1 rounded-xl bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Standard</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$25</p>
            </div>
            <div className='mx-4 flex-1 rounded-xl bg-pink-600 p-8 text-white shadow-md'>
              <h2 className='text-2xl font-bold'>Popular</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$40</p>
            </div>
            <div className='mx-4 flex-1 rounded-xl bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Premium</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$55</p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 py-4 text-gray-800'>
        <header className='flex min-w-[767px] items-center justify-between bg-white py-5 px-6'>
          <a href='#' className='flex-1'>
            <Image
              src='https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png'
              alt=''
              height={28}
              width={144}
              className='inline'
            ></Image>
          </a>
          <ul className='mx-5 inline-block'>
            <li className='mx-5 inline-block'>
              <a href='#'>Home</a>
            </li>
            <li className='mx-5 inline-block'>
              <a href='#'>About Us</a>
            </li>
            <li className='mx-5 inline-block'>
              <a href='#'>Pricing</a>
            </li>
            <li className='mx-5 inline-block'>
              <a href='#'>Products</a>
            </li>
          </ul>
          <span className='flex-1 text-right'>
            <a
              href='#'
              className='rounded-full bg-blue-500 py-2 px-5 text-white'
            >
              Join us
            </a>
          </span>
        </header>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 p-8 text-gray-800'>
        <div className='my-12 mx-auto flex max-w-3xl rounded-3xl bg-white'>
          <Image
            className='w-full flex-1 rounded-l-3xl object-cover'
            src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200'
            alt=''
            width={200}
            height={200}
          ></Image>
          <div className='flex-[2] p-8'>
            <h2 className='text-2xl font-bold'>Poolside Villas</h2>
            <p className='mt-3'>
              Enjoy your stay at our property with mesmerizing views. Relax at
              the pool while you&#39;re pampered by our staff serving drinks and
              food of your choice.
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 p-8 text-gray-500 antialiased'>
        <div className='my-20 mx-auto flex w-80 max-w-none items-center justify-between rounded-lg bg-white p-4'>
          <div>
            <i className='fa fa-bell mr-2'></i>
            <span className='text-lg'>Notifications</span>
          </div>
          <span className='rounded bg-blue-50 py-px px-2 text-lg text-blue-800'>
            2
          </span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 p-8 text-gray-500 antialiased'>
        <div className='my-20 mx-auto flex w-80 max-w-none items-center rounded-lg bg-white p-4'>
          <i className='fa fa-bell mr-2'></i>
          <span className='flex-grow text-lg'>Notifications</span>
          <span className='rounded bg-blue-50 py-px px-2 text-lg text-blue-800'>
            2
          </span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 p-8 text-gray-500 antialiased'>
        <div className='my-20 mx-auto flex w-80 max-w-none items-center rounded-lg bg-white p-4'>
          <i className='fa fa-bell mr-2'></i>
          <span className='text-lg'>Notifications</span>
          <span className='ml-auto rounded bg-blue-50 py-px px-2 text-lg text-blue-800'>
            2
          </span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-sky-50 py-8 text-gray-700'>
        <footer className='flex min-w-fit bg-white p-10'>
          <div className='footer-col'>
            <Image
              src='https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png'
              alt='Circle AI Logo'
              width={144}
              height={30}
            ></Image>
            <p className='mt-2 text-sm text-gray-500'>The Company Tagline</p>
          </div>
          <div className='footer-col ml-auto mr-20'>
            <h3 className='text-2xl font-bold text-sky-800 '>Quick Links</h3>
            <ul className='mt-6 h-1 w-20 bg-gray-300'>
              <li className='mt-6 h-1 w-20 bg-gray-300'></li>
            </ul>
          </div>
          <div className='footer-col mr-20'>
            <h3 className='text-2xl font-bold text-sky-800'>Contact Us</h3>
            <ul className='mt-6 h-1 w-20 bg-gray-300'>
              <li className='mt-6 h-1 w-20 bg-gray-300'></li>
            </ul>
          </div>
          <div className='footer-col mr-20'>
            <h3 className='text-2xl font-bold text-sky-800'>Social</h3>
            <ul className='mt-6 h-1 w-20 bg-gray-300'>
              <li className='mt-6 h-1 w-20 bg-gray-300'></li>
            </ul>
          </div>
        </footer>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 text-gray-800'>
        <header className='flex flex-wrap items-center justify-between bg-white py-5 px-6'>
          <a href='#' className='flex-1'>
            <Image
              src='https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png'
              alt=''
              height={28}
              width={144}
              className='inline'
            ></Image>
          </a>
          <ul className='order-last mx-5 mt-4 inline-block flex-[100%] text-center md:order-none md:mx-0 md:mt-0 md:flex-auto'>
            <li className='mx-5 inline-block'>
              <a href='#'>Home</a>
            </li>
            <li className='mx-5 inline-block'>
              <a href='#'>About Us</a>
            </li>
            <li className='mx-5 inline-block'>
              <a href='#'>Pricing</a>
            </li>
          </ul>
          <span className='flex-1 text-right'>
            <a
              href='#'
              className='rounded-full bg-blue-500 py-2 px-5 text-white'
            >
              Join us
            </a>
          </span>
        </header>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='my-8 mx-auto flex w-72 max-w-none flex-col'>
          <Image
            src='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300'
            alt=''
            width={500}
            height={500}
          ></Image>

          <span className='mt-5 block text-2xl font-bold text-cyan-800'>
            $220
          </span>
          <h3 className='mt-2 text-xl font-bold'>Comfort Grey Sneakers</h3>
          <p className='mt-2 text-gray-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum
            impedit veniam
          </p>
          <button className='mt-2 self-end rounded-md bg-cyan-600 py-2 px-4 text-sm text-white'>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='m-8 flex w-96 max-w-none items-center bg-teal-700 p-4 text-white'>
          <Image
            className='mr-3 rounded-md object-cover'
            src='https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
            alt=''
            width={50}
            height={50}
          ></Image>
          <div>
            <p className='text-2xl font-bold'>Richard Carl</p>
            <span className='text-sm opacity-90'>Graphic Designer</span>
          </div>
          <div className='mr-1 ml-auto self-start text-orange-400'>
            <i className='fa fa-star'></i>
            <span className='text-sm opacity-90'>5.0</span>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='flex min-h-screen w-auto max-w-none flex-wrap content-center justify-center bg-indigo-200 p-8'>
          <h1 className='flex-grow-1 flex-shrink-1 mb-6 basis-full text-center text-4xl font-bold'>
            What people are saying about my eBook
          </h1>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;Just ordered my copy! Shruti is awesome and I suck at grid.
              <br />
              No brainer.&#34;
            </p>
            <span>
              <strong>- Caleb Porzio</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;It&#39;s the best e-book experience I&#39;ve had on this
              subject. Might even understand this Flex/Grid stuff myself after
              all.&#34;
            </p>
            <span>
              <strong>- Lucian Tartea</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;I think there is a 0 missing at the end of these prices. $8
              for this much awesomeness? It should be 800!&#34;
            </p>
            <span>
              <strong>- Jimi Wikman</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;I love that you have used real world examples to describe the
              concepts which is very helpful to understand.&#34;
            </p>
            <span>
              <strong>- Sumudu Siriwardana</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;My CSS Grid abilities aren&#39;t quite where I want them to
              be so I&#39;m excited to dive into the full release&#34;
            </p>
            <span>
              <strong>- Jacob Foster</strong>
            </span>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='p-14 text-gray-800 antialiased'>
        <a
          className='mx-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white'
          href='#'
        >
          <i className='fa fa-twitter text-2xl'></i>
        </a>
        <a
          className='mx-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white'
          href='#'
        >
          <i className='fa fa-linkedin text-2xl'></i>
        </a>
        <a
          className='mx-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white'
          href='#'
        >
          <i className='fa fa-github text-2xl'></i>
        </a>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
    </div>
  );
}

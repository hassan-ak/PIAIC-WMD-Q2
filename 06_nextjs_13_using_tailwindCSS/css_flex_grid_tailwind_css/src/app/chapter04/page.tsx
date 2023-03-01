import React from 'react';
import Image from 'next/image';

export default function Chapter01() {
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
      <h1 className='my-5 text-center text-3xl font-bold'>Align Items</h1>
      <div className='mb-5 h-2 bg-black'></div>
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
        {/* <div className='container flex items-start'> */}
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
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='my-5 h-1 bg-black'></div>
    </div>
  );
}

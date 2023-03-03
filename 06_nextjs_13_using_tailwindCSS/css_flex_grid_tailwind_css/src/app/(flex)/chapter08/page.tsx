import React from 'react';
import Image from 'next/image';

export default function Chapter08() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Flex Basis</h1>
      <div className='mb-5 h-2 bg-black'></div>
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
    </div>
  );
}

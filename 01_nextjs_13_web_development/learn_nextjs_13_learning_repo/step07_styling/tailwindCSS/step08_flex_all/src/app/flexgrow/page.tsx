import React from 'react';
import Image from 'next/image';

export default function Chapter06() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Flex Grow</h1>
      <div className='mb-5 h-2 bg-black'></div>
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
    </div>
  );
}

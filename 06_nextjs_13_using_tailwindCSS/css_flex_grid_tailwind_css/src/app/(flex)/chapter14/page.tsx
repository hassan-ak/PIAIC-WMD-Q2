import React from 'react';
import Image from 'next/image';

export default function Chapter13() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Inline Flex</h1>
      <div className='mb-5 h-2 bg-black'></div>
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

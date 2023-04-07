import React from 'react';
import Image from 'next/image';

export default function Chapter28() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Grid Auto Flow</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-sky-200 text-gray-700 py-10'>
        <section className='my-16 mx-auto grid max-w-xl grid-flow-col grid-rows-[auto,auto] justify-between bg-white p-8'>
          <span className='text-3xl font-bold'>11.5k</span>
          <p>Tweets</p>
          <span className='text-3xl font-bold'>9.3k</span>
          <p>Followers</p>
          <span className='text-3xl font-bold'>776</span>
          <p>Following</p>
        </section>
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

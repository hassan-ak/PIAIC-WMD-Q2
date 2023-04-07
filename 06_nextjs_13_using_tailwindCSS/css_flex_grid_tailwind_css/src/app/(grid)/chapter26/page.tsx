import React from 'react';
import Image from 'next/image';

export default function Chapter26() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Order</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-pink-50 text-gray-800'>
        <div className='my-12 mx-auto max-w-4xl p-8'>
          <div className='grid w-auto max-w-none gap-8 sm:grid-cols-3'>
            <div className='rounded-lg bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Standard</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$25</p>
            </div>
            <div className='order-first rounded-lg bg-pink-600 p-8 text-white shadow-md sm:order-none'>
              <h2 className='text-2xl font-bold'>Popular</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$40</p>
            </div>
            <div className='rounded-lg bg-white p-8 shadow-md'>
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

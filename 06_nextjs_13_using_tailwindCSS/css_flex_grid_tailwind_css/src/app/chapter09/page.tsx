import React from 'react';
import Image from 'next/image';

export default function Chapter09() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Flex Shorthand Property
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
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
    </div>
  );
}

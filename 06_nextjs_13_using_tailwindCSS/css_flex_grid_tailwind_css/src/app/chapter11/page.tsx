import React from 'react';
import Image from 'next/image';

export default function Chapter10() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Order</h1>
      <div className='mb-5 h-2 bg-black'></div>
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
    </div>
  );
}

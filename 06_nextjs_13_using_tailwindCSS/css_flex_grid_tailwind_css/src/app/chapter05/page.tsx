import React from 'react';
import Image from 'next/image';

export default function Chapter05() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Flex Direction</h1>
      <div className='mb-5 h-2 bg-black'></div>
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
    </div>
  );
}

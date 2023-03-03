import React from 'react';
import Image from 'next/image';

export default function Chapter10() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Auto Margins</h1>
      <div className='mb-5 h-2 bg-black'></div>
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
    </div>
  );
}

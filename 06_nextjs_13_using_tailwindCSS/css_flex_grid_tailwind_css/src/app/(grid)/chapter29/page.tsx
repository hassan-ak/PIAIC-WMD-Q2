import React from 'react';
import Image from 'next/image';

export default function Chapter29() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Justify Self & Align Self
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 px-8 text-gray-700'>
        <div className='my-8 grid max-w-2xl grid-cols-[auto,auto,1fr] rounded-md bg-white'>
          <div className='p-8 pr-4'>
            <h3 className='text-2xl font-bold'>Cheese & Grill Restaurant</h3>
            <span className='mt-1 block'>St. Marks Street</span>
          </div>
          <span className='mt-8 inline-block self-start rounded-full bg-gray-200 py-1 px-2 text-sm text-gray-500'>
            Kid Friendly
          </span>
          <Image
            width={500}
            height={500}
            className='block h-32 w-32 justify-self-end rounded-r-md object-cover'
            src='https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200'
            alt=''
          />
        </div>
        <div className='my-8 grid max-w-2xl grid-cols-[auto,auto,1fr] rounded-md bg-white'>
          <div className='p-8 pr-4'>
            <h3 className='text-2xl font-bold'>The Bowl Place</h3>
            <span className='mt-1 block'>Rover Lane</span>
          </div>
          <span className='mt-8 inline-block self-start rounded-full bg-gray-200 py-1 px-2 text-sm text-gray-500'>
            Family Restaurant
          </span>
          <Image
            width={500}
            height={500}
            className='block h-32 w-32 justify-self-end rounded-r-md object-cover'
            src='https://images.pexels.com/photos/2781537/pexels-photo-2781537.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200'
            alt=''
          />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 px-8 text-gray-700'>
        <figure className='m-4 grid max-h-[18rem] max-w-[24rem]'>
          <Image
            className='col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full'
            src='https://picsum.photos/600/400'
            alt=''
            width={500}
            height={500}
          />
          <figcaption className='col-start-1 col-end-2 row-start-1 row-end-2 self-end bg-gray-800 bg-opacity-60 p-4 text-white'>
            This is a long caption flowing into two lines or more.
          </figcaption>
        </figure>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className=''></div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className=''></div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className=''></div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
    </div>
  );
}

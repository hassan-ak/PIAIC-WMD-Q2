import React from 'react';
import Image from 'next/image';

export default function Chapter12() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Align Self</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='my-8 mx-auto flex w-72 max-w-none flex-col'>
          <Image
            src='https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300'
            alt=''
            width={500}
            height={500}
          ></Image>

          <span className='mt-5 block text-2xl font-bold text-cyan-800'>
            $220
          </span>
          <h3 className='mt-2 text-xl font-bold'>Comfort Grey Sneakers</h3>
          <p className='mt-2 text-gray-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum
            impedit veniam
          </p>
          <button className='mt-2 self-end rounded-md bg-cyan-600 py-2 px-4 text-sm text-white'>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='m-8 flex w-96 max-w-none items-center bg-teal-700 p-4 text-white'>
          <Image
            className='mr-3 rounded-md object-cover'
            src='https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
            alt=''
            width={50}
            height={50}
          ></Image>
          <div>
            <p className='text-2xl font-bold'>Richard Carl</p>
            <span className='text-sm opacity-90'>Graphic Designer</span>
          </div>
          <div className='mr-1 ml-auto self-start text-orange-400'>
            <i className='fa fa-star'></i>
            <span className='text-sm opacity-90'>5.0</span>
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

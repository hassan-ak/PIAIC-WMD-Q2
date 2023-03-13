import React from 'react';
import Image from 'next/image';

export default function Chapter13() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Gap</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-pink-50 text-gray-800'>
        <div className='my-12 mx-auto min-w-[45rem] max-w-4xl'>
          <div className='grid w-auto max-w-none grid-cols-3 gap-x-8'>
            <div className='rounded-lg bg-white p-8 shadow-md'>
              <h2 className='text-2xl font-bold'>Standard</h2>
              <span className='text-sm opacity-80'>Monthly Plan</span>
              <p className='mt-5 text-4xl font-bold'>$25</p>
            </div>
            <div className='rounded-lg bg-pink-600 p-8 text-white shadow-md'>
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
      <div className='bg-gray-100 text-gray-800'>
        <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-8 p-8 sm:grid-cols-2 md:grid-cols-3'>
          <div className='rounded-lg bg-white'>
            <Image
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300'
              alt=''
              width={400}
              height={300}
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Blog title 1</h2>
              <p className='mt-4 mb-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href='#' className='text-lg font-bold text-purple-600'>
                Read more
              </a>
            </div>
          </div>
          <div className='rounded-lg bg-white'>
            <Image
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?1'
              alt=''
              width={400}
              height={300}
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Blog title 2</h2>
              <p className='mt-4 mb-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href='#' className='text-lg font-bold text-purple-600'>
                Read more
              </a>
            </div>
          </div>
          <div className='rounded-lg bg-white'>
            <Image
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?2'
              alt=''
              width={400}
              height={300}
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Blog title 3</h2>
              <p className='mt-4 mb-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href='#' className='text-lg font-bold text-purple-600'>
                Read more
              </a>
            </div>
          </div>
          <div className='rounded-lg bg-white'>
            <Image
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?3'
              alt=''
              width={400}
              height={300}
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Blog title 4</h2>
              <p className='mt-4 mb-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href='#' className='text-lg font-bold text-purple-600'>
                Read more
              </a>
            </div>
          </div>
          <div className='rounded-lg bg-white'>
            <Image
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?4'
              alt=''
              width={400}
              height={300}
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Blog title 5</h2>
              <p className='mt-4 mb-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href='#' className='text-lg font-bold text-purple-600'>
                Read more
              </a>
            </div>
          </div>
          <div className='rounded-lg bg-white'>
            <Image
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?5'
              alt=''
              width={400}
              height={300}
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Blog title 6</h2>
              <p className='mt-4 mb-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href='#' className='text-lg font-bold text-purple-600'>
                Read more
              </a>
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

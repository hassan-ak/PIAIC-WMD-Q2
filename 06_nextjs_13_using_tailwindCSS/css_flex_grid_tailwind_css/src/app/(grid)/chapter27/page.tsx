import React from 'react';
import Image from 'next/image';

export default function Chapter27() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Advanced Grid Template Values
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-pink-50 text-gray-800'>
        <div className='wrapper mx-auto my-12 max-w-4xl p-8'>
          <div className='container grid w-auto max-w-none grid-cols-[minmax(auto,18rem)] justify-center gap-8 sm:grid-cols-[repeat(3,minmax(auto,18rem))]'>
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
      <div className='text-gray-800'>
        <section className='grid min-h-screen grid-cols-[minmax(0,1fr),16rem]'>
          <div className='p-8'>
            <h1 className='text-3xl font-bold'>Blog Post Title</h1>
            <p className='mt-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              repellat voluptas numquam, est quia recusandae maiores quasi,
              cumque in vero dolor nisi accusantium nobis unde blanditiis. Nemo
              vero eius saepe!
            </p>
            <p className='mt-4'>
              Quis saepe exercitationem neque repellendus error incidunt tempora
              ducimus accusantium recusandae quaerat quia, nostrum natus illum.
              Velit ducimus quibusdam iusto aspernatur odit.
            </p>
            <pre className='my-6 max-w-full overflow-scroll bg-gray-100 p-4 text-sm'>
              `/*A very long comment here that should create a horizontal
              scrollbar when max width is reached, but doesn&#39;t.*/`
            </pre>
            <p className='mt-4'>
              Nam reprehenderit voluptates perferendis impedit, perspiciatis
              quis, mollitia corporis debitis atque aliquid, aspernatur rerum
              natus ullam hic necessitatibus quae deleniti esse blanditiis.
            </p>
          </div>
          <div className='border border-l-gray-300 bg-gray-200 p-8'>
            <h1 className='text-3xl font-bold'>Heading 1</h1>
            <ul className='p-4 leading-relaxed'>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </section>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-100 text-gray-800'>
        <div className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 p-8'>
          <div className='rounded-lg bg-white'>
            <Image
              width={500}
              height={500}
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300'
              alt=''
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
              width={500}
              height={500}
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?1'
              alt=''
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
              width={500}
              height={500}
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?2'
              alt=''
            />
            <div className='desc p-6'>
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
              width={500}
              height={500}
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?3'
              alt=''
            />
            <div className='desc p-6'>
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
              width={500}
              height={500}
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?4'
              alt=''
            />
            <div className='desc p-6'>
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
              width={500}
              height={500}
              className='h-48 w-full rounded-t-lg object-cover'
              src='https://picsum.photos/400/300?5'
              alt=''
            />
            <div className='desc p-6'>
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

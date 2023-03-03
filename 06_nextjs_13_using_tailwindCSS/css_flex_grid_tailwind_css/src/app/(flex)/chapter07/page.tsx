import React from 'react';
import Image from 'next/image';

export default function Chapter07() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Flex Shrink</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700; p-10'>
        <div className='mb-6 flex max-w-lg items-start'>
          <div>
            <h2 className='text-2xl font-bold'>Visit to the Eiffel Tower</h2>
            <p className='mt-1'>
              There&apos;s no better start to your Paris tour than visiting the
              iconic Eiffel Tower. This is a must visit tourist spot in the
              whole of France.
            </p>
          </div>
          <span className='ml-4 flex-shrink-0 rounded-full bg-red-500 py-2 px-5 text-sm text-white'>
            10:00 AM
          </span>
        </div>
        <div className='mb-6 flex max-w-lg items-start'>
          <div>
            <h2 className='text-2xl font-bold'>Lunch at New Jawad</h2>
            <p className='mt-1'>
              It is an Indian restaurant close to the Eiffel Tower. Enjoy
              delicious Indian traditional food and South Asian food.
            </p>
          </div>
          <span className='ml-4 flex-shrink-0 rounded-full bg-red-500 py-2 px-5 text-sm text-white'>
            1:00 PM
          </span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <div className='m-12 flex items-center'>
          <Image
            className='mr-4 h-20 w-20 flex-shrink-0 rounded-full object-cover'
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80'
            alt=''
            width={80}
            height={80}
          />
          <div>
            <h3 className='text-xl font-bold'>Matt Cooper</h3>
            <p className='mt-1'>
              A front end web developer from New York, USA. Currently working as
              a freelancer. Drop a mail or say hello 👋
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

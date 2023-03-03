import React from 'react';

export default function Chapter01() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Display Flex</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='flex'>
        <div className='m-3 rounded-lg bg-blue-100 p-6'>
          <p className='mb-1 font-serif text-lg italic leading-snug text-gray-700'>
            “The success combination in business is: Do what you do better...
            and: do more of what you do.”
          </p>
          <span className='text-sm text-gray-500'>- David J. Schwartz</span>
        </div>
        <div className='m-3 rounded-lg bg-blue-100 p-6'>
          <p className='mb-1 font-serif text-lg italic leading-snug text-gray-700'>
            “Give out what you most want to come back.”
          </p>
          <span className='text-sm text-gray-500'>- Robin Sharma</span>
        </div>
        <div className='m-3 rounded-lg bg-blue-100 p-6'>
          <p className='mb-1 font-serif text-lg italic leading-snug text-gray-700'>
            “You don&apos;t have to be great at something to start, but you have
            to start to be great at something.”
          </p>
          <span className='text-sm text-gray-500'>- Zig Ziglar</span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
    </div>
  );
}

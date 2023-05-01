import React from 'react';

export default function Chapter03() {
  return (
    <div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className='my-5 text-center text-5xl font-extrabold'>Chapter 07</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div>
        <nav className='flex items-center font-bold text-gray-600'>
          <div className='block self-start lg:hidden'>
            <button
              id='navbar-burger'
              className='rounded border border-gray-400 py-2 px-3 hover:border-black'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            <button
              id='navbar-close'
              className='rounded border border-gray-400 py-2 px-3 hover:border-black'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div className='mb-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}

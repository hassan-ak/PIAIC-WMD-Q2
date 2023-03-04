import React from 'react';
export default function Report() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-[#a1ffd9] to-[#f3ff77] p-12 text-gray-800 antialiased'>
      <div className='w-auto max-w-3xl rounded-lg bg-white p-8 shadow-2xl shadow-neutral-600'>
        <h1 className='text-center text-2xl font-bold sm:text-3xl'>
          Daily Average Stats
        </h1>
        {/*  */}
        <div className='mt-8 flex flex-wrap'>
          <div className='m-4 flex h-64 min-w-[12rem] flex-1 flex-col justify-between rounded-2xl bg-teal-200 p-6 text-center'>
            <span className='text-lg'>Avg. Steps /day</span>
            <span className='text-4xl font-bold'>9,340</span>
            <div>
              <p>
                <strong>+355</strong>
              </p>
              <span>last month</span>
            </div>
          </div>
          <div className='m-4 flex h-64 min-w-[12rem] flex-1 flex-col justify-between rounded-2xl bg-teal-200 p-6 text-center'>
            <span className='text-lg'>Minutes /day</span>
            <span className='text-4xl font-bold'>94</span>
            <div>
              <p>
                <strong>+12</strong>
              </p>
              <span>last month</span>
            </div>
          </div>
          <div className='m-4 flex h-64 min-w-[12rem] flex-1 flex-col justify-between rounded-2xl bg-teal-200 p-6 text-center'>
            <span className='text-lg'>kCal Burnt /day</span>
            <span className='text-4xl font-bold'>142</span>
            <div>
              <p>
                <strong>+22</strong>
              </p>
              <span>last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

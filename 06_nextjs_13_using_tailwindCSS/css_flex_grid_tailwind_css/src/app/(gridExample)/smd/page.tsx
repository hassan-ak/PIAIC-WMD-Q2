import React from 'react';
export default function Report() {
  return (
    <div className='flex min-h-screen items-center justify-center self-end bg-gray-900 p-8 text-sm'>
      <section className='m-auto grid min-w-[56rem] max-w-[75rem] grid-cols-4 gap-8'>
        <div className=' grid  grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Page Views</span>
          <i className='fab fa-facebook-square justify-self-end text-lg leading-none text-[#188ffc]'></i>
          <span className='-mb-1 text-4xl font-bold'>87</span>
          <span className='self-end text-sm text-green-600'>+3%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Likes</span>
          <i className='fab fa-facebook-square justify-self-end text-lg leading-none text-[#188ffc]'></i>
          <span className='-mb-1 text-4xl font-bold'>52</span>
          <span className='self-end text-sm text-red-600'>-2%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Likes</span>
          <i className='fab fa-instagram justify-self-end text-lg leading-none text-[#927a71]'></i>
          <span className='-mb-1 text-4xl font-bold'>5462</span>
          <span className='self-end text-sm text-green-600'>+2257%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Profile Views</span>
          <i className='fab fa-instagram justify-self-end text-lg leading-none text-[#927a71]'></i>
          <span className='-mb-1 text-4xl font-bold'>52k</span>
          <span className='self-end text-sm text-green-600'>+1375%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Retweets</span>
          <i className='fab fa-twitter justify-self-end text-lg leading-none text-[#25a4eb]'></i>
          <span className='-mb-1 text-4xl font-bold'>117</span>
          <span className='self-end text-sm text-green-600'>+303%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Likes</span>
          <i className='fab fa-twitter justify-self-end text-lg leading-none text-[#25a4eb]'></i>
          <span className='-mb-1 text-4xl font-bold'>507</span>
          <span className='self-end text-sm text-green-600'>+553%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Likes</span>
          <i className='fab fa-youtube justify-self-end text-lg leading-none text-[#ac0b2e]'></i>
          <span className='-mb-1 text-4xl font-bold'>107</span>
          <span className='self-end text-sm text-red-600'>-19%</span>
        </div>
        <div className='grid grid-cols-[auto,auto] content-between justify-between gap-y-8 rounded-lg bg-gray-800 p-6 text-white'>
          <span className='opacity-60'>Total Views</span>
          <i className='fab fa-youtube justify-self-end text-lg leading-none text-[#ac0b2e]'></i>
          <span className='-mb-1 text-4xl font-bold'>1407</span>
          <span className='self-end text-sm text-red-600'>-12%</span>
        </div>
      </section>
    </div>
  );
}

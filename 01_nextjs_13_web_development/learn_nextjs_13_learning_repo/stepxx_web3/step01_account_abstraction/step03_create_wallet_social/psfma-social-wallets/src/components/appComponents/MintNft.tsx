import assign2 from '@/data/assignment2';
import Link from 'next/link';
import React from 'react';

export const MintNft = () => {
  return (
    <div className='py-5 px-2 rounded-lg mx-2 border-4 sm:mx-5 sm:border-8 sm:px-5'>
      <p className='text-xl font-semibold mb-5'>
        Send gasless transactions and bundle transactions (mint nft)
      </p>
      <div className='mx-auto max-w-7xl rounded-xl bg-gray-50 p-5'>
        {assign2.map((res, index) => (
          <div key={index} className='flex flex-col mb-5'>
            <p className='shrink-0 font-medium'>
              {res.srNo}. {res.title} :{' '}
            </p>
            <Link
              href={res.url}
              className='break-all underline'
              target='_blank'
            >
              {res.hash}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

//*******************//
//* Header / NAvBAr *//
//*******************//
import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='mb-5 flex items-center justify-between px-5 py-4 bg-gray-200 shadow-sm'>
      <p className='text-xl font-semibold text-gray-700'>
        <Link href={'.'}>PSFMA Task 01</Link>
      </p>
    </div>
  );
};

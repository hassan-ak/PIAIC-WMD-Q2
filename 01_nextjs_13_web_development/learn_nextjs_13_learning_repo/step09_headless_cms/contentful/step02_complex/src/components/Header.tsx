//*******************//
//* Header / NAvBAr *//
//*******************//
import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='mb-5 flex items-center justify-between px-10 py-5'>
      <Link href='.' className='text-2xl font-semibold text-gray-700'>
        Blogs
      </Link>
    </div>
  );
};

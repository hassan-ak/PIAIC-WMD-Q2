import React from 'react';
import Image from 'next/image';

export default function Home() {
  const Logo1 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  const Logo2 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  const Logo3 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  const Logo4 = () => {
    return (
      <Image
        src='https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png'
        className='mx-4 mb-2 h-12'
        width={150}
        height={150}
        alt='image'
      />
    );
  };
  return (
    <div>
      <div className='bg-gray-100 p-12 text-center text-gray-800'>
        <h2 className='text-3xl font-bold'>Top Clients</h2>
        <div className='mt-6 flex flex-wrap justify-around'>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
        </div>
      </div>
      
      <div className='bg-gray-100 p-12 text-center text-gray-800'>
        <h2 className='text-3xl font-bold'>Top Clients</h2>
        <div className='mt-6 flex flex-wrap-reverse justify-around'>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
        </div>
      </div>
    </div>
  );
}

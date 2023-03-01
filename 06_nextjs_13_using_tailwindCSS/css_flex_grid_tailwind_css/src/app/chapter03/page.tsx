import React from 'react';
import Image from 'next/image';

export default function Chapter01() {
  const Profile1 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Alexa Kardi</h3>
        <p className='text-sm text-gray-600'>Founder and CEO</p>
      </div>
    );
  };
  const Profile2 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Tavell Monroe</h3>
        <p className='text-sm text-gray-600'>Web Developer</p>
      </div>
    );
  };
  const Profile3 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Adale Smith</h3>
        <p className='text-sm text-gray-600'>Marketing Specialist</p>
      </div>
    );
  };
  const Profile4 = () => {
    return (
      <div className='px-6 py-4 text-center'>
        <Image
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300'
          className='h-32 w-32 rounded-full object-cover object-top'
          width={150}
          height={150}
          alt='image'
        />
        <h3 className='text-xl font-bold'>Thomas Mason</h3>
        <p className='text-sm text-gray-600'>UX Designer</p>
      </div>
    );
  };

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
      <h1 className='my-5 text-center text-3xl font-bold'>Justify Content</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='text-gray-800'>
        <h1 className='mb-1 text-xl font-bold'>Flex No-Wrap</h1>
        <div className='m-14 flex w-auto max-w-none flex-nowrap justify-around'>
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='text-gray-800'>
        <h1 className='mb-1 text-xl font-bold'>Flex Wrap</h1>
        <div className='m-14 flex w-auto max-w-none flex-wrap justify-around'>
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='text-gray-800'>
        <h1 className='mb-1 text-xl font-bold'>Flex Wrap Reverse</h1>
        <div className='m-14 flex w-auto max-w-none flex-wrap-reverse justify-around'>
          <Profile1 />
          <Profile2 />
          <Profile3 />
          <Profile4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='bg-gray-100 p-12 text-center text-gray-800'>
        <h2 className='text-3xl font-bold'>Top Clients</h2>
        <div className='mt-6 flex flex-wrap justify-around'>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='my-5 h-1 bg-black'></div>
    </div>
  );
}

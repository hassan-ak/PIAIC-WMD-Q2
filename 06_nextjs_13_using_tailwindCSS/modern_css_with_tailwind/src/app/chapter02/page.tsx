import pLogo from '@/../public/pLogo.png';
import Image from 'next/image';
import React from 'react';

//
const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className='text-6xl font-bold text-blue-700'>{children}</div>;
};
const SubHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className='text-4xl font-semibold'>{children}</div>;
};
const SubSubHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className='text-lg font-medium italic'>{children}</div>;
};
//
const title = () => {
  return 'text-6xl font-bold text-blue-700';
};

export default function Chapter02() {
  return (
    <div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className='my-5 text-center text-5xl font-extrabold'>Chapter 02</h1>
      <div className='h-2 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <Header>Cool Text</Header>
      <SubHeader>Less Cool Text</SubHeader>
      <SubSubHeader>Kind of boring text</SubSubHeader>
      <div className='h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <p className={title()}>Cool Text</p>
      <div className='h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='title'>Title</div>
      <div className='h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='title text-3xl'>Title</div>
      <div className='h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <div className='h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <p className='cursor-pointer hover:font-bold'>Click Me</p>
      <div className='h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}

'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [counter, setCounter] = useState(0);
  function inc() {
    setCounter(counter + 1);
  }
  const test = () => {
    setCounter(counter - 10);
  };
  function dec() {
    setCounter(counter - 1);
  }
  return (
    <div className='flex flex-col'>
      <h1>Counter : {counter}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={test}>Test</button>
    </div>
  );
}

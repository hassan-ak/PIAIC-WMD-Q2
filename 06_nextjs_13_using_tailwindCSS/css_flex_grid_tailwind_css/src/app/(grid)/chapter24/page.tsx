import React from 'react';
import Image from 'next/image';

export default function Chapter24() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Grid Column Start, End & Span
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <form className='my-8 mx-auto grid max-w-lg grid-cols-[auto,1fr] items-center gap-y-6 gap-x-12 border border-gray-300 p-8'>
          <label> Full Name </label>
          <input
            className='rounded border border-gray-300 py-2 px-3'
            type='text'
            name='name'
            placeholder='Full Name'
          />
          <label> Email Address </label>
          <input
            className='rounded border border-gray-300 py-2 px-3'
            type='email'
            name='email'
            placeholder='Email Address'
          />
          <button
            type='submit'
            className='col-start-2 mt-4 inline-block rounded-full bg-red-500 py-3 px-9 font-bold text-white'
          >
            Create Account
          </button>
        </form>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 p-8 text-gray-700'>
        <div className='mx-auto grid max-w-2xl sm:grid-cols-2'>
          <div className='bg-white p-10 text-gray-500 sm:col-start-1 sm:col-end-3'>
            <h2 className='text-3xl font-bold text-teal-600'>
              Join our community
            </h2>
            <h3 className='my-4 text-xl font-bold text-[#c0df34]'>
              30-day, hassle-free money back guarantee
            </h3>
            <p className='mt-1'>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>
          <div className='bg-teal-500 p-10 text-white'>
            <h3 className='text-xl font-bold'>Monthly Subscription</h3>
            <span className='mt-2.5 inline-block align-middle text-4xl font-bold'>
              $29
            </span>
            <span className='mt-2.5 inline-block pl-3 align-middle'>
              per month
            </span>
            <p className='mt-1'>Full access for less than $1 a day</p>
            <a
              href='#'
              id='mt-6 block py-3 px-6 text-center bg-[#c0df34] rounded font-bold'
            >
              Sign Up
            </a>
          </div>
          <div className='bg-teal-400 p-10 text-white'>
            <h3 className='text-xl font-bold'>Why Us</h3>
            <ul className='mt-3 text-sm'>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <div className='max-w-none w-auto grid min-h-screen grid-cols-[22rem,1fr] grid-rows-[auto,1fr,auto]'>
          <header className='col-span-full bg-gray-600 text-white py-6 px-10'>
            <h2 className='font-bold text-2xl'>Header</h2>
          </header>
          <div className='bg-gray-300 p-10'>
            <h2 className='font-bold text-2xl'>Sidebar</h2>
            <ul>
              <li className='h-1 my-10 bg-white bg-opacity-50'></li>
              <li className='h-1 my-10 bg-white bg-opacity-50'></li>
              <li className='h-1 my-10 bg-white bg-opacity-50'></li>
              <li className='h-1 my-10 bg-white bg-opacity-50'></li>
            </ul>
          </div>
          <div className='p-10'>
            <h2 className='font-bold text-2xl'>Main Content</h2>
            <p className='h-1 my-10 bg-black bg-opacity-10'></p>
            <p className='h-1 my-10 bg-black bg-opacity-10'></p>
            <p className='h-1 my-10 bg-black bg-opacity-10'></p>
            <p className='h-1 my-10 bg-black bg-opacity-10'></p>
            <p className='h-1 my-10 bg-black bg-opacity-10'></p>
            <p className='h-1 my-10 bg-black bg-opacity-10'></p>
          </div>
          <footer className='col-span-full bg-gray-600 text-white py-6 px-10'>
            <h2 className='font-bold text-2xl'>Footer</h2>
          </footer>
        </div>
      </div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
    </div>
  );
}

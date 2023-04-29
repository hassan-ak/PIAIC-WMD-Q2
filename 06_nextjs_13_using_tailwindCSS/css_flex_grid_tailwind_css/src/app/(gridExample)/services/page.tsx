import React from 'react';
import profileImage from '../../../../public/profile1.png';
import Image from 'next/image';

export default function Article() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 p-8 text-gray-700'>
      <section className='m-auto grid max-w-6xl grid-flow-col grid-rows-6 gap-x-10 gap-y-16 sm:grid-rows-3'>
        <div className='service flex'>
          <i className='fa-rocket fas mt-2 text-5xl text-[#d79491]'></i>
          <div className='ml-6'>
            <h5 className='font-poppins text-2xl font-bold'>
              Business strategy
            </h5>
            <p className='mt-2 text-gray-600'>
              Based on my experience working with fast growing startups I can
              offer ideas for your business strategy
            </p>
          </div>
        </div>
        <div className='service flex'>
          <i className='fa-bullhorn fas mt-2 text-5xl text-[#d79491]'></i>
          <div className='ml-6'>
            <h5 className='font-poppins text-2xl font-bold'>
              Marketing planning
            </h5>
            <p className='mt-2 text-gray-600'>
              While trying to build my personal brand and sell my copywriting
              services I&#39;ve learned a few marketing tricks
            </p>
          </div>
        </div>
        <div className='service flex'>
          <i className='fa-font fas mt-2 text-5xl text-[#d79491]'></i>
          <div className='ml-6'>
            <h5 className='font-poppins text-2xl font-bold'>
              Copywriting services
            </h5>
            <p className='mt-2 text-gray-600'>
              I can create marketing copy, sales literature even blog posts so
              don&#39;t hesitate to get in touch for a quote
            </p>
          </div>
        </div>
        <div className='service flex'>
          <i className='fa-keyboard fas mt-2 text-5xl text-[#d79491]'></i>
          <div className='ml-6'>
            <h5 className='font-poppins text-2xl font-bold'>
              Tech writing services
            </h5>
            <p className='mt-2 text-gray-600'>
              You&#39;ve built a software product and now you need to create
              your documentation? I am here to help with that
            </p>
          </div>
        </div>
        <div className='service flex'>
          <i className='fa-photo-video fas mt-2 text-5xl text-[#d79491]'></i>
          <div className='ml-6'>
            <h5 className='font-poppins text-2xl font-bold'>Teaching videos</h5>
            <p className='mt-2 text-gray-600'>
              The easiest way to help someone learn how to use your product is
              with video tutorials. I can create them for you
            </p>
          </div>
        </div>
        <div className='service flex'>
          <i className='fa-users fas mt-2 text-5xl text-[#d79491]'></i>
          <div className='ml-6'>
            <h5 className='font-poppins text-2xl font-bold'>
              Conference speaking
            </h5>
            <p className='mt-2 text-gray-600'>
              I can speak at your conference about writing, teaching and how to
              create a successful business based on skills
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

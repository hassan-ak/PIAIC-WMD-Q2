import React from 'react';
import Image from 'next/image';

export default function Chapter13() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Display Grid & Grid Template Columns
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='grid min-h-[500px] w-auto min-w-[38rem] max-w-none grid-cols-2'>
        <div className='bg-[url("https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300")] bg-cover bg-center p-12 text-4xl font-bold uppercase tracking-wide text-white'>
          <a href='#'>Comfort Stay</a>
        </div>
        <div className='bg-[url("https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300")] bg-cover bg-center p-12 text-4xl font-bold uppercase tracking-wide text-white'>
          <a href='#'>Outdoor Activities</a>
        </div>
        <div className='bg-[url("https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300")] bg-cover bg-center p-12 text-4xl font-bold uppercase tracking-wide text-white'>
          <a href='#'>Luxury Dining</a>
        </div>
        <div className='bg-[url("https://images.pexels.com/photos/3661391/pexels-photo-3661391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300")] bg-cover bg-center p-12 text-4xl font-bold uppercase tracking-wide text-white'>
          <a href='#'>Children Friendly</a>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='grid min-h-screen w-auto max-w-none grid-cols-[22rem,1fr]'>
        <div className='bg-pink-600 p-10 text-white'>
          <h1 className='text-4xl font-bold'>Sidebar</h1>
          <ul>
            <li className='my-10 h-1 bg-pink-400'></li>
            <li className='my-10 h-1 bg-pink-400'></li>
            <li className='my-10 h-1 bg-pink-400'></li>
            <li className='my-10 h-1 bg-pink-400'></li>
          </ul>
        </div>
        <div className='p-10'>
          <h1 className='text-4xl font-bold'>Main Content</h1>
          <p className='my-10 h-1 bg-gray-200'></p>
          <p className='my-10 h-1 bg-gray-200'></p>
          <p className='my-10 h-1 bg-gray-200'></p>
          <p className='my-10 h-1 bg-gray-200'></p>
          <p className='my-10 h-1 bg-gray-200'></p>
          <p className='my-10 h-1 bg-gray-200'></p>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='bg-gray-700 text-white'>
          <div className='mx-auto grid max-w-5xl grid-cols-3 p-8'>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-cyan-300'>
                List Building
              </h2>
              <p className='mt-4'>
                It&#39;s very easy to start creating email lists for your
                marketing actions, give it a try
              </p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-cyan-300'>
                Campaign Tracker
              </h2>
              <p className='mt-4'>
                Campaigns is a feature we&#39;ve created since the beginning and
                it&#39;s at the core of Lomar
              </p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-cyan-300'>
                Analytics Tool
              </h2>
              <p className='mt-4'>
                Lomar collects all the necessary data in order to help you
                analyse different situations
              </p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-cyan-300'>
                Admin Control
              </h2>
              <p className='mt-4'>
                Rights of users and admins can easily be managed through the
                app&#39;s integrated control panel
              </p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-cyan-300'>
                Integration Setup
              </h2>
              <p className='mt-4'>
                We&#39;re providing a step-by-step integration session to
                implement automation in your current flow
              </p>
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-cyan-300'>
                Helpline Support
              </h2>
              <p className='mt-4'>
                Quality support is our top priority so please contact us for any
                problem you encounter
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-sky-100 text-gray-800'>
        <div className='m-16 grid w-[30rem] grid-cols-[1fr,auto] bg-white p-8'>
          <div className='pb-5'>
            <h3 className='text-xl font-bold'>Veg Burger</h3>
            <p className='mt-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              atque hic eligendi
            </p>
          </div>
          <span className='pl-4 text-5xl'> 🍔 </span>
          <div className='pb-5'>
            <h3 className='text-xl font-bold'>Tacos</h3>
            <p className='mt-1'>
              Quos sunt non labore ab dicta ea sequi error, sapiente asperiores
              quas.
            </p>
          </div>
          <span className='pl-4 text-5xl'> 🌮 </span>
          <div className='pb-5'>
            <h3 className='text-xl font-bold'>classNameic Waffles</h3>
            <p className='mt-1'>
              Dolorem nesciunt minima reprehenderit natus nam ipsum ipsa,
              laudantium.
            </p>
          </div>
          <span className='pl-4 text-5xl'> 🧇 </span>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
    </div>
  );
}

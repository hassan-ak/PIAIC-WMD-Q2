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
      {/* <div className='container grid min-h-screen grid-cols-2'> */}
      <div className='grid w-auto min-w-[38rem] max-w-none grid-cols-2 min-h-[500px]'>
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
    </div>
  );
}

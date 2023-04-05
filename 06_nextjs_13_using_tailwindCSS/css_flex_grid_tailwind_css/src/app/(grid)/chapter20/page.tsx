import React from 'react';
import Image from 'next/image';

export default function Chapter20() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Align Content</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='bg-gray-200 text-gray-700'>
        <div className='m-8 grid h-96 w-80 content-between rounded-md bg-white p-8'>
          <Image
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80'
            alt=''
            className='h-20 w-20 rounded-full object-cover'
            width={100}
            height={100}
          />
          <p>
            <strong>Matt Cooper</strong> is a graphic designer at CircleAi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href='#' className='font-bold text-teal-700'>
            View Profile
          </a>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='mx-auto grid min-h-screen w-auto max-w-none grid-cols-[repeat(4,auto)] content-center justify-evenly gap-12 bg-gray-100 p-12'>
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-5_wqq52e.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-8_euk84k.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556260/logos/logoipsum-1_frjjk6.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-9_hqrvx7.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634564578/logos/logoipsum-13_zvuric.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-2_gxwamm.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-11_bhrqq2.svg'
            alt=''
          />
          <Image
            height={100}
            width={100}
            src='https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-12_hskbxm.svg'
            alt=''
          />
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

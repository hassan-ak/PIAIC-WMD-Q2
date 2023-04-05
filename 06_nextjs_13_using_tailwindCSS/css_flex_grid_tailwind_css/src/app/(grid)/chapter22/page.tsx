import React from 'react';
import Image from 'next/image';

export default function Chapter22() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Align Items</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <section className='grid min-h-screen w-auto max-w-none grid-cols-2 items-center gap-16 p-12'>
          <Image
            src='https://res.cloudinary.com/thirus/image/upload/v1634585194/images/details-1_e7ojp9.svg'
            alt=''
            width={400}
            height={400}
          ></Image>
          <div>
            <h1 className='text-4xl leading-tight'>
              Perfect solution
              <br />
              <strong>for your small business</strong>
            </h1>
            <p className='mt-4'>
              Maecenas fringilla quam posuere, pellentesque est nec, gravida
              turpis. Integer vitae mollis felis. Integer id quam id tellus
              hendrerit laciniad binfer
            </p>
            <p className='mt-4'>
              Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id
              auctor velit, sed viverra dui rem dina
            </p>
            <button className='mt-4 inline-block rounded-full bg-red-500 py-3 px-9 font-bold text-white'>
              Modal
            </button>
          </div>
        </section>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='mx-auto grid w-auto max-w-none grid-cols-[repeat(4,auto)] items-center justify-between justify-items-center gap-12 bg-gray-100 p-12'>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-5_wqq52e.svg'
            alt=''
          ></Image>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-8_euk84k.svg'
            alt=''
          ></Image>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556259/logos/logoipsum-6_jie3be.svg'
            alt=''
          ></Image>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-9_hqrvx7.svg'
            alt=''
          ></Image>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634564578/logos/logoipsum-13_zvuric.svg'
            alt=''
          ></Image>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556261/logos/logoipsum-7_vuiq6n.svg'
            alt=''
          ></Image>
          <Image
            width={100}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634564391/logos/logoipsum-11_bhrqq2.svg'
            alt=''
          ></Image>
          <Image
            width={50}
            height={10}
            src='https://res.cloudinary.com/thirus/image/upload/v1634556262/logos/logoipsum-10_pbu8et.svg'
            alt=''
          ></Image>
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

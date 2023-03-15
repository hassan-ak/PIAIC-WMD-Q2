import React from 'react';
import Image from 'next/image';
export default function Chapter13() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Justify Content</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='mx-auto grid w-auto max-w-none grid-cols-[repeat(4,auto)] justify-evenly gap-12 bg-gray-100 p-12'>
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
      <div className='bg-gray-100 text-gray-700'>
        <div className='my-12 mx-auto grid max-w-4xl grid-cols-[repeat(4,auto)] justify-between gap-y-8 gap-x-4 bg-white p-8'>
          <Image
            className='h-20 w-20 object-cover'
            src='https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
            alt=''
            height={100}
            width={100}
          />
          <div className='desc'>
            <h3 className='text-xl font-bold'>Stylish Tote Bag</h3>
            <p>Brown Color Women&#39;s Tote Bag</p>
            <span className='text-sm text-gray-500'>#368798</span>
          </div>
          <div>
            <label>Quantity : </label>
            <input
              className='mt-1 border border-gray-500 py-1 px-2'
              type='text'
              value='1'
              size={1}
            />
          </div>
          <div className='text-right text-lg font-bold'>$99.00</div>
          <Image
            className='h-20 w-20 object-cover'
            src='https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
            alt=''
            height={100}
            width={100}
          />
          <div>
            <h3 className='text-xl font-bold'>Sunglasses</h3>
            <p>Glasses with wooden frame</p>
            <span className='text-sm text-gray-500'>#756328</span>
          </div>
          <div>
            <label>Quantity : </label>
            <input
              className='mt-1 border border-gray-500 py-1 px-2'
              type='text'
              value='1'
              size={1}
            />
          </div>
          <div className='text-right text-lg font-bold'>$142.00</div>
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

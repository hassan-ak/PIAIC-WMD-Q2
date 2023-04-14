import { WalletLinks } from '@/components/appComponents/WalletLinks';
import { RainbowKitWalletW3 } from '@/components/wallets/RainbowKitWalletW3';
import React from 'react';

export default function Rainbow() {
  return (
    <div className='py-5 px-2 rounded-lg mx-2 border-4 sm:mx-5 sm:border-8 sm:px-5'>
      <p className='text-xl font-semibold mb-5'>Create Wallet with Social</p>
      <div className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
        <div className='rounded-xl bg-gray-50 p-5 min-h-[250px]'>
          <h2 className='text-left font-medium text-lg mb-3'>
            RainbowKit + Web3
          </h2>
          <h3 className='text-center mb-5'>Social wallet using RainbowKit</h3>
          <div className='flex justify-center items-center'>
            <RainbowKitWalletW3 />
          </div>
        </div>
      </div>
      <WalletLinks />
    </div>
  );
}

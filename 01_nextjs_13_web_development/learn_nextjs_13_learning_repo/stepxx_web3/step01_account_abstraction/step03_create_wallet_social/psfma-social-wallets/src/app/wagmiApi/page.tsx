import { WalletLinks } from '@/components/appComponents/WalletLinks';
import { WagmiApiWallet } from '@/components/wallets/WagmiApiWallet';
import React from 'react';

export default function Web3() {
  return (
    <div className='py-5 px-2 rounded-lg mx-2 border-4 sm:mx-5 sm:border-8 sm:px-5'>
      <p className='text-xl font-semibold mb-5'>Create Wallet with Social</p>
      <div className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
        <div className='rounded-xl bg-gray-50 p-5 min-h-[250px]'>
          <h2 className='text-left font-medium text-lg mb-3'>Wagmi API</h2>
          <h3 className='text-center mb-5'>Social wallet using Wagmi API</h3>
          <div className='flex justify-center items-center'>
            <WagmiApiWallet />
          </div>
        </div>
      </div>
      <WalletLinks />
    </div>
  );
}

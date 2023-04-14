import React from 'react';
import EthersAPiWallet from '../wallets/EthersAPiWallet';
import { RainbowKitWallet } from '../wallets/RainbowKitWallet';
import Link from 'next/link';
import { WalletLinks } from './WalletLinks';

export const SocialWallets = () => {
  return (
    <div className='py-5 px-2 rounded-lg mx-2 border-4 sm:mx-5 sm:border-8 sm:px-5'>
      <p className='text-xl font-semibold mb-5'>Create Wallet with Social</p>
      <div className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8'>
        <div className='rounded-xl bg-gray-50 p-5 min-h-[250px]'>
          <h2 className='text-left font-medium text-lg mb-3'>Ethers API</h2>
          <h3 className='text-center mb-5'>Social wallet using Ethers Api</h3>
          <div>
            <EthersAPiWallet />
          </div>
        </div>
        <div className='rounded-xl bg-gray-50 p-5 min-h-[250px]'>
          <h2 className='text-left font-medium text-lg mb-3'>RainbowKit</h2>
          <h3 className='text-center mb-5'>Social wallet using RainbowKit</h3>
          <div className='flex justify-center items-center'>
            <RainbowKitWallet />
          </div>
        </div>
      </div>
      <WalletLinks />
    </div>
  );
};

import Link from 'next/link';
import React from 'react';

export const WalletLinks = () => {
  return (
    <div className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 mt-10'>
      <div className='rounded-xl bg-gray-50 p-5 min-h-[250px]'>
        <h2 className='text-left font-medium text-lg mb-3'>
          Other Implementations
        </h2>
        <h3 className='text-left  mb-5'>
          Social wallets are also implemented using some other ways. Have a look
          by visiting relevant page from list below.
        </h3>
        <ol className='mx-5 list-decimal'>
          <li>
            <Link href={'./connectKit'} className='underline'>
              ConnectKit
            </Link>
          </li>
          <li>
            <Link href={'./rainbowKitWeb3'} className='underline'>
              RainbowKit + Web3.0
            </Link>
          </li>
          <li>
            <Link href={'./web3Modal'} className='underline'>
              Web3Modal
            </Link>
          </li>
          <li>
            <Link href={'./wagmiApi'} className='underline'>
              WagmiApi
            </Link>
          </li>
          <li>
            <Link href={'.'} className='underline'>
              Ether API
            </Link>
          </li>
          <li>
            <Link href={'.'} className='underline'>
              RainbowKit
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

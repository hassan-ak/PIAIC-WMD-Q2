'use client';
import { GoogleSocialWalletConnector } from '@zerodevapp/wagmi';
import { useConnect, useAccount, useDisconnect, useNetwork } from 'wagmi';
import { WagmiConfig } from 'wagmi';
import { polygonMumbai } from '@wagmi/core/chains';
import { publicProvider } from 'wagmi/providers/public';
import { configureChains, createClient } from 'wagmi';

import { useState } from 'react';

export const WagmiApiWallet = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  const ConnectButton = () => {
    const [loading, setLoading] = useState(false);
    const { connect, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const connectWallet = async () => {
      setLoading(true);
      await connect({
        connector: new GoogleSocialWalletConnector({
          options: {
            projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
          },
        }),
      });
      setLoading(false);
    };
    const disconnectButton = async () => {
      disconnect();
    };
    if (isConnected) {
      return (
        <div className='flex justify-center items-center flex-col'>
          <button
            onClick={disconnectButton}
            className={`bg-red-700 w-32 py-2 rounded-lg text-gray-50 cursor-pointer hover:scale-105`}
          >
            Disconnect
          </button>
          <div className='w-full mt-3 flex flex-col'>
            <label>Wallet:</label>
            <label className='text-sm pl-2 break-all'>{address}</label>
          </div>
        </div>
      );
    }
    return (
      <div className='flex justify-center items-center flex-col'>
        <button
          disabled={isLoading || loading}
          onClick={connectWallet}
          className={`w-40 py-2 rounded-lg text-gray-50 hover:scale-105 ${
            isLoading || loading ? 'bg-gray-700' : 'bg-blue-600 cursor-pointer'
          }`}
        >
          {isLoading || loading ? 'loading...' : 'Connect to Google'}
        </button>
      </div>
    );
  };
  return (
    <WagmiConfig client={client}>
      <ConnectButton />
    </WagmiConfig>
  );
};


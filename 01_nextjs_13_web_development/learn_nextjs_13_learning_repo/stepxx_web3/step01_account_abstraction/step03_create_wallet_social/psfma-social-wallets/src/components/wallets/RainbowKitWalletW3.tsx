'use client';
import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { polygonMumbai } from '@wagmi/core/chains';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { metaMaskWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import {
  enhanceWalletWithAAConnector,
  googleWallet,
} from '@zerodevapp/wagmi/rainbowkit';
export const RainbowKitWalletW3 = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const connectors = connectorsForWallets([
    {
      groupName: 'EOA Wrapped with AA',
      wallets: [
        enhanceWalletWithAAConnector(metaMaskWallet({ chains }), {
          projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
        }),
      ],
    },
    {
      groupName: 'EOA',
      wallets: [rainbowWallet({ chains })],
    },
    {
      groupName: 'Social (AA)',
      wallets: [
        googleWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
      ],
    },
  ]);
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize={'compact'}>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

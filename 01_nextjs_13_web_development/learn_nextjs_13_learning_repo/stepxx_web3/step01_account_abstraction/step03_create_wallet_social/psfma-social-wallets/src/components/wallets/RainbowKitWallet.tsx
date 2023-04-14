'use client';

import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { polygonMumbai } from '@wagmi/core/chains';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { twitchWallet, twitterWallet } from '@zerodevapp/wagmi/rainbowkit';
import { googleWallet, discordWallet } from '@zerodevapp/wagmi/rainbowkit';
import { facebookWallet, githubWallet } from '@zerodevapp/wagmi/rainbowkit';

export const RainbowKitWallet = () => {
  const connectors = connectorsForWallets([
    {
      groupName: 'Social',
      wallets: [
        googleWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
        facebookWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
        githubWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
        discordWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
        twitchWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
        twitterWallet({
          options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
        }),
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
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

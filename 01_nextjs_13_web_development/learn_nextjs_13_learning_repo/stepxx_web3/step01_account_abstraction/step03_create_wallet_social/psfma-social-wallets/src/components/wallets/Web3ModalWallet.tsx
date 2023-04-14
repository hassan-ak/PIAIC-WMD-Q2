'use client';

import { polygonMumbai } from '@wagmi/core/chains';
import { EthereumClient } from '@web3modal/ethereum';
import { Web3Modal, Web3Button } from '@web3modal/react';
import { SocialWalletConnector } from '@zerodevapp/wagmi';
import { web3ModalConfig } from '@zerodevapp/wagmi/web3modal';
import { GoogleSocialWalletConnector } from '@zerodevapp/wagmi';
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from 'wagmi';

export const Web3ModalWallet = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [w3mProvider({ projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' })]
  );
  const client = createClient({
    autoConnect: false,
    connectors: [
      new SocialWalletConnector({
        options: {
          projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
        },
      }),
      new GoogleSocialWalletConnector({
        options: {
          projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
        },
      }),
      ...w3mConnectors({
        projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
        version: 2,
        chains,
      }),
    ],
    provider,
    webSocketProvider,
  });

  const ethereumClient = new EthereumClient(client, chains);

  return (
    <>
      <WagmiConfig client={client}>
        <Web3Button />
      </WagmiConfig>
      <Web3Modal
        {...web3ModalConfig}
        projectId={'30a4ab5f-bb48-47e5-9e7d-ecceea467c7d'}
        ethereumClient={ethereumClient}
      />
    </>
  );
};

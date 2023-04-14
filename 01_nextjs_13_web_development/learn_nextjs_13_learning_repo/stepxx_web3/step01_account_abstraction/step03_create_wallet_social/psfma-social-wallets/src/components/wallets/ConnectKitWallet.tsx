'use client';

import { WagmiConfig } from 'wagmi';
import { createClient } from 'wagmi';
import { getDefaultClient } from 'connectkit';
import { ConnectKitProvider } from 'connectkit';
import { polygonMumbai } from '@wagmi/core/chains';
import { GoogleSocialWalletConnector } from '@zerodevapp/wagmi';
import { TwitchSocialWalletConnector } from '@zerodevapp/wagmi';
import { GithubSocialWalletConnector } from '@zerodevapp/wagmi';
import { TwitterSocialWalletConnector } from '@zerodevapp/wagmi';
import { DiscordSocialWalletConnector } from '@zerodevapp/wagmi';
import { FacebookSocialWalletConnector } from '@zerodevapp/wagmi';
import { ConnectKitButton, supportedConnectors } from 'connectkit';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { supportedSocialConnectors } from '@zerodevapp/wagmi/connectkit';

supportedConnectors.push(...supportedSocialConnectors);

export const ConnectKitWallet = () => {
  const options = {
    options: { projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d' },
  };

  const client = createClient(
    getDefaultClient({
      appName: 'Test App',
      chains: [polygonMumbai],
      connectors: [
        new GoogleSocialWalletConnector(options),
        new FacebookSocialWalletConnector(options),
        new GithubSocialWalletConnector(options),
        new DiscordSocialWalletConnector(options),
        new TwitchSocialWalletConnector(options),
        new TwitterSocialWalletConnector(options),
        new MetaMaskConnector(),
      ],
      autoConnect: false,
    })
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme='midnight'>
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

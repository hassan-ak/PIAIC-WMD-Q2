# Create Wallet with Social

## Create Next app

1. Create next app using following command
   ```cmd
   npx create-next-app@latest
   ```
2. cleanup working directory by removing un-necessary files and code

## Create Wallet with Ethers API

1. Go to [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Install dependencies
   ```cmd
   npm i @zerodevapp/social-wallet
   ```
4. Create `./src/components/wallets/EthersAPiWallet.tsx` with following code
   ```tsx
   'use client';
   import React, { useMemo, useState } from 'react';
   import { SocialWallet } from '@zerodevapp/social-wallet';
   import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk';
   export const EthersAPiWallet = () => {
     const [address, setAddress] = useState('');
     const [loading, setLoading] = useState(false);
     const socialWallet = useMemo(() => {
       return new SocialWallet();
     }, []);
     const createWallet = async () => {
       setLoading(true);
       const signer = await getZeroDevSigner({
         projectId: defaultProjectId,
         owner: await getSocialWalletOwner(defaultProjectId, socialWallet),
       });
       setAddress(await signer.getAddress());
       setLoading(false);
     };
     const disconnect = async () => {
       await socialWallet.disconnect();
       setAddress('');
     };
     const connected = !!address;
     return (
       <div>
         {connected && (
           <div>
             <label>Wallet: {address}</label>
           </div>
         )}
         <div>
           {!connected && (
             <button onClick={createWallet} disabled={loading}>
               {loading ? 'loading...' : 'Create Wallet'}
             </button>
           )}
           {connected && (
             <button onClick={disconnect} disabled={loading}>
               Disconnect
             </button>
           )}
         </div>
       </div>
     );
   };
   ```
5. Update `defaultProjectId` in the above code with the project id created at [ZeroDev dashboard](https://dashboard.zerodev.app/)
6. Update `./src/app/page.tsx` to use above component in the app
7. Deploy on vercel or any other platform
8. Add deployed URL to Whitelisted Domains on [ZeroDev dashboard](https://dashboard.zerodev.app/)

## Create Wallet with Web3Modal

1. Go to [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Install dependencies
   ```cmd
   npm i @zerodevapp/wagmi
   npm i @web3modal/ethereum
   npm i @web3modal/react
   ```
4. Create `./src/components/wallets/Web3ModalWallet.tsx` with following code
   ```tsx
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
       [w3mProvider({ projectId: defaultWalletConenctProjectId })]
     );
     const client = createClient({
       autoConnect: false,
       connectors: [
         new SocialWalletConnector({
           options: {
             projectId: defaultProjectId,
           },
         }),
         new GoogleSocialWalletConnector({
           options: {
             projectId: defaultProjectId,
           },
         }),
         ...w3mConnectors({
           projectId: defaultWalletConenctProjectId,
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
           projectId={defaultWalletConenctProjectId}
           ethereumClient={ethereumClient}
         />
       </>
     );
   };
   ```
5. Update `defaultProjectId` and `defaultWalletConenctProjectId` in the above code with the project id created at [ZeroDev dashboard](https://dashboard.zerodev.app/)
6. Update `./src/app/page.tsx` to use above component in the app
7. Deploy on vercel or any other platform
8. Add deployed URL to Whitelisted Domains on [ZeroDev dashboard](https://dashboard.zerodev.app/)

## Create Wallet with RainbowKit

1. Go to [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Install dependencies
   ```cmd
   npm i @zerodevapp/wagmi
   npm i @rainbow-me/rainbowkit
   ```
4. Create `./src/components/wallets/RainbowKitWallet.tsx` with following code
   ```tsx
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
             options: { projectId: defaultProjectId },
           }),
           facebookWallet({
             options: { projectId: defaultProjectId },
           }),
           githubWallet({
             options: { projectId: defaultProjectId },
           }),
           discordWallet({
             options: { projectId: defaultProjectId },
           }),
           twitchWallet({
             options: { projectId: defaultProjectId },
           }),
           twitterWallet({
             options: { projectId: defaultProjectId },
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
   ```
5. Update `defaultProjectId` in the above code with the project id created at [ZeroDev dashboard](https://dashboard.zerodev.app/)
6. Update `./src/app/page.tsx` to use above component in the app
7. Deploy on vercel or any other platform
8. Add deployed URL to Whitelisted Domains on [ZeroDev dashboard](https://dashboard.zerodev.app/)

## Create Wallet with RainbowKit (Web3)

1. Go to [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Install dependencies
   ```cmd
   npm i @zerodevapp/wagmi
   npm i @rainbow-me/rainbowkit
   ```
4. Create `./src/components/wallets/RainbowKitWalletW3.tsx` with following code
   ```tsx
   'use client';
   import React from 'react';
   import '@rainbow-me/rainbowkit/styles.css';
   import { polygonMumbai } from '@wagmi/core/chains';
   import { ConnectButton } from '@rainbow-me/rainbowkit';
   import { publicProvider } from 'wagmi/providers/public';
   import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
   import { connectorsForWallets } from '@rainbow-me/rainbowkit';
   import { configureChains, createClient, WagmiConfig } from 'wagmi';
   import {
     metaMaskWallet,
     rainbowWallet,
   } from '@rainbow-me/rainbowkit/wallets';
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
             projectId: defaultProjectId,
           }),
         ],
       },
       {
         groupName: 'EOA',
         wallets: [rainbowWallet({ chains })],
       },
       {
         groupName: 'Social (AA)',
         wallets: [googleWallet({ options: { projectId: defaultProjectId } })],
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
   ```
5. Update `defaultProjectId` in the above code with the project id created at [ZeroDev dashboard](https://dashboard.zerodev.app/)
6. Update `./src/app/page.tsx` to use above component in the app
7. Deploy on vercel or any other platform
8. Add deployed URL to Whitelisted Domains on [ZeroDev dashboard](https://dashboard.zerodev.app/)

## Create Wallet with ConnectKit

1. Go to [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Install dependencies
   ```cmd
   npm i @zerodevapp/wagmi
   npm i connectkit
   ```
4. Create `./src/components/wallets/ConnectKitWallet.tsx` with following code

   ```tsx
   'use client';
   import { WagmiConfig } from 'wagmi';
   import { createClient } from 'wagmi';
   import { getDefaultClient } from 'connectkit';
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
   import { ConnectKitProvider } from 'connectkit';
   supportedConnectors.push(...supportedSocialConnectors);
   export const ConnectKitWallet = () => {
     const options = { options: { projectId: defaultProjectId } };
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
   ```

5. Update `defaultProjectId` in the above code with the project id created at [ZeroDev dashboard](https://dashboard.zerodev.app/)
6. Update `./src/app/page.tsx` to use above component in the app
7. Deploy on vercel or any other platform
8. Add deployed URL to Whitelisted Domains on [ZeroDev dashboard](https://dashboard.zerodev.app/)

## Create Wallet with WagmiAPI

1. Go to [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Install dependencies
   ```cmd
   npm i @zerodevapp/wagmi
   ```
4. Create `./src/components/wallets/WagmiAPiWallet.tsx` with following code

   ```tsx
   'use client';
   import { GoogleSocialWalletConnector } from '@zerodevapp/wagmi';
   import { useConnect, useAccount, useDisconnect, useNetwork } from 'wagmi';
   import { WagmiConfig } from 'wagmi';
   import { polygonMumbai } from '@wagmi/core/chains';
   import { publicProvider } from 'wagmi/providers/public';
   import { configureChains, createClient } from 'wagmi';
   import { useState } from 'react';
   export const WagmiAPIWallet = () => {
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
               projectId: defaultProjectId,
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
               isLoading || loading
                 ? 'bg-gray-700'
                 : 'bg-blue-600 cursor-pointer'
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
   ```

5. Update `defaultProjectId` in the above code with the project id created at [ZeroDev dashboard](https://dashboard.zerodev.app/)
6. Update `./src/app/page.tsx` to use above component in the app
7. Deploy on vercel or any other platform
8. Add deployed URL to Whitelisted Domains on [ZeroDev dashboard](https://dashboard.zerodev.app/)

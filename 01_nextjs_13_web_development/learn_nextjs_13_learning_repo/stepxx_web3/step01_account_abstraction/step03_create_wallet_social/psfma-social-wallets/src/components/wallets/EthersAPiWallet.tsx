// Ethers API
'use client';

// The first import statement imports the React library and the useMemo and
//  useState hooks, which are used to create stateful components in React.
// The second import statement imports the SocialWallet class from the
//  @zerodevapp/social-wallet package. The SocialWallet class provides
//  a simple interface for interacting with the ZeroDev blockchain network.
// The third import statement imports two functions - getZeroDevSigner and
//  getSocialWalletOwner - from the @zerodevapp/sdk package. These functions
//  are used to generate a new cryptographic keypair and register the public key
//  with the ZeroDev network as the owner of the new wallet address.
import React, { useMemo, useState } from 'react';
import { SocialWallet } from '@zerodevapp/social-wallet';
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk';

export default function EthersAPiWallet() {
  // The address variable is used to store the wallet address once it's generated.
  //  It's initialized with an empty string using useState('').
  // The loading variable is used to track whether the wallet creation process is
  //  in progress. It's initialized with false using useState(false). When the
  //  "Create Wallet" button is clicked, loading is set to true to indicate that
  //  the wallet creation process is in progress, and is set back to false once the
  //  process is complete.
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  // Create a new instance of the SocialWallet class, which provides a simple
  //  interface for interacting with the ZeroDev blockchain network.
  // The useMemo hook is used to memoize the value returned by the function,
  //  so that it's only created once during the lifetime of the component,
  const socialWallet = useMemo(() => {
    return new SocialWallet();
  }, []);

  // Function to call on connect button click
  // This code calls the getZeroDevSigner function from the @zerodevapp/sdk
  //  package to generate a cryptographic keypair and register the public
  //  key with the ZeroDev network as the owner of a new wallet address.
  const createWallet = async () => {
    setLoading(true);
    const signer = await getZeroDevSigner({
      projectId: '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
      owner: await getSocialWalletOwner(
        '30a4ab5f-bb48-47e5-9e7d-ecceea467c7d',
        socialWallet
      ),
    });
    setAddress(await signer.getAddress());
    setLoading(false);
  };

  // disconnect from the ZeroDev network and clear the wallet address
  const disconnect = async () => {
    await socialWallet.disconnect();
    setAddress('');
  };

  // set to true if the address variable is truthy, and false otherwise.
  const connected = !!address;

  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        {/* When account not connected display connect or loading button based on loading status */}
        {!connected && (
          <button
            onClick={createWallet}
            disabled={loading}
            className={`w-32 py-2 rounded-lg text-gray-50 hover:scale-105 ${
              loading ? 'bg-gray-700' : 'bg-blue-600 cursor-pointer'
            }`}
          >
            {loading ? 'loading...' : 'Create Wallet'}
          </button>
        )}
        {/* Disconnect button when connected */}
        {connected && (
          <button
            onClick={disconnect}
            disabled={loading}
            className={`bg-red-700 w-32 py-2 rounded-lg text-gray-50 cursor-pointer hover:scale-105`}
          >
            Disconnect
          </button>
        )}
        {/* Wallet address when connected */}
        {connected && (
          <div className='w-full mt-3 flex flex-col'>
            <label>Wallet:</label>
            <label className='text-sm pl-2 break-all'>{address}</label>
          </div>
        )}
      </div>
    </div>
  );
}

# Hello World Smart Contract Node.js App

Follow this [getting started guide](https://docs.zerodev.app/getting-started) and create a smart contract account and mint a NFT.

## Send gasless transactions and bundle transactions (mint nft)

1. Go to the [ZeroDev dashboard](https://dashboard.zerodev.app/) and create a project for Polygon Mumbai and get a project ID from there
2. On [ZeroDev dashboard](https://dashboard.zerodev.app/) create new gas policy for projects and allow 100 requests per minute
3. Create an empty working directory and initialize it with npm

   ```cmd
   mkdir zerodev-tutorial
   cd zerodev-tutorial
   npm init -y
   ```

4. install the ZeroDev SDK and Ethers don't forget to include node_modules in .gitignore file also install dotenv:

   ```cmd
   npm i @zerodevapp/sdk
   npm i ethers
   npm install dotenv
   ```

5. SetUp code to Mint a single NFT

   - create `app.js` with following content

     ```js
     const { Contract, Wallet } = require('ethers');
     const { getZeroDevSigner } = require('@zerodevapp/sdk');
     require('dotenv').config();
     const projectId = process.env.PROJECT_ID;
     const wallet = new Wallet(process.env.PRIVATE_KEY);
     const contractAddress = '0x34bE7f35132E97915633BC1fc020364EA5134863';
     const contractABI = [
       'function mint(address _to) public',
       'function balanceOf(address owner) external view returns (uint256 balance)',
     ];
     const main = async () => {
       const signer = await getZeroDevSigner({
         projectId,
         owner: wallet,
       });
       const address = await signer.getAddress();
       console.log('My address:', address);
       const nftContract = new Contract(contractAddress, contractABI, signer);
       const receipt = await nftContract.mint(address);
       await receipt.wait();
       console.log(`NFT balance: ${await nftContract.balanceOf(address)}`);
     };
     main().then(() => process.exit(0));
     ```

   - create a private key

     ```cmd
     node -e "console.log(require('ethers').Wallet.createRandom().privateKey)"
     ```

   - create env file with following content and

     ```env
     PROJECT_ID="your project ID"
     PRIVATE_KEY="your private key"
     ```

6. Mint a single NFT

   - run the code
     ```cmd
     node app.js
     ```

   ```
   My address: 0xcE208d597a07209e7a9Da1Ee8E4379933D3431E6
   NFT balance: 1
   ```

   ```
   NFT mint hash: 0x83a2a69938c6169bcf98a75e7e71d67983345e082c2dbbce097b1f3e8b0ccc07
   ```

7. SetUp code to Mint multiple NFTs

   - find following code from the app.js

     ```js
     const receipt = await nftContract.mint(address);
     ```

   - replace it with

     ```js
     const receipt = await signer.execBatch([
       {
         to: nftContract.address,
         data: nftContract.interface.encodeFunctionData('mint', [address]),
       },
       {
         to: nftContract.address,
         data: nftContract.interface.encodeFunctionData('mint', [address]),
       },
       {
         to: nftContract.address,
         data: nftContract.interface.encodeFunctionData('mint', [address]),
       },
     ]);
     ```

8. Mint multiple NFT's

   - run the code
     ```cmd
     node app.js
     ```

   ```
   My address: 0xcE208d597a07209e7a9Da1Ee8E4379933D3431E6
   NFT balance: 5
   ```

   ```
   Multiple NFT mint hash: 0x6db59bbe733d1819cb13f5d82173c9131ecc0607a8ada8a9d942b7ab41b325d2
   ```

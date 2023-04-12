// import the Contract and Wallet classes from the ethers library
// import getZeroDevSigner function from the @zerodevapp/sdk library.
// Contract and Wallet are classes from the ethers library used to interact with Ethereum smart contracts. 
// getZeroDevSigner is a function from the @zerodevapp/sdk library that returns an ethers signer object to interact with the Ethereum network.
const { Contract, Wallet } = require('ethers');
const { getZeroDevSigner } = require('@zerodevapp/sdk');
require('dotenv').config();


// initializes two variables projectId and wallet
// projectId is the id from zero-dev dashboard
// wallet creates a new wallet based on private key
const projectId = process.env.PROJECT_ID;
const wallet = new Wallet(process.env.PRIVATE_KEY);

// NFT contract on Polygon (created by zero dev) Mumbai that allows anyone to mint NFTs
// ABI for a smart contract on the Ethereum blockchain.
const contractAddress = '0x34bE7f35132E97915633BC1fc020364EA5134863';
const contractABI = [
    'function mint(address _to) public',
    'function balanceOf(address owner) external view returns (uint256 balance)',
];
const main = async () => {

    // function to retrieve a signer object that can sign transactions 
    // on behalf of the specified wallet. 
    const signer = await getZeroDevSigner({
        projectId,
        owner: wallet,
    });
    // retrieves and console the Ethereum address associated with the signer object
    const address = await signer.getAddress();
    console.log('My address:', address);

    // creates a new instance of the Contract class
    const nftContract = new Contract(contractAddress, contractABI, signer);

    // waits for the transaction to be mined and confirmed on the Ethereum network
    // retrieves the balance of NFTs owned by the specified address and prints it to the console

    // // For Single transaction
    // const receipt = await nftContract.mint(address);

    // For multiple transactions
    const receipt = await signer.execBatch([
        {
            to: nftContract.address,
            data: nftContract.interface.encodeFunctionData("mint", [address]),
        },
        {
            to: nftContract.address,
            data: nftContract.interface.encodeFunctionData("mint", [address]),
        },
        {
            to: nftContract.address,
            data: nftContract.interface.encodeFunctionData("mint", [address]),
        },
    ])
    await receipt.wait();
    console.log(`NFT balance: ${await nftContract.balanceOf(address)}`);
};

// executes the main function and then terminates the process
main().then(() => process.exit(0));
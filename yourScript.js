// Import the Solana Multi Wallet Adapter library
import { SolanaWalletAdapter } from '@project-serum/sol-wallet-adapter';

// Initialize the Solana wallet adapter
const wallet = new SolanaWalletAdapter();

// Function to connect the wallet
const connectWallet = async () => {
    try {
        await wallet.connect();
        console.log('Connected to Solana wallet:', wallet.publicKey.toString());
        // Add your logic after successful co.nnection
    } catch (error) {
        console.error('Error connecting to Solana wallet:', error);
    }
};

// Attach the connectWallet function to the button click event
document.getElementById('connectButton').addEventListener('click', connectWallet);

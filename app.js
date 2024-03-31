document.addEventListener("DOMContentLoaded", function() {
  const connectWalletBtn = document.getElementById('connectWallet');
  const createIDBtn = document.getElementById('createID');
  const addressBox = document.getElementById('addressBox');

  // Connect to Phantom Wallet
  connectWalletBtn.addEventListener('click', async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        await window.solana.connect();
        alert('Connected to Phantom Wallet!');
      } catch (error) {
        console.error(error);
        alert('Failed to connect to Phantom Wallet!');
      }
    } else {
      alert('Phantom Wallet extension not found!');
    }
  });

  // Create ID Name and send 0.2 Sol
  createIDBtn.addEventListener('click', async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const publicKey = await window.solana.publicKey();
        const from = publicKey.toBase58();
        const to = '7nGL2nqCg3NxQCZxLB6gKmEFUJwvpLBntmSJKMmfwXQP'; // Destination address
        const amount = 200000000; // 0.2 Sol in lamports
        const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));
        const transaction = new solanaWeb3.Transaction().add(solanaWeb3.SystemProgram.transfer({
          fromPubkey: from,
          toPubkey: to,
          lamports: amount,
        }));
        const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [publicKey]);
        alert(`Transaction successful! Signature: ${signature}`);
      } catch (error) {
        console.error(error);
        alert('Transaction failed! Please check console for details.');
      }
    } else {
      alert('Please connect to Phantom Wallet first!');
    }
  });

  // Generate Random Solana Address
  function generateRandomAddress() {
    // Generate random bytes
    const randomBytes = window.crypto.getRandomValues(new Uint8Array(32));
    // Convert bytes to base58 address
    const address = solanaWeb3.PublicKey.createWithSeed('random', randomBytes, solanaWeb3.PublicKey.default());
    return address.toBase58();
  }

  const randomAddress = generateRandomAddress();
  addressBox.textContent = randomAddress;
});

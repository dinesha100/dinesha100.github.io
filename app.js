document.addEventListener("DOMContentLoaded", async function() {
  const createIDBtn = document.getElementById('createID');

  // Create ID Name and send 0.2 Sol
  createIDBtn.addEventListener('click', async () => {
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
      transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
      transaction.feePayer = publicKey;
      
      const signedTransaction = await window.solana.signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      
      alert(`Transaction successful! Signature: ${signature}`);
    } catch (error) {
      console.error(error);
      alert('Transaction failed! Please check console for details.');
    }
  });
});

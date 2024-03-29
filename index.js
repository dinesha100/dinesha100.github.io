import React from 'react';
import ReactDOM from 'react-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <header>
      <h1>Solana Authority Revoker</h1>
      <WalletMultiButton />
    </header>
  );
}

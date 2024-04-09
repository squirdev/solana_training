import React from 'react';
import logo from './logo.svg';
import './App.css';
import WalletContextProvider from './components/WalletContextProvider';
import { WalletModal, WalletModalButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import WalletConnectButton from './components/WalletConnectButton';

function App() {
  return (
    <WalletContextProvider>
      <div className="App">
        <WalletConnectButton />
      </div>
    </WalletContextProvider>
  );
}

export default App;

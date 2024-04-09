import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import * as web3 from '@solana/web3.js'
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets'
require('@solana/wallet-adapter-react-ui/styles.css')

const WalletContextProvider = ({ children }: any) => {
    const endpoint = web3.clusterApiUrl('mainnet-beta')
    const wallets = [new walletAdapterWallets.PhantomWalletAdapter()]

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletContextProvider
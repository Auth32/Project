import React from 'react'
import { useConnectWallet } from '@web3-onboard/react'
import { APP_CONFIG } from "../../app.config";

export const EthereumConnect: React.FC = () => {
  const [{wallet, connecting}, connect, disconnect] = useConnectWallet()

  return (
    <button
      disabled={connecting}
      style={APP_CONFIG.buttonTheme}
      onClick={() => (wallet ? disconnect(wallet) : connect())}>
      {connecting ? 'connecting' : wallet ? 'Disconnect' : 'Connect'}
    </button>
  );
}


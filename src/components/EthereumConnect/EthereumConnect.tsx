import React from 'react'
import { useConnectWallet } from '@web3-onboard/react'
import { ShortButton } from "../ShortButton";
import ethereumIcon from "./ethereumIcon.svg";

export const EthereumConnect: React.FC = () => {
  const [{wallet}, connect, disconnect] = useConnectWallet()

  const connectWallet = () => {
    return wallet ? disconnect(wallet) : connect()
  }

  return (
    <ShortButton
      connectFunction={() => connectWallet}
      buttonIcon={ethereumIcon}
    />
  );
}


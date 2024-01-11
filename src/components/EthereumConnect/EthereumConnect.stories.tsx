import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { EthereumConnect } from "./EthereumConnect";

import { Web3OnboardProvider, init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import ledgerModule from '@web3-onboard/ledger';
import coinbaseWalletModule from '@web3-onboard/coinbase'
import cedeStoreWalletModule from '@web3-onboard/cede-store'

const meta: Meta<typeof EthereumConnect> = {
  component: EthereumConnect,
  title: "Auth32/EthereumConnect",
  argTypes: {},

}

export default meta;

type Story = StoryObj<typeof EthereumConnect>;
const INFURA_KEY = '107d8d034d664dacbc757c2084f25f70';

const ledger = ledgerModule({
  walletConnectVersion: 2,
  projectId: 'abc123...',
  requiredChains: [1, 137]
})
const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true });
const cedeStoreWallet = cedeStoreWalletModule();

const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`
}
const chains = [ethereumRopsten];
const wallets = [injectedModule(), ledger, cedeStoreWallet, coinbaseWalletSdk];

export const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: 'Web3-Onboard Demo',
    icon: '<svg>App Icon</svg>',
    description: 'A demo of Web3-Onboard.'
  }
})

export const Primary: (args) => JSX.Element = (args) => {

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <EthereumConnect/>
    </Web3OnboardProvider>
  )
};
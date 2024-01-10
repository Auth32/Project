import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { EthereumConnect } from "./EthereumConnect";
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'

const meta: Meta<typeof EthereumConnect> = {
  component: EthereumConnect,
  title: "Auth32/EthereumConnect",
  argTypes: {},

}

export default meta;

type Story = StoryObj<typeof EthereumConnect>;

export const Primary: (args) => JSX.Element = (args) => {

  const INFURA_KEY = '107d8d034d664dacbc757c2084f25f70';
  const ethereumRopsten = {
    id: '0x3',
    token: 'rETH',
    label: 'Ethereum Ropsten',
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`
  }
  const chains = [ethereumRopsten]
  const wallets = [injectedModule()]
  const web3Onboard = init({
    wallets,
    chains,
    appMetadata: {
      name: 'Web3-Onboard Demo',
      icon: '<svg>App Icon</svg>',
      description: 'A demo of Web3-Onboard.'
    }
  })

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <EthereumConnect/>
    </Web3OnboardProvider>
  )
};
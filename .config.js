// Run everything locally!
//
//   * NEAR & Ethereum networks & bridge: https://github.com/near/rainbow-bridge-cli
//   * NEAR "contract helper": https://github.com/near/near-contract-helper
//   * NEAR Wallet: https://github.com/near/near-wallet
//
// Then use `yarn local` to use config created by rainbow-bridge-cli
const homedir = require('os').homedir()
const path = require('path')
const { readFileSync } = require('fs')
let localConfig
try {
  localConfig = require(path.join(homedir, '.rainbow', 'config.json'))
} catch (e) {
  localConfig = {}
}

module.exports = {
  local: {
    ...localConfig,
    ethNetwork: 'localhost:9545',
    auroraErc20AbiText: readFileSync('./abi/auroraErc20.abi'),
    ethLockerAbiText: readFileSync('./abi/ERC20Locker.full.abi'),
    nearClientAccount: 'rainbow_bridge_eth_on_near_client',
    nearWalletUrl: 'http://localhost:4000/',
    nearHelperUrl: 'http://localhost:3000/'
  },
  goerli_development: {
    // library settings
    auroraErc20AbiText: readFileSync('./abi/auroraErc20.abi'),
    ethLockerAbiText: readFileSync('./abi/ERC20Locker.full.abi'),
    nearHelperUrl: 'https://helper.testnet.near.org',
    nearTokenFactoryAccount: 'factory.goerli.testnet',

    // frontend settings
    featuredNep141s: JSON.stringify([
      'ba62bcfcaafc6622853cca2be6ac7d845bc0f2dc.factory.goerli.testnet', // FAU: https://goerli.etherscan.io/token/0xba62bcfcaafc6622853cca2be6ac7d845bc0f2dc
      'wrap.testnet'
    ]),
    nearNodeUrl: 'https://rpc.testnet.near.org/',
    nearWalletUrl: 'https://wallet.testnet.near.org',
    nearExplorerUrl: 'https://explorer.testnet.near.org',
    nearNetworkId: 'testnet',
    ethNetworkId: 'aurora',
    auroraRpc: 'https://testnet.aurora.dev',
    auroraChainId: 1313161555,
    auroraEvmAccount: 'aurora',

    wNearNep141: 'wrap.testnet',
    etherExitToNearPrecompile: '0xe9217bc70b7ed1f598ddd3199e80b093fa71124f'
  },
  mainnet: {
    // library settings
    auroraErc20AbiText: readFileSync('./abi/auroraErc20.abi'),
    nearHelperUrl: 'https://helper.near.org',
    nearTokenFactoryAccount: 'factory.bridge.near',

    // frontend settings
    featuredNep141s: JSON.stringify([
      '7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.factory.bridge.near', //   AAVE
      '4fabb145d64652a948d72533023f6e7a623c7c53.factory.bridge.near', //   BUSD
      'c00e94cb662c3520282e6f5717214004a7f26888.factory.bridge.near', //   COMP
      'a0b73e1ff0b80914ab6fe0444e65848c4c34450b.factory.bridge.near', //   CRO
      '6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near', //   DAI
      '50d1c9771902476076ecfc8b2a83ad6b9355a4c9.factory.bridge.near', //   FTT
      'c944e90c64b2c07662a292be6244bdf05cda44a7.factory.bridge.near', //   GRT
      '0316eb71485b0ab14103307bf65a021042c6d380.factory.bridge.near', //   HBTC
      '6f259637dcd74c767781e37bc6133cd6a68aa161.factory.bridge.near', //   HT
      '514910771af9ca656af840dff83e8264ecf986ca.factory.bridge.near', //   LINK
      '9f8f72aa9304c8b593d555f12ef6589cc3a579a2.factory.bridge.near', //   MKR
      'c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.factory.bridge.near', //   SNX
      '6b3595068778dd592e39a122f4f5a5cf09c90fe2.factory.bridge.near', //   SUSHI
      '1f9840a85d5af5bf1d1762f925bdaddc4201f984.factory.bridge.near', //   UNI
      'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near', //   USDC
      'dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near', //   USDT
      '2260fac5e5542a773aa44fbcfedf7c193bc2c599.factory.bridge.near', //   WBTC
      'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near', //   WETH
      '0bc529c00c6401aef6d220be8c6ea1667f6ad93e.factory.bridge.near', //   YFI
      '111111111117dc0aa78b770fa6a738034120c302.factory.bridge.near', //   1INCH
      'wrap.near'
    ]),
    nearNodeUrl: 'https://rpc.mainnet.near.org/',
    nearWalletUrl: 'https://wallet.near.org',
    nearExplorerUrl: 'https://explorer.near.org',
    nearNetworkId: 'mainnet',
    ethNetworkId: 'aurora',
    auroraRpc: 'https://mainnet.aurora.dev',
    auroraChainId: 1313161554,
    auroraEvmAccount: 'aurora',

    wNearNep141: 'wrap.near',
    etherExitToNearPrecompile: '0xe9217bc70b7ed1f598ddd3199e80b093fa71124f'
  }
}

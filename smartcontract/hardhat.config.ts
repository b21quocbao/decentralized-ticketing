import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()
const { ALCHEMY_SEPOLIA_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY as string]
    }
  },
  sourcify: {
    enabled: true
  },

  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY as string,
    }
  }
};

export default config;

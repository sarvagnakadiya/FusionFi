const fs = require("fs");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: __dirname + "/.env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    local: {
      url: process.env.API_KEY_URL, //Your RPC URL
      accounts: [process.env.LOCAL_PRIVATE_KEY], //Your private key
    },
    scroll: {
      url: "https://scroll-sepolia.public.blastapi.io", //Your RPC URL
      accounts: [process.env.PRIVATE_KEY], //Your private key
    },
  },
  etherscan: {
    apiKey: {
      scroll: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "scroll",
        chainId: 534351,
        urls: {
          apiURL: "https://sepolia-blockscout.scroll.io/api",
          browserURL: "https://sepolia-blockscout.scroll.io/",
        },
      },
    ],
  },
};

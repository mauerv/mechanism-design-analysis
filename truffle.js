require('dotenv').config();
var HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4700000
    },
    main: {
      provider: function() {
        return new HDWalletProvider(process.env.INFURA_MAINNET_MNEMONIC, "https://mainnet.infura.io/v3/"+process.env.INFURA_KEY)
      },
      network_id: "1"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};

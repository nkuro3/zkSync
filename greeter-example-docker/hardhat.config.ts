import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

// dynamically changes endpoints for local tests
const zkSyncTestnet =
  process.env.NODE_ENV == "test"
    ? {
        url: "http://localhost:3050",
        ethNetwork: "http://localhost:8545",
        zksync: true,
      }
    : {
        url: "https://zksync2-testnet.zksync.dev",
        ethNetwork: "goerli",
        zksync: true,
      };

module.exports = {
  zksolc: {
    version: "1.2.2",
    compilerSource: "binary",
    settings: {},
  },
  // defaults to zkSync network
  defaultNetwork: "zkSyncTestnet",

  networks: {
    hardhat: {
      zksync: true,
    },
    // load test network details
    zkSyncTestnet,
  },
  solidity: {
    version: "0.8.16",
  },
};

// import "@matterlabs/hardhat-zksync-deploy";
// import "@matterlabs/hardhat-zksync-solc";

// module.exports = {
//   zksolc: {
//     version: "1.2.2",
//     compilerSource: "binary",
//     settings: {},
//   },
//   defaultNetwork: "zkTestnet",
//   networks: {
//     zkTestnet: {
//       url: "https://zksync2-testnet.zksync.dev", // URL of the zkSync network RPC
//       ethNetwork: "goerli", // Can also be the RPC URL of the Ethereum network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
//       zksync: true,
//     },
//   },
//   solidity: {
//     version: "0.8.16",
//   },
// };
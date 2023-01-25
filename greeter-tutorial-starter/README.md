# greeter-front-end
## [Paying fees using testnet paymaster](https://v2-docs.zksync.io/dev/developer-guides/hello-world.html#front-end-integration)
### Knowlwdge
#### [Provider](https://v2-docs.zksync.io/api/js/providers.html#provider)
> This is the most commonly used type of provider. It provides the same functionality as ethers.providers.JsonRpcProvider, but extends it with the zkSync-specific methods.
##### zkSync-specific methods
- getTestnetPaymasterAddress
##### ethers.js
- [getGasPrice]([getGasPrice](https://docs.ethers.org/v5/api/providers/provider/#Provider-getGasPrice))

#### [Contract](https://v2-docs.zksync.io/api/js/contracts.html)
- estimateGas
  - [ethers](https://v2-docs.zksync.io/dev/developer-guides/aa.html#fees)
  - [customData](https://v2-docs.zksync.io/api/js/features.html#overrides)

#### Utils
- [getPaymasterParams](https://v2-docs.zksync.io/api/js/utils.html#encoding-paymaster-params)
  - Briefly remember tutorial code as it is.

### memo
Setting of the number of digits in USDC and wBTC are not set correctly as [description](https://v2-docs.zksync.io/dev/developer-guides/hello-world.html#front-end-integration).

import Registry from './../build/contracts/Registry.json'
import web3 from 'web3'

const drizzleOptions = {
  contracts: [
    {
      contractName: 'Registry',
      web3Contract: new web3.eth.Contract(Registry.abi, "0x5e2eb68a31229b469e34999c467b017222677183", {data: 'deployedBytecode'})
    }
  ]
}

export default drizzleOptions

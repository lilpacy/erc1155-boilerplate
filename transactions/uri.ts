import env from "hardhat";
import {HttpNetworkConfig} from "hardhat/types";
import * as ethers from "ethers";

const abi = [
  "function uri(uint256 id) view returns (string)",
];

const main = async () => {
  const rpcUrl = (env.network.config as HttpNetworkConfig).url
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract("0xD7Bae04EDe23E21F6aB3A6B7F8b10c3117440171", abi, provider)

  const res = await contract.uri(1) //gasLimit is necessary
  console.log('uri result:', res)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

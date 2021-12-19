# ERC1155 Boilerplate

## deploy and verify

Installation
```shell
yarn install # or npm install
```

Greeter example
```shell
hardhat run scripts/deployGreeter.ts --network mumbai
hardhat verify --contract contracts/Greeter.sol:Greeter 0xE03d9BbcE6B90C489ED009011f7338b1A3748aB7 "Hello, Hardhat" --network mumbai
```

MyERC1155 example
```shell
# modify package.json
npm run deploy:mumbai
npm run vefiry:mumbai
```

Metadata example
```shell
brew install ipfs # if not installed
npm run ipfs:add
npm run ipfs:cat
npm run ipfs:open
```

Polygonscan

[https://mumbai.polygonscan.com/address/0xd7bae04ede23e21f6ab3a6b7f8b10c3117440171](https://mumbai.polygonscan.com/address/0xd7bae04ede23e21f6ab3a6b7f8b10c3117440171)

Opensea

[https://testnets.opensea.io/assets/mumbai/0xd7bae04ede23e21f6ab3a6b7f8b10c3117440171/1](https://testnets.opensea.io/assets/mumbai/0xd7bae04ede23e21f6ab3a6b7f8b10c3117440171/1)

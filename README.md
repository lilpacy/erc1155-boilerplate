# ERC1155 Boilerplate

## deploy and verify

```shell
hardhat run scripts/deploy.ts --network mumbai
hardhat verify --contract contracts/Greeter.sol:Greeter 0xE03d9BbcE6B90C489ED009011f7338b1A3748aB7 "Hello, Hardhat" --network mumbai
```

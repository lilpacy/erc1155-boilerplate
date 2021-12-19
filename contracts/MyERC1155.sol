// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyERC1155 is ERC1155 {
    constructor(string memory uri_) ERC1155(uri_) {}

    function mint(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external {
        _mint(to, tokenId, amount, "");
    }
}

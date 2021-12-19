// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyERC1155 is ERC1155 {
    // for opensea
    string public name;
    string public symbol;

    constructor(
        string memory uri_,
        string memory name_,
        string memory symbol_
    ) ERC1155(uri_) { name = name_; symbol = symbol_; }

    function mint(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external {
        _mint(to, tokenId, amount, "");
    }
}

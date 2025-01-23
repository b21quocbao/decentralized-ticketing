// contracts/SGDT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721Enumerable, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract EventTicketNFT is ERC721Enumerable, Ownable {
    constructor() ERC721("EventTicketNFT", "ETN") Ownable(msg.sender) {}

    function mint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}

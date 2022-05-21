// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract OPUNK is ERC20, ERC20Burnable, Ownable {

    IERC721 optiPunk;

    constructor() ERC20("oPUNK", "oPUNK") {
        optiPunk = IERC721(address(0xB8Df6Cc3050cC02F967Db1eE48330bA23276A492));

    }
    
    // give user 100 tokens in exchange for 1 NFT
    function _mintTokensToUser(address to) internal {
        _mint(to, 100);
    }

    // burn token
    function _burnTokens(address user) internal {
        _burn(user, 100);
    }

    function redeemTokens(uint256 _tokenID) public {
        // transfer optipunk
        optiPunk.transferFrom(msg.sender, address(this), _tokenID);
        _mintTokensToUser(msg.sender);
    }

    function redeemOptiPunk(uint256 _tokenID) public {
        _burnTokens(msg.sender);
        optiPunk.transferFrom(address(this), msg.sender, _tokenID);
    }

}
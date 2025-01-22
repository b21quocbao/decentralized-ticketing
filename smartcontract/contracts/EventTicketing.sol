// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./EventTicketNFT.sol";

contract EventTicketing {
    struct Event {
        address owner;
        string name;
        string description;
        string imageUrl;
        uint256 time;
        uint256 duration;
    }

    uint256 public eventIdCounter = 1;
    mapping(uint256 => Event) public events;

    ERC20 public sgdtToken;
    EventTicketNFT public ticketNFT;
    uint256 ticketCounter = 1;

    constructor(address sgdtTokenAddress, address ticketNFTAddress) {
        sgdtToken = ERC20(sgdtTokenAddress);
        ticketNFT = EventTicketNFT(ticketNFTAddress);
    }

    function createEvent(
        string memory name,
        string memory description,
        string memory imageUrl,
        uint256 time,
        uint256 duration
    ) public {
        uint256 eventId = eventIdCounter;
        events[eventId] = Event({
            owner: msg.sender,
            name: name,
            description: description,
            imageUrl: imageUrl,
            time: time,
            duration: duration
        });
        eventIdCounter++;
    }

    function bookTicket(
        uint256 eventId,
        uint256 quantity,
        uint256 price
    ) public {
        require(events[eventId].time > 0, "Event does not exist");
        uint256 totalCost = quantity * price;
        require(
            sgdtToken.balanceOf(msg.sender) >= totalCost,
            "Insufficient SGDT balance"
        );

        // Transfer SGDT from user to event owner
        sgdtToken.transferFrom(msg.sender, events[eventId].owner, totalCost);

        for (uint256 i = 0; i < quantity; i++) {
            ticketNFT.mint(msg.sender, ticketCounter);
            ++ticketCounter;
        }
    }
}

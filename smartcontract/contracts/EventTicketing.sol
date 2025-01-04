// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract EventTicketing {
    struct Event {
        uint256 id;
        string name;
        string description;
        uint256 date;
        uint256 maxTickets;
        uint256 ticketPrice;
        address[] interestedUsers;
        address[] allocatedUsers;
        bool exists;
    }

    uint256 public eventCount;
    mapping(uint256 => Event) public events;
    mapping(address => mapping(uint256 => bool)) public userInterest;
    mapping(address => mapping(uint256 => bool)) public userPayment;

    event EventCreated(uint256 eventId, string name, uint256 date, uint256 maxTickets, uint256 ticketPrice);
    event RegisteredInterest(uint256 eventId, address user);
    event BallotAllocated(uint256 eventId, address[] allocatedUsers);
    event PaymentMade(uint256 eventId, address user);

    modifier eventExists(uint256 eventId) {
        require(events[eventId].exists, "Event does not exist");
        _;
    }

    modifier hasNotRegistered(uint256 eventId) {
        require(!userInterest[msg.sender][eventId], "Already registered interest");
        _;
    }

    modifier hasNotPaid(uint256 eventId) {
        require(!userPayment[msg.sender][eventId], "Payment already made");
        _;
    }

    // Create an event
    function createEvent(
        string memory name,
        string memory description,
        uint256 date,
        uint256 maxTickets,
        uint256 ticketPrice
    ) public {
        require(date > block.timestamp, "Event date must be in the future");
        require(maxTickets > 0, "Max tickets must be greater than 0");

        address[] memory interestedUsers = new address[](0);
        address[] memory allocatedUsers = new address[](0);

        eventCount++;
        events[eventCount] = Event({
            id: eventCount,
            name: name,
            description: description,
            date: date,
            maxTickets: maxTickets,
            ticketPrice: ticketPrice,
            interestedUsers: interestedUsers,          
            allocatedUsers: allocatedUsers,
            exists: true
        });

        emit EventCreated(eventCount, name, date, maxTickets, ticketPrice);
    }

    // Register interest in an event
    function registerInterest(uint256 eventId) public eventExists(eventId) hasNotRegistered(eventId) {
        events[eventId].interestedUsers.push(msg.sender);
        userInterest[msg.sender][eventId] = true;

        emit RegisteredInterest(eventId, msg.sender);
    }

    // Conduct balloting for ticket allocation
    function conductBalloting(uint256 eventId) public eventExists(eventId) {
        Event storage currentEvent = events[eventId];
        require(currentEvent.date > block.timestamp, "Event already started");
        require(currentEvent.allocatedUsers.length == 0, "Balloting already conducted");

        uint256 numTickets = currentEvent.maxTickets;
        address[] storage interestedUsers = currentEvent.interestedUsers;

        require(interestedUsers.length > 0, "No interested users for this event");

        for (uint256 i = 0; i < interestedUsers.length && currentEvent.allocatedUsers.length < numTickets; i++) {
            currentEvent.allocatedUsers.push(interestedUsers[i]);
        }

        emit BallotAllocated(eventId, currentEvent.allocatedUsers);
    }

    // Make a booking payment
    function makePayment(uint256 eventId) public payable eventExists(eventId) hasNotPaid(eventId) {
        Event storage currentEvent = events[eventId];
        require(currentEvent.date > block.timestamp, "Event already started");
        require(msg.value == currentEvent.ticketPrice, "Incorrect payment amount");

        bool isAllocated = false;
        for (uint256 i = 0; i < currentEvent.allocatedUsers.length; i++) {
            if (currentEvent.allocatedUsers[i] == msg.sender) {
                isAllocated = true;
                break;
            }
        }
        require(isAllocated, "User not allocated a ticket");

        userPayment[msg.sender][eventId] = true;

        emit PaymentMade(eventId, msg.sender);
    }

    // View event details
    function getEvent(uint256 eventId) public view eventExists(eventId) returns (
        string memory name,
        string memory description,
        uint256 date,
        uint256 maxTickets,
        uint256 ticketPrice,
        address[] memory interestedUsers,
        address[] memory allocatedUsers
    ) {
        Event storage currentEvent = events[eventId];
        return (
            currentEvent.name,
            currentEvent.description,
            currentEvent.date,
            currentEvent.maxTickets,
            currentEvent.ticketPrice,
            currentEvent.interestedUsers,
            currentEvent.allocatedUsers
        );
    }
}

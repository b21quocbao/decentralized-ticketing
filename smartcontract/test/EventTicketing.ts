import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("EventTicketing", function () {
  // Fixture to deploy the contract and set up initial state
  async function deployEventTicketingFixture() {
    const [owner, user1, user2] = await hre.ethers.getSigners();

    const EventTicketing = await hre.ethers.getContractFactory("EventTicketing");
    const eventTicketing = await EventTicketing.deploy();

    return { eventTicketing, owner, user1, user2 };
  }

  describe("Event Management", function () {
    it("Should allow creating an event", async function () {
      const { eventTicketing, owner } = await loadFixture(deployEventTicketingFixture);

      await expect(
        eventTicketing.createEvent(
          "Blockchain Conference",
          "A conference about blockchain tech",
          Math.floor(Date.now() / 1000) + 86400, // 1 day from now
          100,
          hre.ethers.parseEther("0.1")
        )
      )
        .to.emit(eventTicketing, "EventCreated")
        .withArgs(1, "Blockchain Conference", anyValue, 100, hre.ethers.parseEther("0.1"));

      const event = await eventTicketing.getEvent(1);
      expect(event.name).to.equal("Blockchain Conference");
      expect(event.maxTickets).to.equal(100);
    });
  });

  describe("Interest Registration", function () {
    it("Should allow a user to register interest for an event", async function () {
      const { eventTicketing, user1 } = await loadFixture(deployEventTicketingFixture);

      // Create an event
      await eventTicketing.createEvent(
        "Blockchain Conference",
        "A conference about blockchain tech",
        Math.floor(Date.now() / 1000) + 86400, // 1 day from now
        100,
        hre.ethers.parseEther("0.1")
      );

      // Register interest
      await expect(eventTicketing.connect(user1).registerInterest(1))
        .to.emit(eventTicketing, "RegisteredInterest")
        .withArgs(1, user1.address);

      const event = await eventTicketing.getEvent(1);
      expect(event.interestedUsers).to.include(user1.address);
    });

    it("Should prevent duplicate registrations", async function () {
      const { eventTicketing, user1 } = await loadFixture(deployEventTicketingFixture);

      await eventTicketing.createEvent(
        "Blockchain Conference",
        "A conference about blockchain tech",
        Math.floor(Date.now() / 1000) + 86400,
        100,
        hre.ethers.parseEther("0.1")
      );

      await eventTicketing.connect(user1).registerInterest(1);

      await expect(eventTicketing.connect(user1).registerInterest(1)).to.be.revertedWith(
        "Already registered interest"
      );
    });
  });

  describe("Balloting", function () {
    it("Should allocate tickets through balloting", async function () {
      const { eventTicketing, user1, user2 } = await loadFixture(deployEventTicketingFixture);

      await eventTicketing.createEvent(
        "Blockchain Conference",
        "A conference about blockchain tech",
        Math.floor(Date.now() / 1000) + 86400,
        2,
        hre.ethers.parseEther("0.1")
      );

      await eventTicketing.connect(user1).registerInterest(1);
      await eventTicketing.connect(user2).registerInterest(1);

      await expect(eventTicketing.conductBalloting(1))
        .to.emit(eventTicketing, "BallotAllocated")
        .withArgs(1, [user1.address, user2.address]);

      const event = await eventTicketing.getEvent(1);
      expect(event.allocatedUsers).to.deep.equal([user1.address, user2.address]);
    });
  });

  describe("Booking Payment", function () {
    it("Should allow allocated users to make a payment", async function () {
      const { eventTicketing, user1 } = await loadFixture(deployEventTicketingFixture);

      await eventTicketing.createEvent(
        "Blockchain Conference",
        "A conference about blockchain tech",
        Math.floor(Date.now() / 1000) + 86400,
        1,
        hre.ethers.parseEther("0.1")
      );

      await eventTicketing.connect(user1).registerInterest(1);
      await eventTicketing.conductBalloting(1);

      await expect(
        eventTicketing.connect(user1).makePayment(1, {
          value: hre.ethers.parseEther("0.1"),
        })
      )
        .to.emit(eventTicketing, "PaymentMade")
        .withArgs(1, user1.address);

      expect(await hre.ethers.provider.getBalance(eventTicketing.address)).to.equal(
        hre.ethers.parseEther("0.1")
      );
    });

    it("Should reject payments from non-allocated users", async function () {
      const { eventTicketing, user2 } = await loadFixture(deployEventTicketingFixture);

      await eventTicketing.createEvent(
        "Blockchain Conference",
        "A conference about blockchain tech",
        Math.floor(Date.now() / 1000) + 86400,
        1,
        hre.ethers.parseEther("0.1")
      );

      await expect(
        eventTicketing.connect(user2).makePayment(1, {
          value: hre.ethers.parseEther("0.1"),
        })
      ).to.be.revertedWith("User not allocated a ticket");
    });
  });
});

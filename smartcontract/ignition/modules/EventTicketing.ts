// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EventTicketingModule = buildModule("EventTicketingModule", (m) => {

  // Deploy the ERC20 token (SGDT)
  const sgdtToken = m.contract("SGDT", [], {});

  // Deploy the ERC721 token (EventTicketNFT)
  const ticketNFT = m.contract("EventTicketNFT", [], {});

  // Deploy the EventTicketing contract using the addresses of the deployed tokens
  const eventTicketing = m.contract("EventTicketing", [sgdtToken, ticketNFT], {});

  // Create events after deployment
  m.call(eventTicketing, "createEvent", [
    "SEVENTEEN [RIGHT HERE] WORLD TOUR IN SINGAPORE\n",
    "Live Nation Singapore is thrilled to announce this highly anticipated concert.",
    "/assets/img/Seventeen.jpg",
    1737801000000,
    7200000
  ], {
    id: "event1",
  });

  m.call(eventTicketing, "createEvent", [
    "Yiruma Live in Singapore 2025",
    "Popular South Korean composer and pianist Yiruma returns to Singapore for a live performance.",
    "/assets/img/Yiruma.jpg",
    1739620800000,
    10800000
  ], {
    id: "event2",
  });

  m.call(eventTicketing, "createEvent", [
    "孙燕姿 《就在日落以后》巡回演唱会 - 新加坡",
    "The beloved Mandopop queen is set to make a triumphant return to Singapore with a spectacular concert.",
    "/assets/img/Stefanie Sun.jpg",
    1744459200000,
    14400000
  ], {
    id: "event3",
  });

  return { sgdtToken, ticketNFT, eventTicketing };
});

export default EventTicketingModule;

import { ethers } from "hardhat";

async function main() {
  // Deploy EventTicketing contract


  const [owner, address1] = await ethers.getSigners();
  const ticketNFT = await ethers.getContractAt("EventTicketNFT", "0x9e6B55589B8a5621C5EAdbEbA2d41B623cD1FD8B");
  const erc20 = await ethers.getContractAt("SGDT", "0x12b408E193dC2b00510C0e36B64ffBd5A34F204F");
  const eventTicketing = await ethers.getContractAt("EventTicketing", "0x4d48aFf599E0fe92293F2a80811526fBD98A5c44");
  // console.log("EventTicketing deployed to:", await eventTicketing.getAddress(), owner);
  // Mint tokens and transfer them to the EventTicketing contract

  // const transferOwnershipTx = await ticketNFT.transferOwnership(await eventTicketing.getAddress());
  // await transferOwnershipTx.wait();

  const tx1 = await erc20.approve(await eventTicketing.getAddress(), ethers.parseEther("200"));
  console.log(await tx1.wait());

  const tx = await eventTicketing.bookTicket(
    1,
    50,
    ethers.parseEther("4"), {
    from: owner
  });
  console.log(await tx.wait());

  const tx2 = await ticketNFT.balanceOf(owner.address);
  console.log(tx2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

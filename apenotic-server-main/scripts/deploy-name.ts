import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  // Obtain the contract
  const Contract = await ethers.getContractFactory("Contract");
  // Deploy it
  const name = await Contract.deploy();
  // Wait for the network to run the contract
  await name.deployed();
  // Return the name variable, provided by `contracts/Contract.sol`
  return name;
}

// TODO: Figure out how to fix the type error
async function printName(name) {
  console.log(await name.name());
}

// Run the logic.
deploy().then(printName);

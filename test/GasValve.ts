import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("GasValve challenge", function () {
    it("Should hack the contract", async function () {
        const [OWNER, ATTACKER] = await ethers.getSigners();
        const Valve = await ethers.getContractFactory("Valve");
        const valve = await Valve.deploy();
        
        const ValveHacker = await ethers.getContractFactory("ValveHacker");
        const valveHacker = await ValveHacker.deploy();

        await valve.useNozzle(valveHacker.address);
    });
});

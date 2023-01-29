import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("RootMe challenge", function () {
 
  describe("Deployment", function () {
    it("Should hack the contract", async function () {
        const [OWNER, ATTACKER] = await ethers.getSigners();
        const RootMe = await ethers.getContractFactory("RootMe");
        const rootMe = await RootMe.deploy();
        await rootMe.deployed();
        await rootMe.connect(ATTACKER).register("ROO", "TROOT");
    });
    



})
    
});

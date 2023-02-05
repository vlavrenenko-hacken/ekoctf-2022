import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Trickster challenge", function () {
    it("Should hack the contract", async function () {
        const [OWNER, ATTACKER] = await ethers.getSigners();
        const JackpotProxy = await ethers.getContractFactory("JackpotProxy");
        const jackpotProxy = await JackpotProxy.deploy({value: ethers.utils.parseEther("2")});
        
        await jackpotProxy.connect(ATTACKER).claimPrize({value: ethers.utils.parseEther("1")});
        expect(await ethers.provider.getBalance(jackpotProxy.address)).to.eq(ethers.constants.Zero);
    });
});

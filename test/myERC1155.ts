import {expect} from "chai";
import {ethers} from "hardhat";
import {Signer} from "ethers";
import {MyERC1155} from "../typechain/MyERC1155";

let myERC1155: MyERC1155;

let addr1: Signer
let addr2: Signer

describe("MyERC1155", function () {
  beforeEach(async () => {
    const signers = await ethers.getSigners();
    addr1 = signers[1]
    addr2 = signers[2]
    const MyERC1155 = await ethers.getContractFactory("MyERC1155");
    myERC1155 = await MyERC1155.deploy("dummy", "dummy", "dummy");
    await myERC1155.deployed();
  });

  it("Should mint success", async function () {
    const addr1Address = await addr1.getAddress()
    await myERC1155.mint(addr1Address, 1, 1)
    expect(await myERC1155.balanceOf(addr1Address, 1)).to.equal(1);
  });

  it("Should safeTransfer success", async function () {
    const addr1Address = await addr1.getAddress()
    const addr2Address = await addr2.getAddress()
    await myERC1155.connect(addr2).mint(addr2Address, 1, 1)
    await myERC1155.connect(addr2).setApprovalForAll(addr1Address, true)
    await myERC1155.connect(addr1).safeTransferFrom(addr2Address, addr1Address, 1, 1, [])
    expect(await myERC1155.balanceOf(addr1Address, 1)).to.equal(1);
  });
});

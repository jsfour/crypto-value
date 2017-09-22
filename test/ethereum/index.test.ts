import "mocha";
import { expect } from "chai";
import * as Ev from "../../src/ethereum"
import * as tEv from "../../src/ethereum/types"
import BigNumber from "bignumber.js"

describe('ethereumValue', () => {
    describe("#buildEthereumValue", () => {
        describe("as string", () => {
            it("works correctly from wei", () => {
                const value = Ev.buildEthereumValue("1234567890000007", tEv.EthereumUnit.Wei)
                expect(value.toEth().toString()).to.eq("0.001234567890000007")
                expect(value.toWei().toString()).to.eq("1234567890000007")
                expect(value.toBase().toString()).to.eq("0.00123456")
            })
            it("works correctly from ether", () => {
                const value = Ev.buildEthereumValue("0.001234567890000007", tEv.EthereumUnit.Ether)
                expect(value.toEth().toString()).to.eq("0.001234567890000007")
                expect(value.toWei().toString()).to.eq("1234567890000007")
                expect(value.toBase().toString()).to.eq("0.00123456")
            })
        })
    })
    describe("#buildEthereumValueFromWei", () => {
        // Not writing string tests for these 
        it("works correctly", () => {
            const value = Ev.buildEthereumValueFromWei("12009000000000000")
            expect(value.toEth().toString()).to.eq("0.012009")
            expect(value.toWei().toString()).to.eq("12009000000000000")
            expect(value.toBase().toString()).to.eq("0.01200900")
        })
    })
    describe("#buildEthereumValueFromEth", () => {
        it("works correctly", () => {
            const value = Ev.buildEthereumValueFromEth("0.012009")
            expect(value.toEth().toString()).to.eq("0.012009")
            expect(value.toWei().toString()).to.eq("12009000000000000")
            expect(value.toBase().toString()).to.eq("0.01200900")
        })
    })
})

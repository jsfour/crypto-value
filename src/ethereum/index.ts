import * as t from "./types";
import { BigNumber } from "bignumber.js";
import { BasePercision } from "../index";

const WeiConversion: number = Number(1e18);

/**
* Constructs an {EthereumValue} type from a BigNumber of Ether;
*
* @param {string} amount - the amount of the value
* @param {EthereumUnit} unit - the unit type (crrently only supports Wei)
*/
const buildEthereumValue = function (amount: string, unit: t.EthereumUnit): t.EthereumValue {
    let amoundBn = new BigNumber(amount);
    const ethValue: any = new Object();
    ethValue.value = amoundBn.toString();
    ethValue.unit = unit;
    ethValue.toBase = () => ethValue.toEth().toFixed(BasePercision, 3); //Flooring values via https://mikemcl.github.io/bignumber.js/#round-half-up
    switch (unit) {
        case t.EthereumUnit.Wei:
        ethValue.toWei = () => amoundBn
        ethValue.toEth = () => amoundBn.div(WeiConversion)
        break;
        case t.EthereumUnit.Ether:
        ethValue.toWei = () => amoundBn.mul(WeiConversion)
        ethValue.toEth = () => amoundBn
        break;
        default:
        throw new Error("Non supported Ethereum unit");
    }
    return ethValue;
};
export { buildEthereumValue }

const buildEthereumValueFromWei: (amount: string) => t.EthereumValue = amount => buildEthereumValue(amount, t.EthereumUnit.Wei);
export { buildEthereumValueFromWei }

const buildEthereumValueFromEth: (amount: string) => t.EthereumValue = amount => buildEthereumValue(amount, t.EthereumUnit.Ether);
export { buildEthereumValueFromEth }

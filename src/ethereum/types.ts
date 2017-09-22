import * as i from "../index";


export enum EthereumUnit {
    Wei = "wei",
    Kwei = "kewi",
    Mwei = "mewi",
    Gwei = "gwei",
    Szabo = "szabo",
    Finney = "finney",
    Ether = "ether",
    Kether = "kether",
    Mether = "mether",
    Gether = "gether",
    Tether = "tether"
}


type ConversionFunc = () => EthereumValue;
export interface EthereumValue extends i.ICryptoValue {
    toWei: ConversionFunc;
    toEth: ConversionFunc;
}
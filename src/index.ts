export * from "./ethereum"

let BasePercision: number = 8; // Default percision for the module
export { BasePercision }

export interface ICryptoValue {
    value: string;
    toBase(): () => string;
}

/**
 * Sets the base percision of the library
 * @param perc
 */
const setBasePercision = function (perc: number): number {
    BasePercision = perc
    return BasePercision;
}
export { setBasePercision }
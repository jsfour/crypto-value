import BigNumber from "bignumber.js"

const toBigNum = (num: string) => new BigNumber(num)
export { toBigNum }

const lowerString = (value: string) => {
    if (typeof value == "string") {
        return value.toLowerCase();
    }
    throw new Error(`${value} must be a string`);
}
export { lowerString }
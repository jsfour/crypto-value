# crypto-value
A library to manage your various cryptocurrency values.

```
import * as Cv from "crypto-value"

Cv.setBasePercision(8) // Sets the base percision of the library

let value = Cv.buildEthereumValue(1.5, "ether");
let fees = Cv.buildEthereumValue(0.5, "ether");

postFeeValue = value.toEth().min(fees.toEth())
postFeeValue.toString() 
# => 1.00000000

```
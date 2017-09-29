# Crypto Value

Crypto value helps you manage the various cryptocurrency conversions. For example, going from Ethereum to Wei.

All objects also impliment a #toBase method that can serve as the value to be persisted if required.

```
interface ICryptoValue {
    value: string;
    toBase(): () => string;
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
npm install --save crypto-value
```

Then use in your app.

```
import * as Cv from "crypto-value"

const myValue = Cv.buildEthereumValueFromEth("0.012009")
myValue.toWei().toString() # => "12009000000000000"
myValue.toBase() # => "0.01200900"

// Change the percision for "toBase"

Cv.setBasePercision(2)
myValue.toBase() # => "0.01"

```

Or if you need to save to the database.

```
import * as Cv from "crypto-value"
import * as Db from "my-database-lib"

const myValue = Cv.buildEthereumValueFromEth("0.012009")

// Pass myValue around the app..

const transaction = {
    price: "302.34",
    value: myValue.toBase(),
    orderType: "limit"
}

Db.Transaction.Save(transaction)
```

## Running the tests

```
npm run ts:test
```

## Built With

* [Bignumber.js](https://github.com/MikeMcl/bignumber.js/)

## Contributing

Clone, fork and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

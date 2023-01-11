
var { buildSchema } = require('graphql');

var querySchema = buildSchema(`
    type Query {
        hello: String,
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

var userSchema = buildSchema(`
    type User {
        name: String,
        age: Int,
        address: String
    }
`);

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setAddress(address) {
        this.address = address
    }
}

module.exports = {
    "querySchema": querySchema,
    "userSchema": userSchema
}
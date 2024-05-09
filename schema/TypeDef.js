const { gql } = require("apollo-server");

const typeDefs = gql`
# This is writting a datatype and conccet table
    type User {
        id: ID
        name: String
        username: String
        age: Int
        nationality: String
    },
# it a Query written and intergrate to other table 
    type Query {
        users : [User]!
    }
`

  module.exports = typeDefs
const { gql } = require("apollo-server");

const typeDefs = gql`
# This is writting a datatype and conccet table
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends:[User]
        favourite:[Movie]
    }   

    type Movie {
        id: ID!
        name:String!
        yearofpublication:String!
        Intheater:Boolean!
    }
# it a Query written and intergrate to other table 
    type Query {
        # nested query 
        users : [User!]!
        moveis : [Movie!]!

        # we have to get tha particular user details 
        user(id:ID!):User!
        movie(name:String!):Movie!

    }  

    enum Nationality{
        Indian
        beehar
        Udhrapradhesh
        Gujarat
        Kerala
        Nasa
    }
`

  module.exports = typeDefs
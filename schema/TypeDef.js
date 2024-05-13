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
        hero:String!
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

    }  ,
# Mutation query
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
    }

    input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!):User
        deleteUser(id:ID!):User!
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
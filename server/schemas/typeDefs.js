const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        password: String
        email: String
    }

    type Post {
        _id: ID
        title: String
        calories: Int
        userId: Int
    }

    type Query {
        me: User
        users: [User]
        user(email: String!): User
        posts: [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(title: String!, calories: Int!)
    }
`
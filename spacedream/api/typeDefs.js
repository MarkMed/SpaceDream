const { gql } = require("apollo-server-micro");

const typeDefs = gql`

    type Query {
        user(id: ID!): User
        users: [User]
        
        event(id: ID!): Event
        events(userId: ID!): [Event]
    }

    type User {
        id: ID
        fullname: String!
        email: String!
        password: String!
        token: String
    }

    type Event {
        id: ID
        type: String!
        userId: String!
        startDate: String!
        endDate: String!
        location: String!
        title: String!
    }

    type Mutation {
        login(input: LoginInput!): LoginResponse
        register(input: RegisterInput!): User!
        registerEvent(input: RegisterEvent!): Event!
    }
    
    input LoginInput {
        email: String!
        password: String!
    }

    type LoginResponse {
        user: User
        ok: Boolean!
        error: String
    }

    input RegisterInput {
        fullname: String!
        email: String!
        password: String!
    }

    input RegisterEvent {
        type: String!
        userId: String!
        startDate: String!
        endDate: String! 
        allDay: Boolean!
        text: String!
        ok: Boolean!
    }
`;

module.exports = typeDefs;
const { gql } = require("apollo-server-micro");

const typeDefs = gql`

    enum TypeENUM {
        EXERCISE
        SLEEP
        FOOD
        OTHER
    }

    type Query {
        user(id: ID!): User
        users: [User]
        
        event(id: ID!): Event
        events(userId: ID!): [Event]
        eventType(eventId: ID!): EventType
        
        foodById(id: ID!): Food
        foodByUserId(userId: ID!): Food
        foodByEventId(eventId: ID!): Food
        foods(userId: ID!): [Food]
    }

    type User {
        id: ID
        fullname: String!
        email: String!
        password: String!
        token: String
    }

    type Food {
        id: ID
        eventId: String!
        userId: String!
        name: String!
        proteins: Float!
        fats: Float!
        carbohydrates: Float!
    }

    type Event {
        id: ID
        type: String!
        userId: String!
        startDate: String!
        endDate: String!
        allDay: Boolean!
        text: String!
    }

    type EventType {
        id: ID
        name: TypeENUM!
    }

    type Mutation {
        login(input: LoginInput!): LoginResponse
        register(input: RegisterInput!): User!
        registerFood(input: RegisterFood!): Food!
        registerEvent(input: RegisterEvent!): Event!
        registerEventType(input: RegisterEventType!): EventType!
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

    input RegisterFood {
        eventId: String!
        userId: String!
        name: String!
        proteins: Float!
        fats: Float!
        carbohydrates: Float!
        ok: Boolean!
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

    input RegisterEventType {
        name: String!
        ok: Boolean!
    }
`;

module.exports = typeDefs;
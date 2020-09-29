const { gql } = require("apollo-server-micro");

const typeDefs = gql`
    type Query {
        astronaut(id: ID!): Astronaut
        astronauts: [Astronaut]

        physician(id: ID!): Physician
        physicians: [Physician]

        admin(id: ID!): Admin
        admins: [Admin]
        
        feedback(id: ID!): Feedback
        feedbacks(eventId: ID!): [Feedback]

        event(id: ID!): Event
        events(userId: ID!): [Event]
    }

    type Astronaut {
        id: ID
        fullname: String!
        username: String!
        token: String
    }

    type Physician {
        id: ID
        fullname: String!
        username: String!
        token: String
    }

    type Admin {
        id: ID
        fullname: String!
        username: String!
        token: String
    }

    type Event {
        id: ID
        title: String!
        allDay: Boolean!
        start: String!,
        end: String!,
        description: String,
        astronautId: String,
        physicianId: String,
        adminId: String,
        feedbacks: [Feedback]
    }

    type Feedback {
        id: ID
        astronautId: ID!
        eventId: ID!
        description: String!
        feedbackAstronaut: FeedbackAstronaut
    }

    type FeedbackAstronaut {
        id: ID
        astronautId: ID!
        feedbackId: ID!
        astronaut: Astronaut
    }

    type Mutation {
        login(input: LoginInput!): LoginResponse
        registerAstronaut(input: RegisterAstronaut!): Astronaut!
        registerPhysician(input: RegisterPhysician!): Physician!
        registerAdmin(input: RegisterAdmin!): Admin!
        registerEvent(input: RegisterEvent!): Event!
        registerFeedback(input: RegisterFeedback!): Feedback!
    }
    
    input LoginInput {
        username: String!
    }

    type LoginResponse {
        astronaut: Astronaut,
        physician: Physician,
        admin: Admin, 
        ok: Boolean!
        error: String
    }

    input RegisterAstronaut {
        fullname: String!
        username: String!
        ok: Boolean!
    }

    input RegisterPhysician {
        fullname: String!
        username: String!
        ok: Boolean!
    }

    input RegisterAdmin {
        fullname: String!
        username: String!
        ok: Boolean!
    }

    input RegisterEvent {
        title: String!
        allDay: Boolean!
        start: String!,
        end: String!,
        description: String,
        astronautId: String,
        physicianId: String,
        adminId: String
        ok: Boolean!
    }

    input RegisterFeedback {
        astronautId: ID!
        eventId: ID!
        description: String!
        ok: Boolean!
    }
`;

module.exports = typeDefs;
const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
    polls: [Poll]
  }

  type Mutation {
    createPoll(question: String!): Poll
    vote(pollId: ID!, optionId: ID!): Poll
  }

  type Poll {
    id: ID!
    question: String!
    options: [PollOption]
  }

  type PollOption {
    id: ID!
    text: String!
    votes: Int!
  }
`;

module.exports = typeDefs;

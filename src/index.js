const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const { Server: SocketServer } = require('socket.io');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event }) => {
    // Create a Socket.IO server instance
    const io = new SocketServer();

    // Attach the Socket.IO server to the event object
    event.socket = io;

    // Add a publish-subscribe mechanism to the context
    return {
      pubsub: {
        publish: (channel, payload) => {
          io.emit(channel, payload);
        },
      },
    };
  },
});

exports.handler = apolloServer.createHandler();

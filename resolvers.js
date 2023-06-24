let polls = [];

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    polls: () => polls
  },
  Mutation: {
    createPoll: (parent, args, { pubsub }) => {
      const newPoll = {
        id: String(polls.length + 1),
        question: args.question,
        //always create option 1 and 2
        options: [
            { id: '1', text: 'Yes', votes: 0 },
            { id: '2', text: 'No', votes: 0 }
        ]
      };
      polls.push(newPoll);
      
      // Emitir evento para notificar os clientes sobre uma nova enquete criada
      pubsub.publish('pollCreated', { pollCreated: newPoll });
      
      return newPoll;
    },
    vote: (parent, args, { pubsub }) => {
      const poll = polls.find(p => p.id === args.pollId);
      if (!poll) {
        throw new Error('Poll not found');
      }
      const option = poll.options.find(o => o.id === args.optionId);
      if (!option) {
        throw new Error('Option not found');
      }
      option.votes += 1;
      
      // Emitir evento para notificar os clientes sobre um voto registrado
      pubsub.publish('voteUpdated', { voteUpdated: { pollId: poll.id, optionId: option.id } });
      
      return poll;
    }
  },
  Poll: {
    options: (parent) => parent.options
  },
  PollOption: {
    votes: (parent) => parent.votes
  }
};

module.exports = resolvers;

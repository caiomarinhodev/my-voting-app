module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    // Exemplo de evento: Notificar os clientes sobre uma nova enquete criada
    socket.on("newPoll", (poll) => {
      io.emit("pollCreated", poll);
    });

    // Exemplo de evento: Notificar os clientes sobre um voto registrado
    socket.on("voteRegistered", (pollId, optionId) => {
      io.emit("voteUpdated", { pollId, optionId });
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

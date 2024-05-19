import { Server } from 'socket.io';

export const initializeWebSocket = (io: Server) => {
  io.on('connection', (socket) => {
    console.log(`connection made (${socket.id})`);

    socket.on('<EVENT>', () => {});
  });

  return io;
};

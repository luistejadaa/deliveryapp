import {Socket, io} from 'socket.io-client';
import {ISocketManager} from './interefaces';

class SocketManager implements ISocketManager {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000', {
      autoConnect: false,
    });
  }

  connect = () => {
    this.socket.connect();
  };

  disconnect = () => {
    this.socket.disconnect();
  };

  on = (event: string, callback: (...args: any[]) => void) => {
    
  };

  emit = (event: string, ...args: any[]) => {
    this.socket.emit(event, ...args);
  };

  off = (event: string, callback?: (...args: any[]) => void) => {
    
  };

  getSocket = (): Socket => {
    return this.socket;
  };

  isConnected = (): boolean => {
    return this.socket.connected;
  };

  removeAllListeners = (): void => {
    this.socket.removeAllListeners();
  };
}

const socketManager: ISocketManager = new SocketManager();
export {socketManager};

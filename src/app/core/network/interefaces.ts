import {Socket} from 'socket.io-client';

/**
 * Defines the structure of a socket emit.
 * @template T The type of the payload.
 */
interface SocketEmit<T> {
    payload: T
}

/**
 * Defines the structure of a socket response.
 * @template T The type of the payload.
 */
interface SocketResponse<T> {
    payload: T
}



/**
 * Defines the methods and properties of the ISocketManager interface.
 */
interface ISocketManager {
  /**
   * Connects to the socket server.
   */
  connect: () => void;

  /**
   * Disconnects from the socket server.
   */
  disconnect: () => void;

  /**
   * Registers a callback function to be called when the specified event is emitted.
   * @param event The name of the event to listen for.
   * @param callback The function to be called when the event is emitted.
   */
  on: (event: string, callback: (...args: any[]) => void) => void;

  /**
   * Emits an event to the socket server.
   * @param event The name of the event to emit.
   * @param args The arguments to pass to the event.
   */
  emit: (event: string, ...args: any[]) => void;

  /**
   * Removes a previously registered callback function for the specified event.
   * @param event The name of the event to remove the callback for.
   * @param callback The function to remove. If not specified, all callbacks for the event will be removed.
   */
  off: (event: string, callback?: (...args: any[]) => void) => void;

  /**
   * Returns the underlying socket instance.
   */
  getSocket: () => Socket;

  /**
   * Returns a boolean indicating whether the socket is currently connected to the server.
   */
  isConnected: () => boolean;

  /**
   * Removes all registered event listeners.
   */
  removeAllListeners: () => void;
}

export type {ISocketManager, SocketEmit, SocketResponse};

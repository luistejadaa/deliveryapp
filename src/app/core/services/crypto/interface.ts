import {HandShakeResponse, SessionKeys} from '../../models';
import {APIResponse} from '../../network';

interface ICryptoService {
  /**
   * Performs a handshake with a server using the provided public key.
   * @param publicKey The public key to use for the handshake.
   * @returns A promise that resolves to an APIResponse containing the handshake response.
   */
  makeHandshake: (publicKey: string) => Promise<APIResponse<HandShakeResponse>>;

  /**
   * Generates session keys for use in encrypting and decrypting data.
   * @returns An object containing the session keys.
   */
  generateAppKey: () => SessionKeys;

  /**
   * Encrypts the provided data using the session keys.
   * @param data The data to encrypt.
   * @returns A promise that resolves to the encrypted data.
   */
  encrypt: (data: string) => Promise<string>;

  /**
   * Decrypts the provided data using the session keys.
   * @param data The data to decrypt.
   * @returns A promise that resolves to the decrypted data.
   */
  decrypt: (data: string) => Promise<string>;
}

export type {ICryptoService};

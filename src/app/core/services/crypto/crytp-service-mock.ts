import { HttpStatusCode } from 'axios';
import {Endpoints} from '../../endpoints';
import {HandShakeResponse, SessionKeys} from '../../models';
import {APIResponse, networkManager} from '../../network';
import {generateRandomString} from '../../utils';
import {ICryptoService} from './interface';

class CryptoServiceMock implements ICryptoService {
  makeHandshake = async (publicKey: string): Promise<APIResponse<HandShakeResponse>> => {
    return {
        status: HttpStatusCode.Ok,
        data: {
            sessionId: 'sessionId',
            publicKey: 'publicKey',
        },
    }
  };

  generateAppKey = (): SessionKeys => {
    const sessionId = generateRandomString();
    const publicKey = generateRandomString();
    const privateKey = generateRandomString();
    return {sessionId, publicKey, privateKey};
  };

  encrypt = async (data: string): Promise<string> => {
    return 'encrypted';
  };

  decrypt = async (data: string): Promise<string> => {
    return 'decrypted';
  };
}

const cryptoServiceMock: ICryptoService = new CryptoServiceMock();
export {cryptoServiceMock};

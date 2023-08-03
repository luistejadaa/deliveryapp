import {IEndpoint} from './interface';

const Endpoints = {
  authentication: {
    auth: {
      path: '/auth',
      method: 'POST',
    } as IEndpoint,
    signup: {
      path: '/signup',
      method: 'POST',
    } as IEndpoint,
    getProfile: {
      path: '/profile',
      method: 'GET',
    },
    refreshToken: {
      path: '/refresh-token',
      method: 'POST',
    } as IEndpoint,
    logout: {
      path: '/logout',
      method: 'POST',
    } as IEndpoint,
  },
  crypto: {
    handshake: {
      path: '/handshake',
      method: 'POST',
    } as IEndpoint,
  },
};

export {Endpoints};

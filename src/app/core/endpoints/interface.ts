interface IEndpoint {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export type { IEndpoint };

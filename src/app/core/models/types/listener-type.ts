import { SocketResponse } from "../../network";

type SocketListener = <T>(response: SocketResponse<T>, error: Error) => void;

export type { SocketListener };
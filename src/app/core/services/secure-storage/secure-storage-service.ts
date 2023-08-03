import { ISecureStorageService } from "./interface";

class SecureStorageService implements ISecureStorageService {
   
    get = async (key: string): Promise<string | null> => {
        // TODO: Implement this method.
        return null;
    }

    set = async (key: string, value: string): Promise<void> => {
        // TODO: Implement this method.
    }

    remove = async (key: string): Promise<void> => {
        // TODO: Implement this method.
    }

     clear = async (): Promise<void> => {
        // TODO: Implement this method.
    }
}

const secureStorageService: ISecureStorageService = new SecureStorageService();
export  { secureStorageService };
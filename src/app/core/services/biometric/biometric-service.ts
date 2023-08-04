import { IBiometricService } from "./interface";

class BiometricService implements IBiometricService {
    performBiometricAuthentication(reason: string, title: string, subtitle?: string, description?: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getBiometryType(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    biometricISAvailable(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    secureDataWithBiometric(key: string, data: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    getSecureDataWithBiometric(key: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
}

const biometricService: IBiometricService = new BiometricService();
export { biometricService };
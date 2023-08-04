/**
 * Interface for the BiometricService class, defining the methods that must be implemented.
 */
export interface IBiometricService {
    /**
     * Performs biometric authentication using the device's biometric sensor.
     * @param reason The reason for the authentication request.
     * @param title The title of the authentication prompt.
     * @param subtitle Optional subtitle for the authentication prompt.
     * @param description Optional description for the authentication prompt.
     * @returns A Promise that resolves to true if the authentication was successful, or false otherwise.
     */
    performBiometricAuthentication: (reason: string, title: string, subtitle?: string, description?: string) => Promise<boolean>;
  
    /**
     * Gets the type of biometric sensor available on the device.
     * @returns A Promise that resolves to a string representing the type of biometric sensor available on the device.
     */
    getBiometryType: () => Promise<string>;

    /**
     * Checks if the device has a biometric sensor available.
     * @returns A Promise that resolves to true if a biometric sensor is available, or false otherwise.
     */
    biometricISAvailable: () => Promise<boolean>;

    /**
     * Encrypts and save the given data using the specified key and the device's biometric sensor.
     * @param key The encryption key to use.
     * @param data The data to encrypt.
     * @returns A Promise that resolves to the encrypted data as a string.
     */
    secureDataWithBiometric: (key: string, data: string) => Promise<string>;

    /**
     * Get the given data and decrypt using the specified key and the device's biometric sensor.
     * @param key The decryption key to use.
     * @returns A Promise that resolves to the decrypted data as a string.
     */

    getSecureDataWithBiometric: (key: string) => Promise<string>;
  }
/**
 * Interface for a secure storage service that provides methods for getting, setting, removing and clearing data.
 */
export interface ISecureStorageService {
    /**
     * Gets the value associated with the given key.
     * @param key The key to retrieve the value for.
     * @returns A promise that resolves with the value associated with the given key, or null if the key is not found.
     */
    get: (key: string) => Promise<string | null>;

    /**
     * Sets the value associated with the given key.
     * @param key The key to set the value for.
     * @param value The value to set.
     * @returns A promise that resolves when the value has been set.
     */
    set: (key: string, value: string) => Promise<void>;

    /**
     * Removes the value associated with the given key.
     * @param key The key to remove the value for.
     * @returns A promise that resolves when the value has been removed.
     */
    remove: (key: string) => Promise<void>;

    /**
     * Clears all values from the storage.
     * @returns A promise that resolves when all values have been cleared.
     */
    clear: () => Promise<void>;
}
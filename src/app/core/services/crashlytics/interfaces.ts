/**
 * Defines the interface for the Crashlytics service.
 */
interface ICrashlyticsService {
    /**
     * Logs a message to Crashlytics.
     * @param message The message to log.
     */
    log(message: string): void;

    /**
     * Logs an error to Crashlytics.
     * @param error The error to log.
     */
    logError(error: Error): void;

    /**
     * Logs a warning to Crashlytics.
     * @param warning The warning to log.
     */
    logWarning(warning: string): void;
}

export type { ICrashlyticsService };
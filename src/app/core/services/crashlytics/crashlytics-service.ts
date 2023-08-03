import { ICrashlyticsService } from "./interfaces";

class CrashlyticsService implements ICrashlyticsService {
    log(message: string): void {
        console.log(message);
    }

    logError(error: Error): void {
        console.log(error);
    }

    logWarning(warning: string): void {
        console.log(warning);
    }
}

const crashlyticsService: ICrashlyticsService = new CrashlyticsService();
export { crashlyticsService };
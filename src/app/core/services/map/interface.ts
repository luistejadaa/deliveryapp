/**
 * Defines the interface for a map service that provides methods for getting the current location and directions between two locations.
 */
import { Location } from "../../models";

interface IMapService {
    /**
     * Gets the current location of the user.
     * @returns A promise that resolves to a Location object representing the user's current location.
     */
    getCurrentLocation: () => Promise<Location>;

    /**
     * Gets directions between two locations.
     * @param origin The starting location.
     * @param destination The destination location.
     * @returns A promise that resolves to an object representing the directions between the two locations.
     */
    getDirections: (origin: Location, destination: Location) => Promise<any>;
}

export type { IMapService };
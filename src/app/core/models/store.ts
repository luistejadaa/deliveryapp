import { Location } from "./location";

interface Store {
    id: string;
    name: string;
    address: string;
    location: Location;
    status: 'open' | 'closed' | 'busy' | 'offline';
    description: string;
    openingHours: string;
    closedHours: string;
    imageUrl: string;
}

export type { Store };
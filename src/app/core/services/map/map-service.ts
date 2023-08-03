import {Location} from '../../models';
import {IMapService} from './interface';

class MapService implements IMapService {
  getCurrentLocation = (): Promise<Location> => {
    throw new Error('Method not implemented.');
  };

  getDirections = (origin: Location, destination: Location): Promise<any> => {
    throw new Error('Method not implemented.');
  };
}

const mapService: IMapService = new MapService();
export {mapService};
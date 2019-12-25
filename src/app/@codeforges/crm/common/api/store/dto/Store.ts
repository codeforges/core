import {ThingLocation} from './ThingLocation';
import {Parcel} from '../../parcel/dto/Parcel';

export interface Store {
    id?: number;
    name?: string;
    location: ThingLocation;
    parcels?: Parcel[];
}

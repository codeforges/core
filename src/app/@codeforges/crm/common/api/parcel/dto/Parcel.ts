import {ThingLocation} from '../../store/dto/ThingLocation';
import {User} from '../../../../../admin/common/api/user/dto/User';

export interface Parcel {
    id: string;
    destination: ThingLocation;
    sender: User;
    retriever: User;
    storage?: Storage;
}

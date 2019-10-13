import {ThingType} from './ThingType';
import {ThingAttribute} from './ThingAttribute';

export interface Thing {
    id?: number;
    name?: string;
    type?: ThingType;
    isInitial?: boolean;
    attributes?: ThingAttribute[];
}

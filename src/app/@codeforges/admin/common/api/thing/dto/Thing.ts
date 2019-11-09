import {ThingType} from './ThingType';

export interface Thing {
    id?: number;
    name?: string;
    type?: ThingType;
    isInitial?: boolean;
}

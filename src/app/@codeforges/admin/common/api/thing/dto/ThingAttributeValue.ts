import {ThingTypeAttribute} from './ThingTypeAttribute';

export interface ThingAttributeValue {
    id: string;
    value: string;
    attributes: ThingTypeAttribute[];
}

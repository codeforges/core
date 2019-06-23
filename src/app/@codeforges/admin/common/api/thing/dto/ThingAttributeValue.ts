import {ThingAttribute} from './ThingAttribute';

export interface ThingAttributeValue {
    id: string;
    value: string;
    attributes: ThingAttribute[];
}

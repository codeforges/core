import {Thing} from './Thing';
import {ThingAttributeValue} from './ThingAttributeValue';

export interface ThingAttribute {
    id?: number;
    key: string;
    value: ThingAttributeValue;
    type: string;
    things: Thing[];
}

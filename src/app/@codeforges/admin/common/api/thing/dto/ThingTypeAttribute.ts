import {Thing} from './Thing';
import {ThingAttributeValue} from './ThingAttributeValue';
import {AttributeTypes} from './AttributeTypes';

export interface ThingTypeAttribute {
    id?: number;
    key: string;
    value: ThingAttributeValue;
    type: AttributeTypes;
    things: Thing[];
}

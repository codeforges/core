import {Thing} from './Thing';
import {ThingTypeAttribute} from './ThingTypeAttribute';

export interface ThingType {
    id?: number;
    name: string;
    icon?: string;
    things?: Thing[];
    attributes?: ThingTypeAttribute[];
}

import {Thing} from './Thing';
import {ThingAttribute} from './ThingAttribute';

export interface ThingType {
    id?: number;
    name: string;
    icon?: string;
    things?: Thing[];
    attributes?: ThingAttribute[];
}

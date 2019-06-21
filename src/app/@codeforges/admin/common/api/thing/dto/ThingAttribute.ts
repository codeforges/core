import {Thing} from './Thing';

export interface ThingAttribute {
    id?: number;
    key: string;
    value: string;
    things: Thing[];
}

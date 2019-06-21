import {Thing} from './Thing';

export interface ThingType {
    id?: number;
    name: string;
    things: Thing[];
}

import {Thing} from './Thing';

export interface ThingType {
    id?: number;
    name: string;
    icon?: string;
    things?: Thing[];
}

import {QueryFields, QueryFilter, QuerySort} from '@nestjsx/crud-request';

export interface CrudQueryParams {
    select?: QueryFields;
    filters?: QueryFilter[];
    orOperators?: QueryFilter[];
    joinOperators?: QueryFilter[];
    sort?: QuerySort;
    limit?: number;
    offset?: number;
    page?: number;
}

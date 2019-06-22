import {RequestQueryBuilder} from '@nestjsx/crud-request';
import * as _ from 'lodash';
import {CrudQueryParams} from './CrudQueryParams';

export class CrudQueryStringBuilder {
    private constructor() {
    }

    public static build(query: CrudQueryParams): string {
        if (!query) {
            return '';
        }

        const requestQuery = RequestQueryBuilder.create();

        if (query.select) {
            requestQuery.select(query.select);
        }

        if (query.filters) {
            _.forEach(query.filters, filter => requestQuery.setFilter(filter));
        }

        if (query.orOperators) {
            _.forEach(query.orOperators, filter => requestQuery.setOr(filter));
        }

        if (query.joinOperators) {
            _.forEach(query.joinOperators, filter => requestQuery.setJoin(filter));
        }

        if (query.sort) {
            requestQuery.sortBy(query.sort);
        }

        if (query.limit) {
            requestQuery.setLimit(query.limit);
        }

        if (query.page) {
            requestQuery.setPage(query.page);
        }

        return '?' + requestQuery.query() || '';
    }
}

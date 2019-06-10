export interface GeneralTableColumn {
    columnName: string;
    columnKey: string;
    isDate?: boolean;
    dateFormat?: string;
    timezone?: string;
    isImage?: boolean;
    isEditable?: boolean;
    showSize?: boolean;
    arrayKey?: string | string[];
    arrayValueSeparator?: string;
    countBadgeKey?: string;
    newlineArrayItems?: boolean;
    truncateSize?: number;
    sortingDisabled?: boolean;
    isInvisible?: boolean;
    icon?: string;
    iconAction?: (element: any) => any;
    iconGetClass?: (element: any) => any;
    valuePrefix?: string;
    valuePrefixNoValue?: string;
    isAvatar?: boolean;
    columnClass?: string;
    link?: {
        href: string;
        labelKey?: string;
        hrefKey?: string;
    };
    options?: any[];
}

export type Sort={
    name: string,
    sortType: string
}

export enum SortTypes{
    ALPHA_TYPE = 'alphabetAsc',
    ALPHA_TYPE_R = 'alphabetDesc',
    DEFAULT = ''
}

export enum SortNames{
    ALPHA_NAME = 'A - Z / А - Я',
    ALPHA_NAME_R = 'Z - A / Я - А',
    DEFAULT = ''
}

export const defaultSort = {name: SortNames.DEFAULT, sortType: SortTypes.DEFAULT}
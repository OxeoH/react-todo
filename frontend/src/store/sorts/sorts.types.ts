export type Sort={
    name: string,
    sortType: string
}

export enum SortTypes{
    ALPHA_TYPE = 'alphabetAsc',
    ALPHA_TYPE_R = 'alphabetDesc',
    DEFAULT = 'default'
}

export enum SortNames{
    ALPHA_NAME = 'A - Z / А - Я',
    ALPHA_NAME_R = 'Z - A / Я - А',
    DEFAULT = 'No filter'
}


export const sorts = [
    {name: SortNames.DEFAULT, sortType: SortTypes.DEFAULT},
    {name: SortNames.ALPHA_NAME, sortType: SortTypes.ALPHA_TYPE},
    {name: SortNames.ALPHA_NAME_R, sortType: SortTypes.ALPHA_TYPE_R}
]
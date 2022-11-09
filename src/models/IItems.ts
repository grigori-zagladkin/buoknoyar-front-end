export interface IItem {
    id: number;
    title: string;
    price: number;
    count: number;
    image: string;
    categoryId: number;
    category?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IItemState {
    items: IItem[];
    activeCategory: number;
    search: ISearch;
}

export interface ISearch {
    title: string;
    categoryId: number;
    limit: number;
    page: number;
}

export interface IFilter {
    minPrice: number;
    maxPrice: number;
    sortType: string;
    sortGradation: string;
}

export const sortGradation: Array<string> = ["ASC", "DESC"];
export const sortTypes: Array<string> = ["title, price, time"];

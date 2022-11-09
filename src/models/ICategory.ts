export interface ICategory {
    id: number;
    title: string;
    image?: string;
}

export interface ICategoryState {
    categories: ICategory[];
}

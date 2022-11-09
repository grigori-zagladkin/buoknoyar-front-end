export interface IService {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface IServiceState {
    services: Array<IService>;
}

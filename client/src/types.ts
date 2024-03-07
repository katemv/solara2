export type Nullable<T> = T | null;

export interface IUser {
    id: string;
    token: string;
}

export interface IProduct {
    id: string;
    name: string;
    brand: string;
    price: number;
}

export interface LoginResponse {
    token: string;
    userId: string;
}

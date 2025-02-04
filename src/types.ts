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
    imageUrl: string;
    description: string;
    reviews: Record<number, number>;
}
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
    image: string;
    description: string;
    reviews: Record<number, number>;
}

export enum Categories {
    ALL_PRODUCTS = "categories.all_products",
    TECH = "categories.tech",
    FASHION = "categories.fashion",
    ARTIFACTS = "categories.artifacts",
    SPACE_EXPLORATION = "categories.space_exploration",
    COSMETICS = "categories.cosmetics",
    FOOD_AND_DRINK = "categories.food_and_drink",
}

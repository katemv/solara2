export type Nullable<T> = T | null;

export interface User {
    id: string;
    token: string;
}

export interface LoginResponse {
    token: string;
    userId: string;
}

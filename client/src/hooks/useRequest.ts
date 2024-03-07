import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Nullable } from "../types";

interface IRequest<Res> {
    path: string;
    body: Record<string, string>;
    onSuccess: (data: Res) => void;
    onError: () => void;
}

interface IRequestReturnType<Res> {
    isLoading: boolean;
    errors: string[];
    data: Nullable<Res>;
    request: () => Promise<void>;
}

export function useRequest<Res>({
    path,
    body,
    onSuccess,
    onError,
}: IRequest<Res>): IRequestReturnType<Res> {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState<Nullable<Res>>(null);

    const request = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.post(path, body);
            setIsLoading(false);

            if (response.status !== 200) {
                onError();
            }
            setData(response.data);
            onSuccess(response.data);
        } catch (err) {
            setIsLoading(false);
            // todo setErrors([...errors, err]);
            onError();
        }
    };

    return {
        isLoading,
        errors,
        data,
        request,
    };
}

import { HttpStatusCode } from "axios";
import { useState } from "react";

import axiosInstance from "../api/axiosInstance";
import { Nullable } from "../types";


interface IServer<Res> {
    path: string;
    onSuccess: (data: Res) => void;
    onError: () => void;
}

interface IRequestReturnType<Req, Res> {
    isLoading: boolean;
    errors: string[];
    data: Nullable<Res>;
    request: (body: Req) => Promise<void>;
}

// interface IError {
//     message: string;
//     status: number;
// }

// export function useServer<Req, Res, Err = IError>({
export function useServer<Req, Res>({
    path,
    onSuccess,
    onError
}: IServer<Res>): IRequestReturnType<Req, Res> {
    const [isLoading, setIsLoading] = useState(false);
    // const [errors, setErrors] = useState([]);
    const [data, setData] = useState<Nullable<Res>>(null);

    const request = async (body: Req) => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.post(path, body);

            setIsLoading(false);

            if (response.status !== HttpStatusCode.Ok) {
                onError();
            }
            setData(response.data);
            onSuccess(response.data);
        } catch (err) {
            setIsLoading(false);
            console.error(err);
            // setErrors([...errors, err]);
            onError();
        }
    };

    return {
        isLoading,
        errors: [],
        data,
        request
    };
}

import { useAuth } from "../../providers/auth/authProvider";
import { IUser, Nullable } from "../../types";

interface MockAuthHook {
    setUser?: jest.Mock;
    setIsAuthorized?: jest.Mock;
    user?: Nullable<IUser>;
    isAuthorized?: boolean;
}

export const mockSetUser = jest.fn();
export const mockSetIsAuthorized = jest.fn();

export const setupAuthMock = (customValues: MockAuthHook = {}) => {
    const defaultValues = {
        setUser: mockSetUser,
        setIsAuthorized: mockSetIsAuthorized,
        user: null,
        isAuthorized: false
    };

    (useAuth as jest.Mock).mockReturnValue({
        ...defaultValues,
        ...customValues
    });
};

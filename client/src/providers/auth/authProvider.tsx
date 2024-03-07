import {
    ReactElement,
    FC,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

import { getStorageData, setStorageData } from "../../utils/localStorage";
import { Nullable, User } from "../../types";

interface Props {
    children: ReactElement;
}

interface IAuthContext {
    user: Nullable<User>;
    setUser: Dispatch<SetStateAction<Nullable<User>>>;
    isAuthorized: boolean;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    isAuthorized: false,
    // eslint-disable-next-line
    setUser: () => {},
    // eslint-disable-next-line
    setIsAuthorized: () => {},
});

const AuthProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<Nullable<User>>(null);
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

    useEffect(() => {
        const token = getStorageData("token");

        if (!token) {
            setUser(null);
            setIsAuthorized(false);
            setStorageData("token", null);
        } else {
            setIsAuthorized(true);
            setUser({
                token,
                id: "", // todo update
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, setUser, isAuthorized, setIsAuthorized }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

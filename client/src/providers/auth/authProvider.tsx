import {
    FC,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useEffect,
    useContext,
    ReactNode
} from "react";

import { getStorageData, setStorageData } from "../../utils/localStorage";
import { Nullable, IUser } from "../../types";

interface Props {
    children: ReactNode;
}

interface IAuthContext {
    user: Nullable<IUser>;
    setUser: Dispatch<SetStateAction<Nullable<IUser>>>;
    isAuthorized: boolean;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    isAuthorized: false,
    setUser: () => {},
    setIsAuthorized: () => {}
});

const AuthProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<Nullable<IUser>>(null);
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
                id: "" // todo update
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthorized, setIsAuthorized }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

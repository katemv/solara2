import { ReactElement, FC, createContext, useState } from "react";

interface Props {
    children: ReactElement;
}

export const AuthContext = createContext({
    user: null,
    isAuthorized: false,
});

const AuthProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState(null);
    const isAuthorized = false;

    // const { isPending, error, data } = useQuery({
    //     queryKey: ["login"],
    //     queryFn: () =>
    //         fetch('http://localhost:8080').then((res) =>
    //             res.json(),
    //         ),
    // });

    return (
        <AuthContext.Provider value={{ user, isAuthorized }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import { FC, ReactElement } from "react";
import { Card, Container } from "./styles";

export interface AuthLayoutProps {
    children: ReactElement | ReactElement[];
}

const AuthLayout:FC<AuthLayoutProps> = ({ children }) => {
    return (
        <Container>
            <Card>
                {children}
            </Card>
        </Container>
    );
};

export default AuthLayout;

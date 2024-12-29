import { FC, ReactNode } from "react";
import { Card, Container } from "./styles";

export interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout:FC<AuthLayoutProps> = ({ children }) => {
    return (
        <Container
            testId="auth-layout-container"
            fullWidth
            align="center"
            justify="center"
        >
            <Card
                testId="auth-layout-card"
                align="start"
                justify="center"
                direction="column"
            >
                {children}
            </Card>
        </Container>
    );
};

export default AuthLayout;

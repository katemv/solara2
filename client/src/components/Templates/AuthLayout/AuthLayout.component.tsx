import { FC, ReactNode } from "react";
import { Card, Container } from "./styles";

export interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout:FC<AuthLayoutProps> = ({ children }) => {
    return (
        <Container testId="auth-layout-container">
            <Card testId="auth-layout-card">
                {children}
            </Card>
        </Container>
    );
};

export default AuthLayout;

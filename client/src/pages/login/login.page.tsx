import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container } from "../../components/Auth/Container.component";
import Button from "../../components/Button/Button.component";
import { Flex } from "../../components/Flex/Flex.component";
import { Card } from "../../components/Auth/Card.component";
import Input from "../../components/Input/Input.component";
import { setStorageData } from "../../utils/localStorage";
import Text from "../../components/Text/Text.component";
import Logo from "../../components/Logo/Logo.component";
import { useRequest } from "../../hooks/useRequest";
import { LOGIN_ROUTE } from "../../api/constants";
import { useAuth } from "../../hooks/useAuth";
import { LoginResponse } from "../../types";

const SignupPage = () => {
    const { setUser, setIsAuthorized } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("test12345@test.com");
    const [password, setPassword] = useState("123456");

    const logout = () => {
        setUser(null);
        setIsAuthorized(false);
        setStorageData("token", null);
    };

    const { request: loginRequest, isLoading } = useRequest<LoginResponse>({
        path: LOGIN_ROUTE,
        body: { email, password },
        onSuccess: (data) => {
            const { token, userId } = data;

            setStorageData("token", token);
            setUser({
                id: userId,
                token: token,
            });
            setIsAuthorized(true);
            navigate("/shop", { replace: true });
        },
        onError: () => {
            logout();
        },
    });

    return (
        <Container align="center" justify="center">
            <Card direction="column" gap="spacing3">
                <Logo marginBottom="spacing6" />
                <Flex
                    direction="column"
                    gap="spacing3"
                    align="start"
                    justify="start"
                    marginBottom="spacing5"
                >
                    <Text
                        as="h1"
                        intlKey="pages.login.welcome_back"
                        appearance="headline2"
                        textAlign="left"
                    />
                    <Text
                        as="p"
                        intlKey="pages.login.login_message"
                        color="black60"
                        textAlign="left"
                    />
                </Flex>

                <Flex direction="column" gap="spacing3" marginBottom="spacing9">
                    <Flex
                        direction="column"
                        gap="spacing3"
                        marginBottom="spacing4"
                    >
                        <Input
                            placeholderIntlKey="forms.email_placeholder"
                            value={email}
                            onChange={setEmail}
                        />
                        <Input
                            placeholderIntlKey="forms.password_placeholder"
                            value={password}
                            onChange={setPassword}
                            type="password"
                        />
                    </Flex>
                    <Link to="/shop">
                        <Text
                            as="span"
                            intlKey="pages.login.forgot_password"
                            color="purple100"
                        />
                    </Link>
                </Flex>
                <Button
                    label="pages.login.login"
                    fullWidth
                    onClick={loginRequest}
                    loading={isLoading}
                />

                <Flex align="center" justify="center" gap="spacing2">
                    <Text
                        as="p"
                        intlKey="pages.login.no_account"
                        color="black60"
                    />
                    <Link to="/signup">
                        <Text
                            as="span"
                            intlKey="pages.login.signup"
                            color="purple100"
                        />
                    </Link>
                </Flex>
            </Card>
        </Container>
    );
};

export default SignupPage;

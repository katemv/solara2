import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container } from "../../components/Auth/Container.component";
import Button from "../../components/Button/Button.component";
import { Flex } from "../../components/Flex/Flex.component";
import { Card } from "../../components/Auth/Card.component";
import Input from "../../components/Input/Input.component";
import Text from "../../components/Text/Text.component";
import Logo from "../../components/Logo/Logo.component";
import { useRequest } from "../../hooks/useRequest";
import { SIGNUP_ROUTE, LOGIN_ROUTE } from "../../api/constants";
import { LoginResponse } from "../../types";

const LoginPage = () => {
    const [email, setEmail] = useState("test12345@test.com");
    const [password, setPassword] = useState("123456");
    const navigate = useNavigate();

    const { request: signupRequest, isLoading } = useRequest<LoginResponse>({
        path: SIGNUP_ROUTE,
        body: {
            name: email,
            email,
            password,
        },
        onSuccess: () => {
            navigate(LOGIN_ROUTE, { replace: true });
        },
        onError: () => {
            // todo handle errors
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
                        intlKey="pages.signup.signup"
                        appearance="headline2"
                        textAlign="left"
                    />
                    <Text
                        as="p"
                        intlKey="pages.signup.signup_message"
                        color="black60"
                        textAlign="left"
                    />
                </Flex>

                <Flex direction="column" gap="spacing3" marginBottom="spacing9">
                    <Flex direction="column" gap="spacing3" marginBottom="spacing4">
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
                </Flex>
                <Button
                    label="messages.continue"
                    fullWidth
                    onClick={signupRequest}
                    loading={isLoading}
                />

                <Flex align="center" justify="center" gap="spacing2">
                    <Text as="p" intlKey="pages.signup.existing_account" color="black60" />
                    <Link to="/shop">
                        <Text as="span" intlKey="pages.signup.login" color="purple100" />
                    </Link>
                </Flex>
            </Card>
        </Container>
    );
};

export default LoginPage;

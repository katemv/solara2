import { Link } from "react-router-dom";
import { useState } from "react";

import { Container } from "../../components/Auth/Container.component";
import Button from "../../components/Button/Button.component";
import { Flex } from "../../components/Flex/Flex.component";
import { Card } from "../../components/Auth/Card.component";
import Input from "../../components/Input/Input.component";
import Text from "../../components/Text/Text.component";
import Logo from "../../components/Logo/Logo.component";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container align="center" justify="center">
            <Card direction="column" gap="spacing3">
                <Logo />

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

                <form>
                    <Flex
                        direction="column"
                        gap="spacing3"
                        marginBottom="spacing9"
                    >
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
                    </Flex>
                    <Button label="messages.continue" fullWidth />
                </form>

                <Flex align="center" justify="center" gap="spacing2">
                    <Text
                        as="p"
                        intlKey="pages.signup.existing_account"
                        color="black60"
                    />
                    <Link to="/shop">
                        <Text
                            as="span"
                            intlKey="pages.signup.login"
                            color="purple100"
                        />
                    </Link>
                </Flex>
            </Card>
        </Container>
    );
};

export default LoginPage;

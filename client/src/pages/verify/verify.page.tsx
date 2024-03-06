import { useState } from "react";

import { Container } from "../../components/Auth/Container.component";
import Button from "../../components/Button/Button.component";
import { Card } from "../../components/Auth/Card.component";
import { Flex } from "../../components/Flex/Flex.component";
import Input from "../../components/Input/Input.component";
import Logo from "../../components/Logo/Logo.component";
import Text from "../../components/Text/Text.component";

const VerifyPage = () => {
    const [verificationCode, setVerificationCode] = useState("");

    return (
        <Container align="center" justify="center">
            <Card direction="column" gap="spacing3" justify="space-between">
                <Logo />
                <Flex direction="column" gap="spacing3" marginBottom="spacing6">
                    <Text
                        as="h1"
                        intlKey="pages.verify.verification_code"
                        appearance="headline3"
                        textAlign="left"
                    />
                    <Text
                        as="p"
                        intlKey="pages.verify.verification_code_subtitle"
                        color="black60"
                        textAlign="left"
                    />
                    <Input
                        value={verificationCode}
                        onChange={setVerificationCode}
                        placeholderIntlKey="pages.verify.verification_code"
                    />
                </Flex>
                <Flex gap="spacing3">
                    <Button label="messages.resend" fullWidth type="ghost" />
                    <Button label="messages.confirm" fullWidth />
                </Flex>
            </Card>
        </Container>
    );
};

export default VerifyPage;

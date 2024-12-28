import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import AuthLayout from "../../components/Templates/AuthLayout/AuthLayout.component";
import Button from "../../components/Atoms/Button/Button.component";
import Logo from "../../components/Molecules/Logo/Logo.component";
import Input from "../../components/Atoms/Input/Input.component";
import Text from "../../components/Atoms/Text/Text.component";
import Flex from "../../components/Atoms/Flex/Flex.component";
import {StyledForm} from "./styles";

export interface SignupRequest {
    email: string;
    password: string;
}

const signupSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
}).required();

const SignupPage = () => {
    const { control } = useForm<SignupRequest>({
        resolver: yupResolver(signupSchema)
    });

    return (
        <AuthLayout>
            <Logo marginBottom="spacing6" alignSelf="end" />
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
                />
                <Text
                    as="p"
                    intlKey="pages.signup.signup_message"
                    color="dark80"
                />
            </Flex>

            <StyledForm
                onSubmit={() => {
                    // signupRequest(form)
                }}
            >
                <Flex direction="column" gap="spacing3" marginBottom="spacing9">
                    <Flex direction="column" gap="spacing3" marginBottom="spacing4">
                        <Input
                            placeholderIntlKey="forms.email_placeholder"
                            control={control}
                            name="email"
                        />
                        <Input
                            placeholderIntlKey="forms.password_placeholder"
                            control={control}
                            name="password"
                            type="password"
                        />
                    </Flex>
                </Flex>
                <Button
                    label="messages.continue"
                    type="submit"
                    fullWidth
                />
            </StyledForm>

            <Flex align="center" justify="center" gap="spacing2" fullWidth>
                <Text as="p" intlKey="pages.signup.existing_account" color="dark80" />
                <Link to="/shop">
                    <Text as="span" intlKey="pages.signup.login" color="purple100" />
                </Link>
            </Flex>
        </AuthLayout>
    );
};

export default SignupPage;

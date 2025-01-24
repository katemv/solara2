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
// import { useAuth } from "../../providers/auth/authProvider";
// import { setStorageData } from "../../utils/localStorage";
import { StyledForm, StyledLink } from "./styles";

const loginSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
}).required();

interface LoginRequest {
    email: string;
    password: string;
}

const LoginPage = () => {
    // const { setUser, setIsAuthorized } = useAuth();
    const { control, handleSubmit } = useForm<LoginRequest>({
        resolver: yupResolver(loginSchema)
    });

    // const logout = () => {
    //     setUser(null);
    //     setIsAuthorized(false);
    //     setStorageData("token", null);
    // };

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
                    intlKey="pages.login.welcome_back"
                    appearance="headline2"
                />
                <Text
                    as="p"
                    intlKey="pages.login.login_message"
                    color="dark80"
                />
            </Flex>

            <StyledForm
                onSubmit={handleSubmit((result) => console.log(result))}
            >
                <Flex direction="column" gap="spacing2" marginBottom="spacing9">
                    <Flex direction="column" gap="spacing3">
                        <Input
                            control={control}
                            placeholderIntlKey="forms.email_placeholder"
                            name="email"
                            prefixIconType="mail"
                        />
                        <Input
                            control={control}
                            placeholderIntlKey="forms.password_placeholder"
                            name="password"
                            type="password"
                            prefixIconType="lock"
                            suffixIconType="visibility_off"
                        />
                    </Flex>
                    <StyledLink to="/shop">
                        <Text
                            as="span"
                            intlKey="pages.login.forgot_password"
                            color="purple100"
                        />
                    </StyledLink>
                </Flex>
                <Button
                    label="pages.login.login"
                    type="submit"
                    fullWidth
                />
            </StyledForm>

            <Flex align="center" justify="center" gap="spacing2" fullWidth>
                <Text as="p" intlKey="pages.login.no_account" color="dark80" />
                <Link to="/signup">
                    <Text
                        as="span"
                        intlKey="pages.login.signup"
                        color="purple100"
                    />
                </Link>
            </Flex>
        </AuthLayout>
    );
};

export default LoginPage;

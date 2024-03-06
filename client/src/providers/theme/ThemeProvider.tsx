import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import theme from "./theme";

interface ProviderProps {
    children: React.ReactElement | null;
}

const CustomThemeProvider: FC<ProviderProps> = ({
    children,
}: ProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider;

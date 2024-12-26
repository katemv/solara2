import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

import ThemeProvider from "../../providers/theme/ThemeProvider";
import IntlProvider from "../../providers/intlProvider";
import { MockAuthProvider } from "./authSetup";

export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
    return render(
        <IntlProvider>
            <ThemeProvider>
                {ui}
            </ThemeProvider>
        </IntlProvider>
        , { wrapper: MockAuthProvider, ...options });
};

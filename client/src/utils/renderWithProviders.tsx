import { ReactElement } from "react";
import { render } from "@testing-library/react";

import IntlProvider from "../providers/intlProvider";
import ThemeProvider from "../providers/theme/ThemeProvider";

export const renderWithProviders = (component: ReactElement) => {
    return render(
        <IntlProvider>
            <ThemeProvider>
                {component}
            </ThemeProvider>
        </IntlProvider>

    );
};

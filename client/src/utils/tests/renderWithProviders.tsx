import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

import ThemeProvider from "../../providers/theme/ThemeProvider";
import IntlProvider from "../../providers/intlProvider";
import MockRouter from "./MockRouter";
import { Route } from "react-router-dom";

interface ChildRoutes {
    path: string;
    element: ReactElement;
}

const Providers = ({ ui }: {ui: ReactElement}) => (
    <IntlProvider>
        <ThemeProvider>
            {ui}
        </ThemeProvider>
    </IntlProvider>
);

export const renderWithProviders = (ui: ReactElement, options?: RenderOptions & { childRoutes: ChildRoutes[] }) => {
    return render(
        <MockRouter>
            <Route path="/" element={<Providers ui={ui} />}>
                {options?.childRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Route>
        </MockRouter>
        , { ...options });
};

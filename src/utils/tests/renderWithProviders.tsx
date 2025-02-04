import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render, RenderOptions } from "@testing-library/react";
import { Route } from "react-router-dom";
import { ReactElement } from "react";

import ThemeProvider from "../../providers/theme/ThemeProvider";
import IntlProvider from "../../providers/intlProvider";
import MockRouter from "./MockRouter";

interface ChildRoutes {
    path: string;
    element: ReactElement;
}

const Providers = ({ ui, mocks = [] }: { ui: ReactElement, mocks?: ReadonlyArray<MockedResponse> }) => (
    <MockedProvider mocks={mocks}>
        <IntlProvider>
            <ThemeProvider>
                {ui}
            </ThemeProvider>
        </IntlProvider>
    </MockedProvider>
);

interface ProviderOptions {
    mocks?: ReadonlyArray<MockedResponse>;
    childRoutes?: ChildRoutes[];
}

export const renderWithProviders = (ui: ReactElement, options?: RenderOptions & ProviderOptions) => {
    return render(
        <MockRouter>
            <Route path="/" element={<Providers ui={ui} mocks={options?.mocks} />}>
                {options?.childRoutes?.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Route>
        </MockRouter>
        , { ...options });
};

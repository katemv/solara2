import { screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import { ReactElement } from "react";

import { resetAuthState, updateAuthState } from "../../../utils/test-setup/authSetup";
import { renderWithProviders } from "../../../utils/test-setup/renderWithProviders";
import MockRouter from "../../../utils/test-setup/routerSetup";
import ROUTES from "../../../providers/navigation/routes";
import Layout from "./Layout.component";

export const LayoutTestComponent = ({ element } : { element?: ReactElement}) => (
    <MockRouter>
        <Route path="/" element={<Layout />}>
            {element && <Route path="test-element" element={element} />}
            <Route path={ROUTES.SHOP} element={<div>Test element</div>} />
            <Route path={ROUTES.ADMIN} element={<div>Admin element</div>} />
        </Route>
    </MockRouter>
);

describe("Layout Component", () => {
    beforeEach(() => {
        resetAuthState();
    });

    afterAll(() => {
        resetAuthState();
    });

    it("renders logo and outlet", () => {
        renderWithProviders(<LayoutTestComponent />);
        expect(screen.getByText("Test element")).toBeInTheDocument();
        expect(screen.getByTestId("logo")).toBeInTheDocument();
    });

    it("shows login button when not authorized", () => {
        renderWithProviders(<LayoutTestComponent />);

        const loginButton = screen.getByRole("button", { name: "Log in" });

        expect(loginButton).toBeInTheDocument();
    });

    it("shows navigation menu when authorized", () => {
        updateAuthState({
            isAuthorized: true,
            user: {
                token: "test-token",
                id: "test-id"
            }
        });

        renderWithProviders(<LayoutTestComponent />);

        expect(screen.getByText("Shop")).toBeInTheDocument();
        expect(screen.getByText("Cart")).toBeInTheDocument();
        expect(screen.getByText("Orders")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("renders admin route correctly", () => {
        updateAuthState({
            isAuthorized: true,
            user: {
                token: "test-token",
                id: "test-id"
            }
        });

        window.location.assign("/admin");

        renderWithProviders(<LayoutTestComponent />);

        expect(window.location.pathname).toBe("/admin");
        expect(screen.getByText("Back to shop")).toBeInTheDocument();
        expect(screen.getByText("Admin element")).toBeInTheDocument();
    });
});

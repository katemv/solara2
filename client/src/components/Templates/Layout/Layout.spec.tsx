import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { screen } from "@testing-library/react";
import { ReactElement } from "react";

import { resetAuthState, updateAuthState } from "../../../utils/test-setup/authSetup";
import { renderWithProviders } from "../../../utils/renderWithProviders";
import ROUTES from "../../../providers/navigation/routes";
import Layout from "./Layout.component";

export const MockRouter = ({ element } : { element?: ReactElement}) => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                {element && <Route path="test-element" element={element} />}
                <Route path={ROUTES.SHOP} element={<div>Test element</div>} />
                <Route path={ROUTES.ADMIN} element={<div>Admin element</div>} />
            </Route>
        </Routes>
    </Router>
);

describe("Layout Component", () => {
    beforeEach(() => {
        resetAuthState();
    });

    afterAll(() => {
        resetAuthState();
    });

    it("renders logo and outlet", () => {
        renderWithProviders(<MockRouter />);
        expect(screen.getByText("Test element")).toBeInTheDocument();
        expect(screen.getByTestId("logo")).toBeInTheDocument();
    });

    it("shows login button when not authorized", () => {
        renderWithProviders(<MockRouter />);

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

        renderWithProviders(<MockRouter />);

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

        renderWithProviders(<MockRouter />);

        expect(window.location.pathname).toBe("/admin");
        expect(screen.getByText("Back to shop")).toBeInTheDocument();
        expect(screen.getByText("Admin element")).toBeInTheDocument();
    });
});

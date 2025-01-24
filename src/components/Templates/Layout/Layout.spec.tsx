import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/tests/renderWithProviders";
import { setupAuthMock } from "../../../utils/tests/authUtils";
import Layout from "./Layout.component";

const childRoutes = [
    {
        path: "/",
        element: <div>Test element</div>
    },
    {
        path: "/admin",
        element: <div>Admin element</div>
    }
];

describe("Layout Component", () => {
    beforeEach(() => {
        setupAuthMock();
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it("renders logo and outlet", () => {
        renderWithProviders(<Layout />, { childRoutes });
        expect(screen.getByTestId("logo")).toBeInTheDocument();
        expect(screen.getByText("Test element")).toBeInTheDocument();
    });

    it("shows login button when not authorized", () => {
        renderWithProviders(<Layout />, { childRoutes });

        const loginButton = screen.getByRole("button", { name: "Log in" });

        expect(loginButton).toBeInTheDocument();
    });

    it("shows navigation menu when authorized", () => {
        setupAuthMock({
            isAuthorized: true,
            user: {
                token: "test-token",
                id: "test-id"
            }
        });

        renderWithProviders(<Layout />, { childRoutes });

        expect(screen.getByText("Shop")).toBeInTheDocument();
        expect(screen.getByText("Cart")).toBeInTheDocument();
        expect(screen.getByText("Orders")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
    });

    it("renders admin route correctly", () => {
        setupAuthMock({
            isAuthorized: true,
            user: {
                token: "test-token",
                id: "test-id"
            }
        });

        window.location.assign("/admin");

        renderWithProviders(<Layout />, { childRoutes });

        expect(window.location.pathname).toBe("/admin");
        expect(screen.getByText("Back to shop")).toBeInTheDocument();
        expect(screen.getByText("Admin element")).toBeInTheDocument();
    });
});

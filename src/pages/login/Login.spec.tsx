import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../utils/tests/renderWithProviders";
import { setupAuthMock } from "../../utils/tests/authUtils";
import LoginPage from "./Login.page";

describe("LoginPage", () => {
    beforeEach(() => {
        setupAuthMock();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it("renders login form correctly", () => {
        renderWithProviders(<LoginPage />);

        expect(screen.getByText("Welcome back!")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(screen.getByText("Log in")).toBeInTheDocument();
        expect(screen.getByText("Sign up")).toBeInTheDocument();
        expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    });
});

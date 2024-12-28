import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/tests/renderWithProviders";
import AuthLayout from "./AuthLayout.component";
import { setupAuthMock } from "../../../utils/tests/authUtils";

describe("AuthLayout Component", () => {
    beforeEach(() => {
        setupAuthMock();
    });

    afterAll(() => {
        jest.resetAllMocks();
    })

    it("renders containers correctly", () => {
        renderWithProviders(
            <AuthLayout>
                Test Content
            </AuthLayout>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
        expect(screen.getByTestId("auth-layout-container")).toBeInTheDocument();
        expect(screen.getByTestId("auth-layout-card")).toBeInTheDocument();
    });
});

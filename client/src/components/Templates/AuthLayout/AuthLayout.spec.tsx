import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-setup/renderWithProviders";
import { resetAuthState } from "../../../utils/test-setup/authSetup";
import AuthLayout from "./AuthLayout.component";

describe("AuthLayout Component", () => {
    beforeEach(() => {
        resetAuthState();
    });

    afterAll(() => {
        resetAuthState();
    });

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

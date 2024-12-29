import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/tests/renderWithProviders";

import PageContainer from "./PageContainer.component";

describe("PageContainer Component", () => {
    it("renders children correctly", () => {
        renderWithProviders(
            <PageContainer>
                <div>Test Content</div>
            </PageContainer>
        );
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
});

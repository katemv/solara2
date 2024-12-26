import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/renderWithProviders";
import Logo from "./Logo.component";

describe("Logo Component", () => {
    it("renders with default light mode", () => {
        renderWithProviders(<Logo />);
        const textElement = screen.getByText("Solara");

        expect(textElement).toBeInTheDocument();
    });

    it("renders with dark mode", () => {
        renderWithProviders(<Logo mode="dark" />);
        const textElement = screen.getByText("Solara");

        expect(textElement).toBeInTheDocument();
    });
});

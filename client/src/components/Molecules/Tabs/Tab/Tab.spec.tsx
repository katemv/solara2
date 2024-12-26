import { fireEvent, screen } from "@testing-library/react";
import { afterEach } from "@jest/globals";

import { renderWithProviders } from "../../../../utils/renderWithProviders";

import Tab from "./Tab.component";

describe("Tab Component", () => {
    const DEFAULT_PROPS = {
        onClick: jest.fn(),
        label: "solara",
        isActive: false
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders tab correctly", () => {
        renderWithProviders(<Tab { ...DEFAULT_PROPS } />);
        const tabElement = screen.getByText("Solara");

        expect(tabElement).toBeInTheDocument();
    });

    it("calls onClick with correct label when clicked", () => {
        renderWithProviders(<Tab { ...DEFAULT_PROPS } />);
        fireEvent.click(screen.getByText("Solara"));
        expect(DEFAULT_PROPS.onClick).toHaveBeenCalledWith("solara");
    });
});
